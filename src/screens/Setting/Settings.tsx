import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Text,
  ActivityIndicator,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import {Auth} from 'aws-amplify';
import FastImage from 'react-native-fast-image';

import {
  deleteDriver,
  deleteUser,
  getDriver,
  getUser,
} from '../../queries/Profile/DriverQueries';
import {
  DeleteDriverMutationVariables,
  GetDriverQuery,
  GetDriverQueryVariables,
  DeleteDriverMutation,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQueryVariables,
  GetUserQuery,
} from '../../API';
import {TopHeader, SettingsTabs, LightDarkModeTab} from '../../components';
import {SIZES, icons, COLORS, FONTS} from '../../constants';
import {toggleTheme} from '../../redux/theme/themeActions';
import {useTripContext} from '../../context/TripContext';
import {useAuthContext} from '../../context/AuthContext';

const Settings = ({toggleTheme, appTheme}: any) => {
  const navigation = useNavigation<any>();

  const {userID, authUser} = useAuthContext();
  const {clearAll, loadSelectedCar} = useTripContext();

  function toggleThemeHandler() {
    if (appTheme.name == 'light') {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  }

  const {data} = useQuery<GetDriverQuery, GetDriverQueryVariables>(getDriver, {
    variables: {
      id: userID,
    },
  });
  const driverAccount = data?.getDriver;

  const {data: newData} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {
      variables: {
        id: userID,
      },
    },
  );
  const userAccount = newData?.getUser;

  const [doDeleteDriver, {loading: deleteLoading, error: deleteError}] =
    useMutation<DeleteDriverMutation, DeleteDriverMutationVariables>(
      deleteDriver,
    );
  const [doDeleteUser, {loading: onLoading, error: onError}] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(deleteUser);

  const confirmDelete = () => {
    Alert.alert('Are you sure?', 'Deleting your profile is permanent', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: deleteAccount,
      },
    ]);
  };

  //delete from Cognito
  const deleteAccount = async () => {
    if (!driverAccount && !userAccount) {
      return;
    }
    //delete from Db
    await doDeleteDriver({
      variables: {
        input: {
          id: userID,
          _version: driverAccount?._version,
        },
      },
    });
    await doDeleteUser({
      variables: {
        input: {
          id: userID,
          _version: userAccount?._version,
        },
      },
    });
    clearAll();
    authUser?.deleteUser((err: any) => {
      if (err) {
        Alert.alert('Oops', (err as Error).message);
      }
      Auth.signOut();
    });
    navigation.goBack();
  };

  useEffect(() => {
    const controller = new AbortController();
    loadSelectedCar();
    return () => controller?.abort();
  }, []);

  if (deleteLoading || onLoading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader title="Settings" />
      <SettingsTabs
        title={'Profile'}
        icon={icons.user}
        onPress={() => navigation.navigate('Profile')}
      />
      <SettingsTabs
        title={'Reviews'}
        icon={icons.rate}
        containerStyle={{marginTop: SIZES.radius}}
        onPress={() => navigation.navigate('Ratings')}
      />
      <SettingsTabs
        title={'Documents'}
        icon={icons.documents}
        containerStyle={{marginTop: SIZES.radius}}
        onPress={() => navigation.navigate('Documents')}
      />
      <SettingsTabs
        title={'Ride History'}
        icon={icons.timer}
        containerStyle={{marginTop: SIZES.radius}}
        onPress={() => navigation.navigate('RideHistory')}
      />
      <SettingsTabs
        title={'Terms of Use'}
        icon={icons.security}
        containerStyle={{marginTop: SIZES.radius}}
        onPress={() => navigation.navigate('TermsConditions')}
      />
      {/* Light Dark Mode */}
      <LightDarkModeTab
        iconTitle={icons.moonLight}
        title={'Mode'}
        imageIcon={false}
        iconStyle={{width: 20, height: 20, marginLeft: SIZES.base}}
        onPress={() => navigation.navigate('AccountDetails')}
        switched={
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 30,
              borderRadius: 20,
              borderColor: COLORS.gainsboro,
              borderWidth: 0.3,
              backgroundColor: appTheme.tabBackgroundColor,
            }}
            onPress={() => toggleThemeHandler()}>
            {/* Sun */}
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                ...(appTheme.name == 'light'
                  ? styles.selectedLightModeStyle
                  : {}),
              }}>
              <FastImage
                source={icons.sun}
                style={{
                  height: 20,
                  width: 20,
                }}
                tintColor={COLORS.silver}
              />
            </View>

            {/* Moon  */}
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                ...(appTheme.name == 'dark'
                  ? styles.selectedNightModeStyle
                  : {}),
              }}>
              <FastImage
                source={icons.moon1}
                style={{
                  height: 20,
                  width: 20,
                }}
                tintColor={COLORS.silver}
              />
            </View>
          </TouchableOpacity>
        }
      />

      <SettingsTabs
        title={'About Us'}
        icon={icons.info}
        containerStyle={{marginTop: SIZES.radius}}
        onPress={() => Linking.openURL('https://www.riturnit.com/about-us')}
      />

      <SettingsTabs
        title={'Contact Us'}
        icon={icons.support}
        containerStyle={{marginTop: SIZES.radius}}
        onPress={() => navigation.navigate('ContactUs')}
      />

      {/* DELETE ACCOUNT BUTTON */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 50,
          marginTop: SIZES.padding,
          alignItems: 'center',
          paddingLeft: 15,
          marginHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
        onPress={confirmDelete}>
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={icons.bin}
            tintColor={COLORS.scarlet}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>

        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              marginLeft: SIZES.radius,
              color: appTheme.buttonText,
              ...FONTS.h5,
            }}>
            Delete account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.cornflowerBlue,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.mustard,
  },
});

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    toggleTheme: (themeType: any) => {
      return dispatch(toggleTheme(themeType));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

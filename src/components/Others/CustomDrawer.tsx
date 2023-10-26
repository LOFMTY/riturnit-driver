import React, {useEffect, useState} from 'react';
import {
  View,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import {Auth} from 'aws-amplify';
import FastImage from 'react-native-fast-image';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useQuery} from '@apollo/client';

import {HomeMap} from '../../screens';
import {FONTS, COLORS, SIZES, icons} from '../../constants';
import {CustomDrawerStackNavigatorParamList} from '../../type/navigation';
import {useAuthContext} from '../../context/AuthContext';
import {getDriver} from '../../queries/Profile/DriverQueries';
import {GetDriverQuery, GetDriverQueryVariables} from '../../API';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';
import DrawerProfileImage from './DrawerProfileImage';
import {useTripContext} from '../../context/TripContext';

const Drawer = createDrawerNavigator<CustomDrawerStackNavigatorParamList>();

const CustomDrawerItem = ({
  label,
  iconStyle,
  icon,
  contentContainerStyle,
  onPress,
  labelStyle,
}: any) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 50,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: 15,
        marginHorizontal: SIZES.base,
        borderRadius: SIZES.base,
        ...contentContainerStyle,
      }}
      onPress={onPress}>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            ...iconStyle,
          }}
        />
      </View>

      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            marginLeft: SIZES.radius,
            color: COLORS.black,
            ...FONTS.h6,
            ...labelStyle,
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({navigation, appTheme}: any) => {
  const {userID} = useAuthContext();
  const {loadSelectedCar} = useTripContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    loadSelectedCar();
    return () => controller?.abort();
  }, []);

  const {loading, data, error} = useQuery<
    GetDriverQuery,
    GetDriverQueryVariables
  >(getDriver, {
    variables: {
      id: userID,
    },
  });
  const driverAccount = data?.getDriver;

  const signOut = async () => {
    try {
      setIsLoading(true);
      await Auth.signOut({global: true});
    } catch (error) {
      Alert.alert('Oops', (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <Spinner
        visible={isLoading}
        animation={'fade'}
        textStyle={{color: appTheme.textColor}}
        overlayColor={'rgba(0,0,0,0.5)'}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/* Close */}
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: SIZES.base,
            paddingRight: SIZES.radius,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <FastImage
              source={icons.cross}
              style={{
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <DrawerProfileImage
          profileName={driverAccount?.name}
          driverImage={driverAccount?.image || DEFAULT_PROFILE_IMAGE}
          name={driverAccount?.name}
          email={driverAccount?.email}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />

        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.height > 700 ? SIZES.padding : SIZES.base,
          }}>
          <CustomDrawerItem
            label={'Vehicles'}
            icon={icons.vehicle}
            onPress={() => navigation.navigate('Vehicles')}
            labelStyle={{
              color: appTheme.textColor,
            }}
            contentContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
            }}
          />

          <CustomDrawerItem
            label={'Earnings'}
            icon={icons.earnings}
            onPress={() => {
              // navigation.closeDrawer();
              navigation.navigate('Earnings');
            }}
            labelStyle={{
              color: appTheme.textColor,
            }}
            contentContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
            }}
          />

          <CustomDrawerItem
            label={'Wallet'}
            icon={icons.wallet}
            onPress={() => {
              // navigation.closeDrawer();
              navigation.navigate('Wallet');
            }}
            labelStyle={{
              color: appTheme.textColor,
            }}
            contentContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
            }}
          />

          <CustomDrawerItem
            label="Notifications"
            icon={icons.bell}
            onPress={() => {
              navigation.navigate('Notifications');
            }}
            labelStyle={{
              color: appTheme.textColor,
            }}
            contentContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
            }}
          />

          <CustomDrawerItem
            label="Invite Friends"
            icon={icons.addUser}
            onPress={() => {
              navigation.navigate('InviteFriends');
            }}
            labelStyle={{
              color: appTheme.textColor,
            }}
            contentContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
            }}
          />

          <CustomDrawerItem
            label="Settings"
            icon={icons.settings}
            onPress={() => {
              navigation.navigate('Settings');
            }}
            labelStyle={{
              color: appTheme.textColor,
            }}
            contentContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
            }}
          />

          <CustomDrawerItem
            label="Logout"
            icon={icons.logOut}
            iconStyle={{tintColor: COLORS.gray}}
            onPress={signOut}
            labelStyle={{
              color: COLORS.gray,
            }}
            contentContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
              marginTop: 20,
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({selectedTab, setSelectedTab, appTheme}: any) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => {
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              appTheme={appTheme}
            />
          );
        }}>
        <Drawer.Screen name="Home">
          {props => <HomeMap {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(CustomDrawer);

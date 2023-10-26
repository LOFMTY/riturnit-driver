import {useRef, useMemo} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import React from 'react';
import {ALERT_TYPE, Root, Toast} from 'react-native-alert-notification';
import {useMutation, useQuery} from '@apollo/client';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {
  MapMenu,
  ToggleTheme,
  DriverBottomSheetInfo,
  OnCenterButton,
  FindingRequest,
  AvailableBalance,
  GoButton,
} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import {toggleTheme} from '../../redux/theme/themeActions';
import {useUserLocationContext} from '../../context/UserLocationContext';
import {useTripContext} from '../../context/TripContext';
import {
  GetDriverQuery,
  GetDriverQueryVariables,
  UpdateDriverMutation,
  UpdateDriverMutationVariables,
} from '../../API';
import {getDriver, updateDriver} from '../../queries/Profile/DriverQueries';
import {useAuthContext} from '../../context/AuthContext';

const HomeMap = ({appTheme}: any) => {
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const {driverLocation} = useUserLocationContext();
  const {setIsOnline, isOnline, selectedVehicle} = useTripContext();
  const {userID} = useAuthContext();

  const mapRef = useRef<any>(null);
  const bottomSheetRef = useRef<any>(null);

  const snapPoints = useMemo(() => ['21%', '9%'], []);
  const snapPoints2 = useMemo(() => ['20%', '20%'], []);

  const onCenter = () => {
    mapRef?.current.animateToRegion(
      {
        ...driverLocation,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      1000,
    );
  };

  // GET DRIVER ID
  const {data, loading} = useQuery<GetDriverQuery, GetDriverQueryVariables>(
    getDriver,
    {
      variables: {
        id: userID,
      },
    },
  );
  const driverInfo = data?.getDriver;

  // UPDATE DRIVER ONLINE STATUS
  const [doUpdateDriver] = useMutation<
    UpdateDriverMutation,
    UpdateDriverMutationVariables
  >(updateDriver);

  // UPDATE DRIVER LOCATION AND ONLINE STATUS
  const updateDriverOnlineStatus = async () => {
    if (!driverInfo) {
      return;
    }
    try {
      const res = await doUpdateDriver({
        variables: {
          input: {
            id: driverInfo?.id,
            onlineStatus: !isOnline,
            lat: driverLocation?.latitude,
            lng: driverLocation?.longitude,
            _version: driverInfo?._version,
          },
        },
      });
      // console.log('DRIVER STATUS', res);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  // GO ONLINE BUTTON
  const onGoPress = () => {
    if (driverInfo?.verificationStatus !== 'COMPLETE') {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: ' You account has not been verified.',
        titleStyle: {...FONTS.h5},
        textBody: `You'll be notified via your email when your account haas been verified to begin returning items`,
        textBodyStyle: {...FONTS.body3, paddingTop: 5},
      });
    } else if (!selectedVehicle) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        textBody: `You currently have no vehicle. Add or select a vehicle to make a Return`,
        textBodyStyle: {...FONTS.h5, padding: 8},
      });
    } else {
      setIsOnline(!isOnline);
      updateDriverOnlineStatus();
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
    <Root>
      {/* MapView */}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: appTheme.bottomSheet,
        }}>
        {driverLocation?.latitude ? (
          <MapView
            ref={mapRef}
            style={[{width, height}, StyleSheet.absoluteFill]}
            customMapStyle={appTheme.mapStyle}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={false}
            followsUserLocation={true}
            loadingEnabled={true}
            loadingIndicatorColor={COLORS.gradient2}
            loadingBackgroundColor={appTheme.bottomSheet}
            initialRegion={driverLocation}
          />
        ) : (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center'}}
            size={'large'}
            color={'#3580ff'}
          />
        )}
      </SafeAreaView>

      {isOnline ? (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints2}
          handleIndicatorStyle={{backgroundColor: appTheme.bottomSheet}}
          enableOverDrag={false}
          handleStyle={{backgroundColor: appTheme.bottomSheet}}
          backgroundStyle={{
            backgroundColor: appTheme.bottomSheet,
          }}>
          <FindingRequest />
        </BottomSheet>
      ) : (
        <BottomSheet
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          index={1}
          handleIndicatorStyle={{backgroundColor: appTheme.textColor}}
          handleStyle={{backgroundColor: appTheme.bottomSheet}}
          backgroundStyle={{
            backgroundColor: appTheme.bottomSheet,
          }}>
          <DriverBottomSheetInfo statusText={'Offline'} />
        </BottomSheet>
      )}

      <GoButton isOnline={isOnline} onPress={onGoPress} />
      <AvailableBalance />
      <MapMenu />
      <ToggleTheme />
      <OnCenterButton
        onCenter={onCenter}
        containerStyle={{bottom: SIZES.height > 700 ? 680 : 550}}
      />
    </Root>
  );
};

function mapStateToProps(state: {themeReducer: {appTheme: any}; error: any}) {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeMap);

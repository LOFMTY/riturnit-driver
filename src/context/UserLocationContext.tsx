import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  useRef,
} from 'react';
import {hasLocationPermission} from '../utilities/service';
import Geolocation from 'react-native-geolocation-service';
import {ALERT_TYPE, Toast, Root} from 'react-native-alert-notification';
import {AppState, Dimensions} from 'react-native';

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

type UserLocationContextType = {
  driverLocation: any;
  setDriverLocation: any;
  userCurrentLocation: Function;
  userMobileLocation: Function;
};

const UserLocationContext = createContext<UserLocationContextType>({
  driverLocation: '',
  setDriverLocation: initialState,
  userCurrentLocation: Function,
  userMobileLocation: Function,
});

const UserLocationContextProvider = ({children}: {children: ReactNode}) => {
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const appState = useRef<any>(AppState.currentState);

  const [driverLocation, setDriverLocation] = useState<any>(initialState);
  const [appStateVisible, setAppStateVisible] = useState<any>(appState.current);

  const userCurrentLocation = async () => {
    let hasPermission = await hasLocationPermission();
    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setDriverLocation({
          ...driverLocation,
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      error => {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Location Error',
          textBody: `Can\'t find your current location, ${error}`,
          autoClose: 1500,
        });
        setDriverLocation(null);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  const userMobileLocation = async () => {
    let hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setDriverLocation({
          ...driverLocation,
          latitude: latitude,
          longitude: longitude,
        });
      },
      error => {
        setDriverLocation(error);
      },
    );

    const foregroundSub = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setDriverLocation({
          ...driverLocation,
          latitude: latitude,
          longitude: longitude,
        });
      },
      error => {
        setDriverLocation(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        distanceFilter: 100,
        enableHighAccuracy: true,
        interval: 100,
        fastestInterval: 500,
      },
    );
    return foregroundSub;
  };

  useMemo(() => {
    let unmounted = false;
    userCurrentLocation();
    userMobileLocation();
    return () => {
      unmounted = true;
    };
  }, []);

  useMemo(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange => {
        if (
          appState.current.match(/inactive|background/) &&
          handleAppStateChange === 'active'
        ) {
          userCurrentLocation();
        }

        appState.current = handleAppStateChange;
        setAppStateVisible(handleAppStateChange);
      },
    );

    return () => {
      subscription.remove();
    };
  }, [appStateVisible]);

  return (
    <Root>
      <UserLocationContext.Provider
        value={{
          driverLocation,
          setDriverLocation,
          userMobileLocation,
          userCurrentLocation,
        }}>
        {children}
      </UserLocationContext.Provider>
    </Root>
  );
};

export default UserLocationContextProvider;

export const useUserLocationContext = () => useContext(UserLocationContext);

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {ActivityIndicator, Easing, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNetInfo} from '@react-native-community/netinfo';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAuthContext} from '../context/AuthContext';
import {GetDriverQuery, GetDriverQueryVariables} from '../API';
import {getDriver} from '../queries/Profile/DriverQueries';
import {
  WelcomeRegistration,
  DriverTest,
  TakeDriverPhoto,
  VehicleRegistration,
  DriverLicense,
  VehicleInsurance,
  RegistrationComplete,
  SignIn,
  SignUp,
  ForgotPassword,
  NewPassword,
  ConfirmEmail,
  PrivacyPolicy,
} from '../screens';
import PushNotifications from '../utilities/PushNotifications';
import {NoInternet} from '../components';

const Stack = createNativeStackNavigator<any>();
const options: any = {
  gestureEnabled: true,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {duration: 300, easing: Easing.inOut(Easing.ease)},
    },
    close: {
      animation: 'timing',
      config: {duration: 300, easing: Easing.inOut(Easing.ease)},
    },
  },
  cardStyleInterpolator: ({current: {progress}}: any) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const AppNav = ({appTheme, onBoarded}: any) => {
  const netInfo = useNetInfo();
  // console.log('network state', netInfo.isConnected?.toString());

  const {authUser, isLoading, userID}: any = useAuthContext();

  const {loading, data} = useQuery<GetDriverQuery, GetDriverQueryVariables>(
    getDriver,
    {
      variables: {
        id: userID,
      },
    },
  );

  const driverInfo = data?.getDriver;
  // console.log('driver info', driverInfo);

  if (isLoading || loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          style={{justifyContent: 'center'}}
          size={'large'}
          color={'#3580ff'}
        />
      </View>
    );
  }

  if (netInfo.isConnected === false) {
    return <NoInternet />;
  }

  let stackScreens = null;
  if (driverInfo?.verificationStatus === null) {
    stackScreens = (
      <>
        <Stack.Screen
          name="WelcomeRegistration"
          component={WelcomeRegistration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DriverTest"
          component={DriverTest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TakeDriverPhoto"
          component={TakeDriverPhoto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DriverLicense"
          component={DriverLicense}
          options={() => options}
        />
        <Stack.Screen
          name="VehicleRegistration"
          component={VehicleRegistration}
          options={() => options}
        />
        <Stack.Screen
          name="VehicleInsurance"
          component={VehicleInsurance}
          options={() => options}
        />
        <Stack.Screen
          name="RegistrationComplete"
          component={RegistrationComplete}
          options={() => options}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={() => options}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={() => options}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={() => options}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={() => options}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={() => options}
        />
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmail}
          options={() => options}
        />
      </>
    );
  } else {
    stackScreens = (
      <Stack.Screen
        name="HomeMap"
        component={AppStack}
        options={() => options}
      />
    );
  }

  return (
    <NavigationContainer>
      {/* <PushNotifications /> */}
      {!authUser ? (
        <AuthStack onBoarded={onBoarded} />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {stackScreens}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

function mapStateToProps(state: {themeReducer: {appTheme: any}; error: any}) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AppNav);

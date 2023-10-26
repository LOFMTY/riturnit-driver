import React from 'react';
import {Easing} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {
  SignIn,
  SignUp,
  Welcome,
  OnBoarding,
  ConfirmEmail,
  ForgotPassword,
  NewPassword,
  PrivacyPolicy,
} from '../screens';

const Stack = createSharedElementStackNavigator();
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

const AuthStack = ({onBoarded}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={onBoarded ? 'SignIn' : 'OnBoarding'}
      detachInactiveScreens={false}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={() => options}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={() => options}
      />
      <Stack.Screen name="SignIn" component={SignIn} options={() => options} />
      <Stack.Screen name="SignUp" component={SignUp} options={() => options} />
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
    </Stack.Navigator>
  );
};

export default AuthStack;

import React, {useEffect, useState} from 'react';
import {Easing, AppState, NativeModules, Platform} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import NetInfo from '@react-native-community/netinfo';

import CustomDrawer from '../components/Others/CustomDrawer';
import {
  Profile,
  Earnings,
  Wallet,
  InviteFriends,
  Notifications,
  Vehicles,
  ContactList,
  Settings,
  PrivacyPolicy,
  AddVehicle,
  ContactUs,
  TransactionHistory,
  WithdrawMoney,
  SuccessfulWithdrawal,
  Ratings,
  AddCard,
  TripDetails,
  PaymentMethod,
  Documents,
  RideRequest,
  ViewItems,
  CancelTrip,
  CancelTripReason,
  BankDetails,
  TermsConditions,
  RideHistory,
} from '../screens';
import {NoInternet} from '../components';

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

const AppStack = () => {
  const [connection, setConnection] = useState<any>(true);

  // Switching between different Wi-Fi does not send events in iOS
  useEffect(() => {
    const subAppState = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (Platform.OS === 'ios' && nextAppState == 'active') {
          let newNetInfo = await NativeModules.RNCNetInfo.getCurrentState(
            'wifi',
          );
          //your code here
          // console.log('newnetInfo', newNetInfo);
        }
      },
    );

    const unsubNetState = NetInfo.addEventListener(state => {
      setConnection(state.isConnected);
    });

    return () => {
      if (subAppState) {
        subAppState.remove();
      }
      unsubNetState();
    };
  }, [connection]);

  if (!connection) {
    return <NoInternet />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeScreen"
        component={CustomDrawer}
        options={() => options}
      />

      <Stack.Screen
        name="RideRequest"
        component={RideRequest}
        options={() => options}
      />

      <Stack.Screen
        name="CancelTrip"
        component={CancelTrip}
        options={() => options}
      />
      <Stack.Screen
        name="CancelTripReason"
        component={CancelTripReason}
        options={() => ({
          presentation: 'modal',
        })}
      />
      <Stack.Screen
        name="ViewItems"
        component={ViewItems}
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetails}
        options={() => options}
      />
      <Stack.Screen
        name="Earnings"
        component={Earnings}
        options={() => options}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={() => options}
      />
      <Stack.Screen name="Wallet" component={Wallet} options={() => options} />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={() => options}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={() => options}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={() => ({
          presentation: 'modal',
        })}
      />
      <Stack.Screen
        name="WithdrawMoney"
        component={WithdrawMoney}
        options={() => options}
      />
      <Stack.Screen
        name="SuccessfulWithdrawal"
        component={SuccessfulWithdrawal}
        options={() => options}
      />
      <Stack.Screen
        name="InviteFriends"
        component={InviteFriends}
        options={() => options}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={() => options}
      />
      <Stack.Screen
        name="Documents"
        component={Documents}
        options={() => options}
      />
      <Stack.Screen
        name="ContactList"
        component={ContactList}
        options={() => options}
      />
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={() => options}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={() => options}
      />
      <Stack.Screen name="RideHistory" component={RideHistory} />
      <Stack.Screen
        name="Vehicles"
        component={Vehicles}
        options={() => options}
      />
      <Stack.Screen
        name="Ratings"
        component={Ratings}
        options={() => options}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={() => options}
      />
      <Stack.Screen
        name="BankDetails"
        component={BankDetails}
        options={() => options}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={() => options}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={() => options}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

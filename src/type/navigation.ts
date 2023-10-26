import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootNavigatorParamList = {
  reset(arg0: {index: number; routes: {name: string}[]}): unknown;
  navigate: any;
  Auth: undefined;
  EditProfile: undefined;
  VehicleRegistration: undefined;
  Home: NavigatorScreenParams<CustomDrawerStackNavigatorParamList>;
};

export type MapStackNavigatorParamList = {
  popToTop(): unknown;
  dispatch: any;
  reset: any;
  push: any;
  navigate: any;
  goBack: any;
  Home: NavigatorScreenParams<CustomDrawerStackNavigatorParamList>;
  RideRequest: {trip: string};
  ViewItems: {tripId: string; userId: string};
  CancelTrip: undefined;
  CancelTripReason: undefined;
  TripDetails: undefined;
};

export type CustomDrawerStackNavigatorParamList = {
  goBack: any;
  navigate: any;
  Earnings: undefined;
  Home: undefined;
  Wallet: NavigatorScreenParams<WalletStackNavigatorParamList>;
  InviteFriends: undefined;
  ContactList: {inviteCode: string};
  Profile: undefined;
  Settings: NavigatorScreenParams<SettingsStackNavigatorParamList>;
};

export type SettingsStackNavigatorParamList = {
  goBack(): unknown;
  navigate: any;
  Profile: undefined;
  Ratings: undefined;
  Vehicles: undefined;
  AddVehicle: undefined;
  Documents: undefined;
  RideHistory: undefined;
  TermsConditions: undefined;
  ContactUs: undefined;
};

export type WalletStackNavigatorParamList = {
  goBack: any;
  reset: any;
  navigate: any;
  Wallet: undefined;
  WithdrawMoney: undefined;
  TransactionHistory: undefined;
  SuccessfulWithdrawal: undefined;
  AddCard: undefined;
};

export type DriverRegistrationNavigationParamList = {
  replace: any;
  navigate: any;
  Welcome: undefined;
  DriverTest: undefined;
  TakeDriverPhoto: undefined;
  DriverLicense: undefined;
  VehicleRegistration: undefined;
  VehicleInsurance: undefined;
  RegistrationComplete: undefined;
};

export type AuthStackNavigatorParamList = {
  replace(arg0: string): unknown;
  goBack: any;
  navigate: any;
  OnBoarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ConfirmEmail: {email?: string};
  ForgotPassword: undefined;
  NewPassword: undefined;
};

// ---------NAVIGATION PROP------------

export type RideRequestNavigationProp = NativeStackNavigationProp<
  MapStackNavigatorParamList,
  'RideRequest'
>;

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'SignIn'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'SignUp'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'ConfirmEmail'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'ForgotPassword'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'NewPassword'
>;

export type DriverRegistrationNavigationProp = NativeStackNavigationProp<
  DriverRegistrationNavigationParamList,
  'Welcome'
>;

export type ContactListNavigationProp = NativeStackNavigationProp<
  CustomDrawerStackNavigatorParamList,
  'ContactList'
>;

export type ViewItemsNavigationProp = NativeStackNavigationProp<
  MapStackNavigatorParamList,
  'ViewItems'
>;

// ----------ROUTE PROPS -----------

export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'ConfirmEmail'
>;

export type RideRequestRouteProp = RouteProp<
  MapStackNavigatorParamList,
  'RideRequest'
>;

export type ContactListRouteProp = RouteProp<
  CustomDrawerStackNavigatorParamList,
  'ContactList'
>;

export type ViewItemsRouteProp = RouteProp<
  MapStackNavigatorParamList,
  'ViewItems'
>;

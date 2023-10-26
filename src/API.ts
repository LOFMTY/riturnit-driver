/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PaymentIntent = {
  __typename: "PaymentIntent",
  clientSecret: string,
  ephemeralKey: string,
  customer: string,
  setupIntent: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type StripeIdentitySession = {
  __typename: "StripeIdentitySession",
  ephemeralKeySecret: string,
  verificationSessionId: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type CreatePaymentIntentInput = {
  clientSecret: string,
  ephemeralKey: string,
  customer: string,
  setupIntent: string,
  id?: string | null,
  _version?: number | null,
};

export type ModelPaymentIntentConditionInput = {
  clientSecret?: ModelStringInput | null,
  ephemeralKey?: ModelStringInput | null,
  customer?: ModelStringInput | null,
  setupIntent?: ModelStringInput | null,
  and?: Array< ModelPaymentIntentConditionInput | null > | null,
  or?: Array< ModelPaymentIntentConditionInput | null > | null,
  not?: ModelPaymentIntentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePaymentIntentInput = {
  clientSecret?: string | null,
  ephemeralKey?: string | null,
  customer?: string | null,
  setupIntent?: string | null,
  id: string,
  _version?: number | null,
};

export type DeletePaymentIntentInput = {
  id: string,
  _version?: number | null,
};

export type CreateStripeIdentitySessionInput = {
  ephemeralKeySecret: string,
  verificationSessionId: string,
  id?: string | null,
  _version?: number | null,
};

export type ModelStripeIdentitySessionConditionInput = {
  ephemeralKeySecret?: ModelStringInput | null,
  verificationSessionId?: ModelStringInput | null,
  and?: Array< ModelStripeIdentitySessionConditionInput | null > | null,
  or?: Array< ModelStripeIdentitySessionConditionInput | null > | null,
  not?: ModelStripeIdentitySessionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateStripeIdentitySessionInput = {
  ephemeralKeySecret?: string | null,
  verificationSessionId?: string | null,
  id: string,
  _version?: number | null,
};

export type DeleteStripeIdentitySessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateRiturnitFeesInput = {
  id?: string | null,
  rideBasePay: number,
  serviceFee: number,
  discountFee: number,
  _version?: number | null,
};

export type ModelRiturnitFeesConditionInput = {
  rideBasePay?: ModelFloatInput | null,
  serviceFee?: ModelFloatInput | null,
  discountFee?: ModelFloatInput | null,
  and?: Array< ModelRiturnitFeesConditionInput | null > | null,
  or?: Array< ModelRiturnitFeesConditionInput | null > | null,
  not?: ModelRiturnitFeesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type RiturnitFees = {
  __typename: "RiturnitFees",
  id: string,
  rideBasePay: number,
  serviceFee: number,
  discountFee: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRiturnitFeesInput = {
  id: string,
  rideBasePay?: number | null,
  serviceFee?: number | null,
  discountFee?: number | null,
  _version?: number | null,
};

export type DeleteRiturnitFeesInput = {
  id: string,
  _version?: number | null,
};

export type CreateRatingInput = {
  id?: string | null,
  rating?: number | null,
  comment?: string | null,
  driver_image?: string | null,
  driver_name?: string | null,
  customer_name?: string | null,
  customer_image?: string | null,
  tripsID: string,
  driverID: string,
  userID: string,
  _version?: number | null,
};

export type ModelRatingConditionInput = {
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  driver_image?: ModelStringInput | null,
  driver_name?: ModelStringInput | null,
  customer_name?: ModelStringInput | null,
  customer_image?: ModelStringInput | null,
  tripsID?: ModelIDInput | null,
  driverID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Rating = {
  __typename: "Rating",
  id: string,
  rating?: number | null,
  comment?: string | null,
  driver_image?: string | null,
  driver_name?: string | null,
  customer_name?: string | null,
  customer_image?: string | null,
  tripsID: string,
  driverID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRatingInput = {
  id: string,
  rating?: number | null,
  comment?: string | null,
  driver_image?: string | null,
  driver_name?: string | null,
  customer_name?: string | null,
  customer_image?: string | null,
  tripsID?: string | null,
  driverID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteRatingInput = {
  id: string,
  _version?: number | null,
};

export type CreateRiturnitContactUsInput = {
  id?: string | null,
  contactUsImage: string,
  introDescription: string,
  BuildingNumber: string,
  StreetName: string,
  CityName: string,
  AreaOrState: string,
  PostalCode: number,
  ContactNumber: string,
  EmailAddress: string,
  FacebookURL?: string | null,
  TikTok?: string | null,
  Twitter?: string | null,
  Instagram?: string | null,
  _version?: number | null,
};

export type ModelRiturnitContactUsConditionInput = {
  contactUsImage?: ModelStringInput | null,
  introDescription?: ModelStringInput | null,
  BuildingNumber?: ModelStringInput | null,
  StreetName?: ModelStringInput | null,
  CityName?: ModelStringInput | null,
  AreaOrState?: ModelStringInput | null,
  PostalCode?: ModelIntInput | null,
  ContactNumber?: ModelStringInput | null,
  EmailAddress?: ModelStringInput | null,
  FacebookURL?: ModelStringInput | null,
  TikTok?: ModelStringInput | null,
  Twitter?: ModelStringInput | null,
  Instagram?: ModelStringInput | null,
  and?: Array< ModelRiturnitContactUsConditionInput | null > | null,
  or?: Array< ModelRiturnitContactUsConditionInput | null > | null,
  not?: ModelRiturnitContactUsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type RiturnitContactUs = {
  __typename: "RiturnitContactUs",
  id: string,
  contactUsImage: string,
  introDescription: string,
  BuildingNumber: string,
  StreetName: string,
  CityName: string,
  AreaOrState: string,
  PostalCode: number,
  ContactNumber: string,
  EmailAddress: string,
  FacebookURL?: string | null,
  TikTok?: string | null,
  Twitter?: string | null,
  Instagram?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRiturnitContactUsInput = {
  id: string,
  contactUsImage?: string | null,
  introDescription?: string | null,
  BuildingNumber?: string | null,
  StreetName?: string | null,
  CityName?: string | null,
  AreaOrState?: string | null,
  PostalCode?: number | null,
  ContactNumber?: string | null,
  EmailAddress?: string | null,
  FacebookURL?: string | null,
  TikTok?: string | null,
  Twitter?: string | null,
  Instagram?: string | null,
  _version?: number | null,
};

export type DeleteRiturnitContactUsInput = {
  id: string,
  _version?: number | null,
};

export type CreateRiturnitPointInput = {
  id?: string | null,
  points: number,
  _version?: number | null,
};

export type ModelRiturnitPointConditionInput = {
  points?: ModelIntInput | null,
  and?: Array< ModelRiturnitPointConditionInput | null > | null,
  or?: Array< ModelRiturnitPointConditionInput | null > | null,
  not?: ModelRiturnitPointConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type RiturnitPoint = {
  __typename: "RiturnitPoint",
  id: string,
  points: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRiturnitPointInput = {
  id: string,
  points?: number | null,
  _version?: number | null,
};

export type DeleteRiturnitPointInput = {
  id: string,
  _version?: number | null,
};

export type CreateRiturnitCancelTripReasonInput = {
  id?: string | null,
  label: string,
  _version?: number | null,
};

export type ModelRiturnitCancelTripReasonConditionInput = {
  label?: ModelStringInput | null,
  and?: Array< ModelRiturnitCancelTripReasonConditionInput | null > | null,
  or?: Array< ModelRiturnitCancelTripReasonConditionInput | null > | null,
  not?: ModelRiturnitCancelTripReasonConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type RiturnitCancelTripReason = {
  __typename: "RiturnitCancelTripReason",
  id: string,
  label: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRiturnitCancelTripReasonInput = {
  id: string,
  label?: string | null,
  _version?: number | null,
};

export type DeleteRiturnitCancelTripReasonInput = {
  id: string,
  _version?: number | null,
};

export type CreatePointsInput = {
  id?: string | null,
  amount: number,
  store_name: string,
  store_image?: string | null,
  userID: string,
  storeID: string,
  _version?: number | null,
};

export type ModelPointsConditionInput = {
  amount?: ModelIntInput | null,
  store_name?: ModelStringInput | null,
  store_image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelPointsConditionInput | null > | null,
  or?: Array< ModelPointsConditionInput | null > | null,
  not?: ModelPointsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Points = {
  __typename: "Points",
  id: string,
  amount: number,
  store_name: string,
  store_image?: string | null,
  userID: string,
  storeID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePointsInput = {
  id: string,
  amount?: number | null,
  store_name?: string | null,
  store_image?: string | null,
  userID?: string | null,
  storeID?: string | null,
  _version?: number | null,
};

export type DeletePointsInput = {
  id: string,
  _version?: number | null,
};

export type CreateCarInput = {
  id?: string | null,
  model: string,
  make: string,
  year: number,
  plate_number: string,
  color: string,
  driverID: string,
  _version?: number | null,
};

export type ModelCarConditionInput = {
  model?: ModelStringInput | null,
  make?: ModelStringInput | null,
  year?: ModelIntInput | null,
  plate_number?: ModelStringInput | null,
  color?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelCarConditionInput | null > | null,
  or?: Array< ModelCarConditionInput | null > | null,
  not?: ModelCarConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Car = {
  __typename: "Car",
  id: string,
  model: string,
  make: string,
  year: number,
  plate_number: string,
  color: string,
  driverID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCarInput = {
  id: string,
  model?: string | null,
  make?: string | null,
  year?: number | null,
  plate_number?: string | null,
  color?: string | null,
  driverID?: string | null,
  _version?: number | null,
};

export type DeleteCarInput = {
  id: string,
  _version?: number | null,
};

export type CreatePaymentInput = {
  id?: string | null,
  customer_name?: string | null,
  email: string,
  address?: string | null,
  phone_number: string,
  total_amount: number,
  payment_method?: string | null,
  payment_status?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelPaymentConditionInput = {
  customer_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  total_amount?: ModelFloatInput | null,
  payment_method?: ModelStringInput | null,
  payment_status?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Payment = {
  __typename: "Payment",
  id: string,
  customer_name?: string | null,
  email: string,
  address?: string | null,
  phone_number: string,
  total_amount: number,
  payment_method?: string | null,
  payment_status?: string | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePaymentInput = {
  id: string,
  customer_name?: string | null,
  email?: string | null,
  address?: string | null,
  phone_number?: string | null,
  total_amount?: number | null,
  payment_method?: string | null,
  payment_status?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeletePaymentInput = {
  id: string,
  _version?: number | null,
};

export type CreateDriverWalletInput = {
  id?: string | null,
  amount: number,
  driverID: string,
  _version?: number | null,
};

export type ModelDriverWalletConditionInput = {
  amount?: ModelFloatInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelDriverWalletConditionInput | null > | null,
  or?: Array< ModelDriverWalletConditionInput | null > | null,
  not?: ModelDriverWalletConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type DriverWallet = {
  __typename: "DriverWallet",
  id: string,
  amount: number,
  driverID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDriverWalletInput = {
  id: string,
  amount?: number | null,
  driverID?: string | null,
  _version?: number | null,
};

export type DeleteDriverWalletInput = {
  id: string,
  _version?: number | null,
};

export type CreateReceiptInput = {
  id?: string | null,
  image: string,
  store_name: string,
  userID: string,
  storeID: string,
  _version?: number | null,
};

export type ModelReceiptConditionInput = {
  image?: ModelStringInput | null,
  store_name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelReceiptConditionInput | null > | null,
  or?: Array< ModelReceiptConditionInput | null > | null,
  not?: ModelReceiptConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Receipt = {
  __typename: "Receipt",
  id: string,
  image: string,
  store_name: string,
  userID: string,
  storeID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateReceiptInput = {
  id: string,
  image?: string | null,
  store_name?: string | null,
  userID?: string | null,
  storeID?: string | null,
  _version?: number | null,
};

export type DeleteReceiptInput = {
  id: string,
  _version?: number | null,
};

export type CreateTripCartInput = {
  id?: string | null,
  expiry_date: string,
  name: string,
  image: string,
  quantity: number,
  price: number,
  description?: string | null,
  storeID: string,
  userID: string,
  tripsID: string,
  _version?: number | null,
};

export type ModelTripCartConditionInput = {
  expiry_date?: ModelStringInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  storeID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tripsID?: ModelIDInput | null,
  and?: Array< ModelTripCartConditionInput | null > | null,
  or?: Array< ModelTripCartConditionInput | null > | null,
  not?: ModelTripCartConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type TripCart = {
  __typename: "TripCart",
  id: string,
  expiry_date: string,
  name: string,
  image: string,
  quantity: number,
  price: number,
  description?: string | null,
  storeID: string,
  userID: string,
  tripsID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTripCartInput = {
  id: string,
  expiry_date?: string | null,
  name?: string | null,
  image?: string | null,
  quantity?: number | null,
  price?: number | null,
  description?: string | null,
  storeID?: string | null,
  userID?: string | null,
  tripsID?: string | null,
  _version?: number | null,
};

export type DeleteTripCartInput = {
  id: string,
  _version?: number | null,
};

export type CreateTripsInput = {
  id?: string | null,
  trip_status?: TripStatus | null,
  pickup_lat?: string | null,
  pickup_lng?: string | null,
  dropoff_lat?: string | null,
  dropoff_lng?: string | null,
  pickup_location_description?: string | null,
  dropoff_location_description?: string | null,
  trip_cost?: number | null,
  TotalQtyItems?: number | null,
  receipt?: string | null,
  duration?: number | null,
  distance?: number | null,
  store_name?: string | null,
  store_image?: string | null,
  user_name?: string | null,
  user_photo?: string | null,
  mobile_number?: string | null,
  driver_name?: string | null,
  driver_photo?: string | null,
  driver_rating?: number | null,
  driver_mobile_number?: string | null,
  driver_car_model?: string | null,
  driver_car_make?: string | null,
  driver_car_color?: string | null,
  driver_car_plate_number?: string | null,
  sub_total?: number | null,
  redeem_points?: number | null,
  service_fee?: number | null,
  delivery_fee?: number | null,
  delivery_discount?: number | null,
  sum_total?: number | null,
  userID?: string | null,
  storeID: string,
  _version?: number | null,
  tripsDriverId?: string | null,
};

export enum TripStatus {
  NEW = "NEW",
  ACCEPTED = "ACCEPTED",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}


export type ModelTripsConditionInput = {
  trip_status?: ModelTripStatusInput | null,
  pickup_lat?: ModelStringInput | null,
  pickup_lng?: ModelStringInput | null,
  dropoff_lat?: ModelStringInput | null,
  dropoff_lng?: ModelStringInput | null,
  pickup_location_description?: ModelStringInput | null,
  dropoff_location_description?: ModelStringInput | null,
  trip_cost?: ModelFloatInput | null,
  TotalQtyItems?: ModelIntInput | null,
  receipt?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  distance?: ModelFloatInput | null,
  store_name?: ModelStringInput | null,
  store_image?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  user_photo?: ModelStringInput | null,
  mobile_number?: ModelStringInput | null,
  driver_name?: ModelStringInput | null,
  driver_photo?: ModelStringInput | null,
  driver_rating?: ModelFloatInput | null,
  driver_mobile_number?: ModelStringInput | null,
  driver_car_model?: ModelStringInput | null,
  driver_car_make?: ModelStringInput | null,
  driver_car_color?: ModelStringInput | null,
  driver_car_plate_number?: ModelStringInput | null,
  sub_total?: ModelFloatInput | null,
  redeem_points?: ModelIntInput | null,
  service_fee?: ModelFloatInput | null,
  delivery_fee?: ModelFloatInput | null,
  delivery_discount?: ModelFloatInput | null,
  sum_total?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelTripsConditionInput | null > | null,
  or?: Array< ModelTripsConditionInput | null > | null,
  not?: ModelTripsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  tripsDriverId?: ModelIDInput | null,
};

export type ModelTripStatusInput = {
  eq?: TripStatus | null,
  ne?: TripStatus | null,
};

export type Trips = {
  __typename: "Trips",
  id: string,
  trip_status?: TripStatus | null,
  pickup_lat?: string | null,
  pickup_lng?: string | null,
  dropoff_lat?: string | null,
  dropoff_lng?: string | null,
  pickup_location_description?: string | null,
  dropoff_location_description?: string | null,
  trip_cost?: number | null,
  TotalQtyItems?: number | null,
  receipt?: string | null,
  duration?: number | null,
  distance?: number | null,
  store_name?: string | null,
  store_image?: string | null,
  user_name?: string | null,
  user_photo?: string | null,
  mobile_number?: string | null,
  driver_name?: string | null,
  driver_photo?: string | null,
  driver_rating?: number | null,
  driver_mobile_number?: string | null,
  driver_car_model?: string | null,
  driver_car_make?: string | null,
  driver_car_color?: string | null,
  driver_car_plate_number?: string | null,
  sub_total?: number | null,
  redeem_points?: number | null,
  service_fee?: number | null,
  delivery_fee?: number | null,
  delivery_discount?: number | null,
  sum_total?: number | null,
  Driver?: Driver | null,
  userID?: string | null,
  storeID: string,
  TripCarts?: ModelTripCartConnection | null,
  Ratings?: ModelRatingConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  tripsDriverId?: string | null,
};

export type Driver = {
  __typename: "Driver",
  id: string,
  name: string,
  email: string,
  image?: string | null,
  phone_number?: string | null,
  rating?: number | null,
  inviteCode?: string | null,
  lng?: string | null,
  lat?: string | null,
  verificationStatus?: DriverRegistrationStatus | null,
  onlineStatus?: boolean | null,
  Cars?: ModelCarConnection | null,
  Ratings?: ModelRatingConnection | null,
  DriverWallets?: ModelDriverWalletConnection | null,
  LicenseDocuments?: ModelLicenseDocumentConnection | null,
  RegistrationDocuments?: ModelRegistrationDocumentConnection | null,
  InsuranceDocuments?: ModelInsuranceDocumentConnection | null,
  fcmToken?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum DriverRegistrationStatus {
  NEW = "NEW",
  COMPLETE = "COMPLETE",
  REJECTED = "REJECTED",
}


export type ModelCarConnection = {
  __typename: "ModelCarConnection",
  items:  Array<Car | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items:  Array<Rating | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDriverWalletConnection = {
  __typename: "ModelDriverWalletConnection",
  items:  Array<DriverWallet | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLicenseDocumentConnection = {
  __typename: "ModelLicenseDocumentConnection",
  items:  Array<LicenseDocument | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LicenseDocument = {
  __typename: "LicenseDocument",
  id: string,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelRegistrationDocumentConnection = {
  __typename: "ModelRegistrationDocumentConnection",
  items:  Array<RegistrationDocument | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type RegistrationDocument = {
  __typename: "RegistrationDocument",
  id: string,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelInsuranceDocumentConnection = {
  __typename: "ModelInsuranceDocumentConnection",
  items:  Array<InsuranceDocument | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type InsuranceDocument = {
  __typename: "InsuranceDocument",
  id: string,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelTripCartConnection = {
  __typename: "ModelTripCartConnection",
  items:  Array<TripCart | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateTripsInput = {
  id: string,
  trip_status?: TripStatus | null,
  pickup_lat?: string | null,
  pickup_lng?: string | null,
  dropoff_lat?: string | null,
  dropoff_lng?: string | null,
  pickup_location_description?: string | null,
  dropoff_location_description?: string | null,
  trip_cost?: number | null,
  TotalQtyItems?: number | null,
  receipt?: string | null,
  duration?: number | null,
  distance?: number | null,
  store_name?: string | null,
  store_image?: string | null,
  user_name?: string | null,
  user_photo?: string | null,
  mobile_number?: string | null,
  driver_name?: string | null,
  driver_photo?: string | null,
  driver_rating?: number | null,
  driver_mobile_number?: string | null,
  driver_car_model?: string | null,
  driver_car_make?: string | null,
  driver_car_color?: string | null,
  driver_car_plate_number?: string | null,
  sub_total?: number | null,
  redeem_points?: number | null,
  service_fee?: number | null,
  delivery_fee?: number | null,
  delivery_discount?: number | null,
  sum_total?: number | null,
  userID?: string | null,
  storeID?: string | null,
  _version?: number | null,
  tripsDriverId?: string | null,
};

export type DeleteTripsInput = {
  id: string,
  _version?: number | null,
};

export type CreateStoreInput = {
  id?: string | null,
  name: string,
  image: string,
  description?: string | null,
  expiryDays: number,
  _version?: number | null,
};

export type ModelStoreConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  expiryDays?: ModelIntInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  name: string,
  image: string,
  description?: string | null,
  expiryDays: number,
  Points?: ModelPointsConnection | null,
  Products?: ModelProductConnection | null,
  Receipts?: ModelReceiptConnection | null,
  TripCarts?: ModelTripCartConnection | null,
  Trips?: ModelTripsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPointsConnection = {
  __typename: "ModelPointsConnection",
  items:  Array<Points | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  image: string,
  quantity: number,
  price: number,
  description?: string | null,
  expiry_date: string,
  userID: string,
  storeID: string,
  User?: User | null,
  Store?: Store | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  image?: string | null,
  phone_number?: string | null,
  home_address?: string | null,
  work_address?: string | null,
  inviteCode?: string | null,
  lng?: string | null,
  lat?: string | null,
  Ratings?: ModelRatingConnection | null,
  Receipts?: ModelReceiptConnection | null,
  Payments?: ModelPaymentConnection | null,
  Products?: ModelProductConnection | null,
  Points?: ModelPointsConnection | null,
  Trips?: ModelTripsConnection | null,
  TripCarts?: ModelTripCartConnection | null,
  fcmToken?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelReceiptConnection = {
  __typename: "ModelReceiptConnection",
  items:  Array<Receipt | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTripsConnection = {
  __typename: "ModelTripsConnection",
  items:  Array<Trips | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateStoreInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  description?: string | null,
  expiryDays?: number | null,
  _version?: number | null,
};

export type DeleteStoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  image: string,
  quantity: number,
  price: number,
  description?: string | null,
  expiry_date: string,
  userID: string,
  storeID: string,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  quantity?: number | null,
  price?: number | null,
  description?: string | null,
  expiry_date?: string | null,
  userID?: string | null,
  storeID?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  image?: string | null,
  phone_number?: string | null,
  home_address?: string | null,
  work_address?: string | null,
  inviteCode?: string | null,
  lng?: string | null,
  lat?: string | null,
  fcmToken?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  home_address?: ModelStringInput | null,
  work_address?: ModelStringInput | null,
  inviteCode?: ModelStringInput | null,
  lng?: ModelStringInput | null,
  lat?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  image?: string | null,
  phone_number?: string | null,
  home_address?: string | null,
  work_address?: string | null,
  inviteCode?: string | null,
  lng?: string | null,
  lat?: string | null,
  fcmToken?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateDriverInput = {
  id?: string | null,
  name: string,
  email: string,
  image?: string | null,
  phone_number?: string | null,
  rating?: number | null,
  inviteCode?: string | null,
  lng?: string | null,
  lat?: string | null,
  verificationStatus?: DriverRegistrationStatus | null,
  onlineStatus?: boolean | null,
  fcmToken?: string | null,
  _version?: number | null,
};

export type ModelDriverConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  inviteCode?: ModelStringInput | null,
  lng?: ModelStringInput | null,
  lat?: ModelStringInput | null,
  verificationStatus?: ModelDriverRegistrationStatusInput | null,
  onlineStatus?: ModelBooleanInput | null,
  fcmToken?: ModelStringInput | null,
  and?: Array< ModelDriverConditionInput | null > | null,
  or?: Array< ModelDriverConditionInput | null > | null,
  not?: ModelDriverConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDriverRegistrationStatusInput = {
  eq?: DriverRegistrationStatus | null,
  ne?: DriverRegistrationStatus | null,
};

export type UpdateDriverInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  image?: string | null,
  phone_number?: string | null,
  rating?: number | null,
  inviteCode?: string | null,
  lng?: string | null,
  lat?: string | null,
  verificationStatus?: DriverRegistrationStatus | null,
  onlineStatus?: boolean | null,
  fcmToken?: string | null,
  _version?: number | null,
};

export type DeleteDriverInput = {
  id: string,
  _version?: number | null,
};

export type CreateLicenseDocumentInput = {
  id?: string | null,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID: string,
  _version?: number | null,
};

export type ModelLicenseDocumentConditionInput = {
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelLicenseDocumentConditionInput | null > | null,
  or?: Array< ModelLicenseDocumentConditionInput | null > | null,
  not?: ModelLicenseDocumentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateLicenseDocumentInput = {
  id: string,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID?: string | null,
  _version?: number | null,
};

export type DeleteLicenseDocumentInput = {
  id: string,
  _version?: number | null,
};

export type CreateRegistrationDocumentInput = {
  id?: string | null,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID: string,
  _version?: number | null,
};

export type ModelRegistrationDocumentConditionInput = {
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelRegistrationDocumentConditionInput | null > | null,
  or?: Array< ModelRegistrationDocumentConditionInput | null > | null,
  not?: ModelRegistrationDocumentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateRegistrationDocumentInput = {
  id: string,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID?: string | null,
  _version?: number | null,
};

export type DeleteRegistrationDocumentInput = {
  id: string,
  _version?: number | null,
};

export type CreateInsuranceDocumentInput = {
  id?: string | null,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID: string,
  _version?: number | null,
};

export type ModelInsuranceDocumentConditionInput = {
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelInsuranceDocumentConditionInput | null > | null,
  or?: Array< ModelInsuranceDocumentConditionInput | null > | null,
  not?: ModelInsuranceDocumentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateInsuranceDocumentInput = {
  id: string,
  image?: string | null,
  name?: string | null,
  expiry_date?: string | null,
  driverID?: string | null,
  _version?: number | null,
};

export type DeleteInsuranceDocumentInput = {
  id: string,
  _version?: number | null,
};

export type CreateSystemNotificationInput = {
  id?: string | null,
  title?: string | null,
  message?: string | null,
  _version?: number | null,
};

export type ModelSystemNotificationConditionInput = {
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelSystemNotificationConditionInput | null > | null,
  or?: Array< ModelSystemNotificationConditionInput | null > | null,
  not?: ModelSystemNotificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type SystemNotification = {
  __typename: "SystemNotification",
  id: string,
  title?: string | null,
  message?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSystemNotificationInput = {
  id: string,
  title?: string | null,
  message?: string | null,
  _version?: number | null,
};

export type DeleteSystemNotificationInput = {
  id: string,
  _version?: number | null,
};

export type CreateDriverSystemNotificationInput = {
  id?: string | null,
  title: string,
  message: string,
  _version?: number | null,
};

export type ModelDriverSystemNotificationConditionInput = {
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelDriverSystemNotificationConditionInput | null > | null,
  or?: Array< ModelDriverSystemNotificationConditionInput | null > | null,
  not?: ModelDriverSystemNotificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type DriverSystemNotification = {
  __typename: "DriverSystemNotification",
  id: string,
  title: string,
  message: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDriverSystemNotificationInput = {
  id: string,
  title?: string | null,
  message?: string | null,
  _version?: number | null,
};

export type DeleteDriverSystemNotificationInput = {
  id: string,
  _version?: number | null,
};

export type ModelPaymentIntentFilterInput = {
  clientSecret?: ModelStringInput | null,
  ephemeralKey?: ModelStringInput | null,
  customer?: ModelStringInput | null,
  setupIntent?: ModelStringInput | null,
  and?: Array< ModelPaymentIntentFilterInput | null > | null,
  or?: Array< ModelPaymentIntentFilterInput | null > | null,
  not?: ModelPaymentIntentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPaymentIntentConnection = {
  __typename: "ModelPaymentIntentConnection",
  items:  Array<PaymentIntent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStripeIdentitySessionFilterInput = {
  ephemeralKeySecret?: ModelStringInput | null,
  verificationSessionId?: ModelStringInput | null,
  and?: Array< ModelStripeIdentitySessionFilterInput | null > | null,
  or?: Array< ModelStripeIdentitySessionFilterInput | null > | null,
  not?: ModelStripeIdentitySessionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStripeIdentitySessionConnection = {
  __typename: "ModelStripeIdentitySessionConnection",
  items:  Array<StripeIdentitySession | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRiturnitFeesFilterInput = {
  id?: ModelIDInput | null,
  rideBasePay?: ModelFloatInput | null,
  serviceFee?: ModelFloatInput | null,
  discountFee?: ModelFloatInput | null,
  and?: Array< ModelRiturnitFeesFilterInput | null > | null,
  or?: Array< ModelRiturnitFeesFilterInput | null > | null,
  not?: ModelRiturnitFeesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRiturnitFeesConnection = {
  __typename: "ModelRiturnitFeesConnection",
  items:  Array<RiturnitFees | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRatingFilterInput = {
  id?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  driver_image?: ModelStringInput | null,
  driver_name?: ModelStringInput | null,
  customer_name?: ModelStringInput | null,
  customer_image?: ModelStringInput | null,
  tripsID?: ModelIDInput | null,
  driverID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelRatingFilterInput | null > | null,
  or?: Array< ModelRatingFilterInput | null > | null,
  not?: ModelRatingFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRiturnitContactUsFilterInput = {
  id?: ModelIDInput | null,
  contactUsImage?: ModelStringInput | null,
  introDescription?: ModelStringInput | null,
  BuildingNumber?: ModelStringInput | null,
  StreetName?: ModelStringInput | null,
  CityName?: ModelStringInput | null,
  AreaOrState?: ModelStringInput | null,
  PostalCode?: ModelIntInput | null,
  ContactNumber?: ModelStringInput | null,
  EmailAddress?: ModelStringInput | null,
  FacebookURL?: ModelStringInput | null,
  TikTok?: ModelStringInput | null,
  Twitter?: ModelStringInput | null,
  Instagram?: ModelStringInput | null,
  and?: Array< ModelRiturnitContactUsFilterInput | null > | null,
  or?: Array< ModelRiturnitContactUsFilterInput | null > | null,
  not?: ModelRiturnitContactUsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRiturnitContactUsConnection = {
  __typename: "ModelRiturnitContactUsConnection",
  items:  Array<RiturnitContactUs | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRiturnitPointFilterInput = {
  id?: ModelIDInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelRiturnitPointFilterInput | null > | null,
  or?: Array< ModelRiturnitPointFilterInput | null > | null,
  not?: ModelRiturnitPointFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRiturnitPointConnection = {
  __typename: "ModelRiturnitPointConnection",
  items:  Array<RiturnitPoint | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRiturnitCancelTripReasonFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelRiturnitCancelTripReasonFilterInput | null > | null,
  or?: Array< ModelRiturnitCancelTripReasonFilterInput | null > | null,
  not?: ModelRiturnitCancelTripReasonFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRiturnitCancelTripReasonConnection = {
  __typename: "ModelRiturnitCancelTripReasonConnection",
  items:  Array<RiturnitCancelTripReason | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPointsFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelIntInput | null,
  store_name?: ModelStringInput | null,
  store_image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelPointsFilterInput | null > | null,
  or?: Array< ModelPointsFilterInput | null > | null,
  not?: ModelPointsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null,
  model?: ModelStringInput | null,
  make?: ModelStringInput | null,
  year?: ModelIntInput | null,
  plate_number?: ModelStringInput | null,
  color?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelCarFilterInput | null > | null,
  or?: Array< ModelCarFilterInput | null > | null,
  not?: ModelCarFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDInput | null,
  customer_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  total_amount?: ModelFloatInput | null,
  payment_method?: ModelStringInput | null,
  payment_status?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDriverWalletFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelDriverWalletFilterInput | null > | null,
  or?: Array< ModelDriverWalletFilterInput | null > | null,
  not?: ModelDriverWalletFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelReceiptFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  store_name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelReceiptFilterInput | null > | null,
  or?: Array< ModelReceiptFilterInput | null > | null,
  not?: ModelReceiptFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTripCartFilterInput = {
  id?: ModelIDInput | null,
  expiry_date?: ModelStringInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  storeID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tripsID?: ModelIDInput | null,
  and?: Array< ModelTripCartFilterInput | null > | null,
  or?: Array< ModelTripCartFilterInput | null > | null,
  not?: ModelTripCartFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTripsFilterInput = {
  id?: ModelIDInput | null,
  trip_status?: ModelTripStatusInput | null,
  pickup_lat?: ModelStringInput | null,
  pickup_lng?: ModelStringInput | null,
  dropoff_lat?: ModelStringInput | null,
  dropoff_lng?: ModelStringInput | null,
  pickup_location_description?: ModelStringInput | null,
  dropoff_location_description?: ModelStringInput | null,
  trip_cost?: ModelFloatInput | null,
  TotalQtyItems?: ModelIntInput | null,
  receipt?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  distance?: ModelFloatInput | null,
  store_name?: ModelStringInput | null,
  store_image?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  user_photo?: ModelStringInput | null,
  mobile_number?: ModelStringInput | null,
  driver_name?: ModelStringInput | null,
  driver_photo?: ModelStringInput | null,
  driver_rating?: ModelFloatInput | null,
  driver_mobile_number?: ModelStringInput | null,
  driver_car_model?: ModelStringInput | null,
  driver_car_make?: ModelStringInput | null,
  driver_car_color?: ModelStringInput | null,
  driver_car_plate_number?: ModelStringInput | null,
  sub_total?: ModelFloatInput | null,
  redeem_points?: ModelIntInput | null,
  service_fee?: ModelFloatInput | null,
  delivery_fee?: ModelFloatInput | null,
  delivery_discount?: ModelFloatInput | null,
  sum_total?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelTripsFilterInput | null > | null,
  or?: Array< ModelTripsFilterInput | null > | null,
  not?: ModelTripsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  tripsDriverId?: ModelIDInput | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  expiryDays?: ModelIntInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  storeID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  home_address?: ModelStringInput | null,
  work_address?: ModelStringInput | null,
  inviteCode?: ModelStringInput | null,
  lng?: ModelStringInput | null,
  lat?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDriverFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  inviteCode?: ModelStringInput | null,
  lng?: ModelStringInput | null,
  lat?: ModelStringInput | null,
  verificationStatus?: ModelDriverRegistrationStatusInput | null,
  onlineStatus?: ModelBooleanInput | null,
  fcmToken?: ModelStringInput | null,
  and?: Array< ModelDriverFilterInput | null > | null,
  or?: Array< ModelDriverFilterInput | null > | null,
  not?: ModelDriverFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDriverConnection = {
  __typename: "ModelDriverConnection",
  items:  Array<Driver | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLicenseDocumentFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelLicenseDocumentFilterInput | null > | null,
  or?: Array< ModelLicenseDocumentFilterInput | null > | null,
  not?: ModelLicenseDocumentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRegistrationDocumentFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelRegistrationDocumentFilterInput | null > | null,
  or?: Array< ModelRegistrationDocumentFilterInput | null > | null,
  not?: ModelRegistrationDocumentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelInsuranceDocumentFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  driverID?: ModelIDInput | null,
  and?: Array< ModelInsuranceDocumentFilterInput | null > | null,
  or?: Array< ModelInsuranceDocumentFilterInput | null > | null,
  not?: ModelInsuranceDocumentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSystemNotificationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelSystemNotificationFilterInput | null > | null,
  or?: Array< ModelSystemNotificationFilterInput | null > | null,
  not?: ModelSystemNotificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSystemNotificationConnection = {
  __typename: "ModelSystemNotificationConnection",
  items:  Array<SystemNotification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDriverSystemNotificationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelDriverSystemNotificationFilterInput | null > | null,
  or?: Array< ModelDriverSystemNotificationFilterInput | null > | null,
  not?: ModelDriverSystemNotificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDriverSystemNotificationConnection = {
  __typename: "ModelDriverSystemNotificationConnection",
  items:  Array<DriverSystemNotification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionPaymentIntentFilterInput = {
  clientSecret?: ModelSubscriptionStringInput | null,
  ephemeralKey?: ModelSubscriptionStringInput | null,
  customer?: ModelSubscriptionStringInput | null,
  setupIntent?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPaymentIntentFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentIntentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStripeIdentitySessionFilterInput = {
  ephemeralKeySecret?: ModelSubscriptionStringInput | null,
  verificationSessionId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStripeIdentitySessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionStripeIdentitySessionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRiturnitFeesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rideBasePay?: ModelSubscriptionFloatInput | null,
  serviceFee?: ModelSubscriptionFloatInput | null,
  discountFee?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionRiturnitFeesFilterInput | null > | null,
  or?: Array< ModelSubscriptionRiturnitFeesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionRatingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rating?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  driver_image?: ModelSubscriptionStringInput | null,
  driver_name?: ModelSubscriptionStringInput | null,
  customer_name?: ModelSubscriptionStringInput | null,
  customer_image?: ModelSubscriptionStringInput | null,
  tripsID?: ModelSubscriptionIDInput | null,
  driverID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  or?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionRiturnitContactUsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contactUsImage?: ModelSubscriptionStringInput | null,
  introDescription?: ModelSubscriptionStringInput | null,
  BuildingNumber?: ModelSubscriptionStringInput | null,
  StreetName?: ModelSubscriptionStringInput | null,
  CityName?: ModelSubscriptionStringInput | null,
  AreaOrState?: ModelSubscriptionStringInput | null,
  PostalCode?: ModelSubscriptionIntInput | null,
  ContactNumber?: ModelSubscriptionStringInput | null,
  EmailAddress?: ModelSubscriptionStringInput | null,
  FacebookURL?: ModelSubscriptionStringInput | null,
  TikTok?: ModelSubscriptionStringInput | null,
  Twitter?: ModelSubscriptionStringInput | null,
  Instagram?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRiturnitContactUsFilterInput | null > | null,
  or?: Array< ModelSubscriptionRiturnitContactUsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRiturnitPointFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  points?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionRiturnitPointFilterInput | null > | null,
  or?: Array< ModelSubscriptionRiturnitPointFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRiturnitCancelTripReasonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRiturnitCancelTripReasonFilterInput | null > | null,
  or?: Array< ModelSubscriptionRiturnitCancelTripReasonFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPointsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionIntInput | null,
  store_name?: ModelSubscriptionStringInput | null,
  store_image?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  storeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPointsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPointsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  model?: ModelSubscriptionStringInput | null,
  make?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionIntInput | null,
  plate_number?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  driverID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCarFilterInput | null > | null,
  or?: Array< ModelSubscriptionCarFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPaymentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customer_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  total_amount?: ModelSubscriptionFloatInput | null,
  payment_method?: ModelSubscriptionStringInput | null,
  payment_status?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionDriverWalletFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  driverID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDriverWalletFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverWalletFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionReceiptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  store_name?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  storeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReceiptFilterInput | null > | null,
  or?: Array< ModelSubscriptionReceiptFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTripCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  expiry_date?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  storeID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  tripsID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTripCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionTripCartFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTripsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  trip_status?: ModelSubscriptionStringInput | null,
  pickup_lat?: ModelSubscriptionStringInput | null,
  pickup_lng?: ModelSubscriptionStringInput | null,
  dropoff_lat?: ModelSubscriptionStringInput | null,
  dropoff_lng?: ModelSubscriptionStringInput | null,
  pickup_location_description?: ModelSubscriptionStringInput | null,
  dropoff_location_description?: ModelSubscriptionStringInput | null,
  trip_cost?: ModelSubscriptionFloatInput | null,
  TotalQtyItems?: ModelSubscriptionIntInput | null,
  receipt?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionFloatInput | null,
  distance?: ModelSubscriptionFloatInput | null,
  store_name?: ModelSubscriptionStringInput | null,
  store_image?: ModelSubscriptionStringInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  user_photo?: ModelSubscriptionStringInput | null,
  mobile_number?: ModelSubscriptionStringInput | null,
  driver_name?: ModelSubscriptionStringInput | null,
  driver_photo?: ModelSubscriptionStringInput | null,
  driver_rating?: ModelSubscriptionFloatInput | null,
  driver_mobile_number?: ModelSubscriptionStringInput | null,
  driver_car_model?: ModelSubscriptionStringInput | null,
  driver_car_make?: ModelSubscriptionStringInput | null,
  driver_car_color?: ModelSubscriptionStringInput | null,
  driver_car_plate_number?: ModelSubscriptionStringInput | null,
  sub_total?: ModelSubscriptionFloatInput | null,
  redeem_points?: ModelSubscriptionIntInput | null,
  service_fee?: ModelSubscriptionFloatInput | null,
  delivery_fee?: ModelSubscriptionFloatInput | null,
  delivery_discount?: ModelSubscriptionFloatInput | null,
  sum_total?: ModelSubscriptionFloatInput | null,
  userID?: ModelSubscriptionIDInput | null,
  storeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTripsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTripsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  expiryDays?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  expiry_date?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  storeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  home_address?: ModelSubscriptionStringInput | null,
  work_address?: ModelSubscriptionStringInput | null,
  inviteCode?: ModelSubscriptionStringInput | null,
  lng?: ModelSubscriptionStringInput | null,
  lat?: ModelSubscriptionStringInput | null,
  fcmToken?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionDriverFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  inviteCode?: ModelSubscriptionStringInput | null,
  lng?: ModelSubscriptionStringInput | null,
  lat?: ModelSubscriptionStringInput | null,
  verificationStatus?: ModelSubscriptionStringInput | null,
  onlineStatus?: ModelSubscriptionBooleanInput | null,
  fcmToken?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriverFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionLicenseDocumentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  expiry_date?: ModelSubscriptionStringInput | null,
  driverID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLicenseDocumentFilterInput | null > | null,
  or?: Array< ModelSubscriptionLicenseDocumentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRegistrationDocumentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  expiry_date?: ModelSubscriptionStringInput | null,
  driverID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRegistrationDocumentFilterInput | null > | null,
  or?: Array< ModelSubscriptionRegistrationDocumentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionInsuranceDocumentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  expiry_date?: ModelSubscriptionStringInput | null,
  driverID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionInsuranceDocumentFilterInput | null > | null,
  or?: Array< ModelSubscriptionInsuranceDocumentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSystemNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSystemNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSystemNotificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionDriverSystemNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriverSystemNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverSystemNotificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateStripePaymentMutationVariables = {
  amount: number,
  email: string,
  name: string,
  phone?: string | null,
};

export type CreateStripePaymentMutation = {
  CreateStripePayment:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  },
};

export type StripeIdentityMutationVariables = {
  customerId: string,
};

export type StripeIdentityMutation = {
  StripeIdentity:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  },
};

export type CreatePaymentIntentMutationVariables = {
  input: CreatePaymentIntentInput,
  condition?: ModelPaymentIntentConditionInput | null,
};

export type CreatePaymentIntentMutation = {
  createPaymentIntent?:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePaymentIntentMutationVariables = {
  input: UpdatePaymentIntentInput,
  condition?: ModelPaymentIntentConditionInput | null,
};

export type UpdatePaymentIntentMutation = {
  updatePaymentIntent?:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePaymentIntentMutationVariables = {
  input: DeletePaymentIntentInput,
  condition?: ModelPaymentIntentConditionInput | null,
};

export type DeletePaymentIntentMutation = {
  deletePaymentIntent?:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStripeIdentitySessionMutationVariables = {
  input: CreateStripeIdentitySessionInput,
  condition?: ModelStripeIdentitySessionConditionInput | null,
};

export type CreateStripeIdentitySessionMutation = {
  createStripeIdentitySession?:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStripeIdentitySessionMutationVariables = {
  input: UpdateStripeIdentitySessionInput,
  condition?: ModelStripeIdentitySessionConditionInput | null,
};

export type UpdateStripeIdentitySessionMutation = {
  updateStripeIdentitySession?:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStripeIdentitySessionMutationVariables = {
  input: DeleteStripeIdentitySessionInput,
  condition?: ModelStripeIdentitySessionConditionInput | null,
};

export type DeleteStripeIdentitySessionMutation = {
  deleteStripeIdentitySession?:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRiturnitFeesMutationVariables = {
  input: CreateRiturnitFeesInput,
  condition?: ModelRiturnitFeesConditionInput | null,
};

export type CreateRiturnitFeesMutation = {
  createRiturnitFees?:  {
    __typename: "RiturnitFees",
    id: string,
    rideBasePay: number,
    serviceFee: number,
    discountFee: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRiturnitFeesMutationVariables = {
  input: UpdateRiturnitFeesInput,
  condition?: ModelRiturnitFeesConditionInput | null,
};

export type UpdateRiturnitFeesMutation = {
  updateRiturnitFees?:  {
    __typename: "RiturnitFees",
    id: string,
    rideBasePay: number,
    serviceFee: number,
    discountFee: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRiturnitFeesMutationVariables = {
  input: DeleteRiturnitFeesInput,
  condition?: ModelRiturnitFeesConditionInput | null,
};

export type DeleteRiturnitFeesMutation = {
  deleteRiturnitFees?:  {
    __typename: "RiturnitFees",
    id: string,
    rideBasePay: number,
    serviceFee: number,
    discountFee: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRatingMutationVariables = {
  input: CreateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type CreateRatingMutation = {
  createRating?:  {
    __typename: "Rating",
    id: string,
    rating?: number | null,
    comment?: string | null,
    driver_image?: string | null,
    driver_name?: string | null,
    customer_name?: string | null,
    customer_image?: string | null,
    tripsID: string,
    driverID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRatingMutationVariables = {
  input: UpdateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type UpdateRatingMutation = {
  updateRating?:  {
    __typename: "Rating",
    id: string,
    rating?: number | null,
    comment?: string | null,
    driver_image?: string | null,
    driver_name?: string | null,
    customer_name?: string | null,
    customer_image?: string | null,
    tripsID: string,
    driverID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRatingMutationVariables = {
  input: DeleteRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type DeleteRatingMutation = {
  deleteRating?:  {
    __typename: "Rating",
    id: string,
    rating?: number | null,
    comment?: string | null,
    driver_image?: string | null,
    driver_name?: string | null,
    customer_name?: string | null,
    customer_image?: string | null,
    tripsID: string,
    driverID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRiturnitContactUsMutationVariables = {
  input: CreateRiturnitContactUsInput,
  condition?: ModelRiturnitContactUsConditionInput | null,
};

export type CreateRiturnitContactUsMutation = {
  createRiturnitContactUs?:  {
    __typename: "RiturnitContactUs",
    id: string,
    contactUsImage: string,
    introDescription: string,
    BuildingNumber: string,
    StreetName: string,
    CityName: string,
    AreaOrState: string,
    PostalCode: number,
    ContactNumber: string,
    EmailAddress: string,
    FacebookURL?: string | null,
    TikTok?: string | null,
    Twitter?: string | null,
    Instagram?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRiturnitContactUsMutationVariables = {
  input: UpdateRiturnitContactUsInput,
  condition?: ModelRiturnitContactUsConditionInput | null,
};

export type UpdateRiturnitContactUsMutation = {
  updateRiturnitContactUs?:  {
    __typename: "RiturnitContactUs",
    id: string,
    contactUsImage: string,
    introDescription: string,
    BuildingNumber: string,
    StreetName: string,
    CityName: string,
    AreaOrState: string,
    PostalCode: number,
    ContactNumber: string,
    EmailAddress: string,
    FacebookURL?: string | null,
    TikTok?: string | null,
    Twitter?: string | null,
    Instagram?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRiturnitContactUsMutationVariables = {
  input: DeleteRiturnitContactUsInput,
  condition?: ModelRiturnitContactUsConditionInput | null,
};

export type DeleteRiturnitContactUsMutation = {
  deleteRiturnitContactUs?:  {
    __typename: "RiturnitContactUs",
    id: string,
    contactUsImage: string,
    introDescription: string,
    BuildingNumber: string,
    StreetName: string,
    CityName: string,
    AreaOrState: string,
    PostalCode: number,
    ContactNumber: string,
    EmailAddress: string,
    FacebookURL?: string | null,
    TikTok?: string | null,
    Twitter?: string | null,
    Instagram?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRiturnitPointMutationVariables = {
  input: CreateRiturnitPointInput,
  condition?: ModelRiturnitPointConditionInput | null,
};

export type CreateRiturnitPointMutation = {
  createRiturnitPoint?:  {
    __typename: "RiturnitPoint",
    id: string,
    points: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRiturnitPointMutationVariables = {
  input: UpdateRiturnitPointInput,
  condition?: ModelRiturnitPointConditionInput | null,
};

export type UpdateRiturnitPointMutation = {
  updateRiturnitPoint?:  {
    __typename: "RiturnitPoint",
    id: string,
    points: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRiturnitPointMutationVariables = {
  input: DeleteRiturnitPointInput,
  condition?: ModelRiturnitPointConditionInput | null,
};

export type DeleteRiturnitPointMutation = {
  deleteRiturnitPoint?:  {
    __typename: "RiturnitPoint",
    id: string,
    points: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRiturnitCancelTripReasonMutationVariables = {
  input: CreateRiturnitCancelTripReasonInput,
  condition?: ModelRiturnitCancelTripReasonConditionInput | null,
};

export type CreateRiturnitCancelTripReasonMutation = {
  createRiturnitCancelTripReason?:  {
    __typename: "RiturnitCancelTripReason",
    id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRiturnitCancelTripReasonMutationVariables = {
  input: UpdateRiturnitCancelTripReasonInput,
  condition?: ModelRiturnitCancelTripReasonConditionInput | null,
};

export type UpdateRiturnitCancelTripReasonMutation = {
  updateRiturnitCancelTripReason?:  {
    __typename: "RiturnitCancelTripReason",
    id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRiturnitCancelTripReasonMutationVariables = {
  input: DeleteRiturnitCancelTripReasonInput,
  condition?: ModelRiturnitCancelTripReasonConditionInput | null,
};

export type DeleteRiturnitCancelTripReasonMutation = {
  deleteRiturnitCancelTripReason?:  {
    __typename: "RiturnitCancelTripReason",
    id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePointsMutationVariables = {
  input: CreatePointsInput,
  condition?: ModelPointsConditionInput | null,
};

export type CreatePointsMutation = {
  createPoints?:  {
    __typename: "Points",
    id: string,
    amount: number,
    store_name: string,
    store_image?: string | null,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePointsMutationVariables = {
  input: UpdatePointsInput,
  condition?: ModelPointsConditionInput | null,
};

export type UpdatePointsMutation = {
  updatePoints?:  {
    __typename: "Points",
    id: string,
    amount: number,
    store_name: string,
    store_image?: string | null,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePointsMutationVariables = {
  input: DeletePointsInput,
  condition?: ModelPointsConditionInput | null,
};

export type DeletePointsMutation = {
  deletePoints?:  {
    __typename: "Points",
    id: string,
    amount: number,
    store_name: string,
    store_image?: string | null,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCarMutationVariables = {
  input: CreateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type CreateCarMutation = {
  createCar?:  {
    __typename: "Car",
    id: string,
    model: string,
    make: string,
    year: number,
    plate_number: string,
    color: string,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCarMutationVariables = {
  input: UpdateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type UpdateCarMutation = {
  updateCar?:  {
    __typename: "Car",
    id: string,
    model: string,
    make: string,
    year: number,
    plate_number: string,
    color: string,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCarMutationVariables = {
  input: DeleteCarInput,
  condition?: ModelCarConditionInput | null,
};

export type DeleteCarMutation = {
  deleteCar?:  {
    __typename: "Car",
    id: string,
    model: string,
    make: string,
    year: number,
    plate_number: string,
    color: string,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    id: string,
    customer_name?: string | null,
    email: string,
    address?: string | null,
    phone_number: string,
    total_amount: number,
    payment_method?: string | null,
    payment_status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    id: string,
    customer_name?: string | null,
    email: string,
    address?: string | null,
    phone_number: string,
    total_amount: number,
    payment_method?: string | null,
    payment_status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    id: string,
    customer_name?: string | null,
    email: string,
    address?: string | null,
    phone_number: string,
    total_amount: number,
    payment_method?: string | null,
    payment_status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDriverWalletMutationVariables = {
  input: CreateDriverWalletInput,
  condition?: ModelDriverWalletConditionInput | null,
};

export type CreateDriverWalletMutation = {
  createDriverWallet?:  {
    __typename: "DriverWallet",
    id: string,
    amount: number,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDriverWalletMutationVariables = {
  input: UpdateDriverWalletInput,
  condition?: ModelDriverWalletConditionInput | null,
};

export type UpdateDriverWalletMutation = {
  updateDriverWallet?:  {
    __typename: "DriverWallet",
    id: string,
    amount: number,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDriverWalletMutationVariables = {
  input: DeleteDriverWalletInput,
  condition?: ModelDriverWalletConditionInput | null,
};

export type DeleteDriverWalletMutation = {
  deleteDriverWallet?:  {
    __typename: "DriverWallet",
    id: string,
    amount: number,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateReceiptMutationVariables = {
  input: CreateReceiptInput,
  condition?: ModelReceiptConditionInput | null,
};

export type CreateReceiptMutation = {
  createReceipt?:  {
    __typename: "Receipt",
    id: string,
    image: string,
    store_name: string,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateReceiptMutationVariables = {
  input: UpdateReceiptInput,
  condition?: ModelReceiptConditionInput | null,
};

export type UpdateReceiptMutation = {
  updateReceipt?:  {
    __typename: "Receipt",
    id: string,
    image: string,
    store_name: string,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteReceiptMutationVariables = {
  input: DeleteReceiptInput,
  condition?: ModelReceiptConditionInput | null,
};

export type DeleteReceiptMutation = {
  deleteReceipt?:  {
    __typename: "Receipt",
    id: string,
    image: string,
    store_name: string,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTripCartMutationVariables = {
  input: CreateTripCartInput,
  condition?: ModelTripCartConditionInput | null,
};

export type CreateTripCartMutation = {
  createTripCart?:  {
    __typename: "TripCart",
    id: string,
    expiry_date: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    storeID: string,
    userID: string,
    tripsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTripCartMutationVariables = {
  input: UpdateTripCartInput,
  condition?: ModelTripCartConditionInput | null,
};

export type UpdateTripCartMutation = {
  updateTripCart?:  {
    __typename: "TripCart",
    id: string,
    expiry_date: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    storeID: string,
    userID: string,
    tripsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTripCartMutationVariables = {
  input: DeleteTripCartInput,
  condition?: ModelTripCartConditionInput | null,
};

export type DeleteTripCartMutation = {
  deleteTripCart?:  {
    __typename: "TripCart",
    id: string,
    expiry_date: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    storeID: string,
    userID: string,
    tripsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTripsMutationVariables = {
  input: CreateTripsInput,
  condition?: ModelTripsConditionInput | null,
};

export type CreateTripsMutation = {
  createTrips?:  {
    __typename: "Trips",
    id: string,
    trip_status?: TripStatus | null,
    pickup_lat?: string | null,
    pickup_lng?: string | null,
    dropoff_lat?: string | null,
    dropoff_lng?: string | null,
    pickup_location_description?: string | null,
    dropoff_location_description?: string | null,
    trip_cost?: number | null,
    TotalQtyItems?: number | null,
    receipt?: string | null,
    duration?: number | null,
    distance?: number | null,
    store_name?: string | null,
    store_image?: string | null,
    user_name?: string | null,
    user_photo?: string | null,
    mobile_number?: string | null,
    driver_name?: string | null,
    driver_photo?: string | null,
    driver_rating?: number | null,
    driver_mobile_number?: string | null,
    driver_car_model?: string | null,
    driver_car_make?: string | null,
    driver_car_color?: string | null,
    driver_car_plate_number?: string | null,
    sub_total?: number | null,
    redeem_points?: number | null,
    service_fee?: number | null,
    delivery_fee?: number | null,
    delivery_discount?: number | null,
    sum_total?: number | null,
    Driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID?: string | null,
    storeID: string,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    tripsDriverId?: string | null,
  } | null,
};

export type UpdateTripsMutationVariables = {
  input: UpdateTripsInput,
  condition?: ModelTripsConditionInput | null,
};

export type UpdateTripsMutation = {
  updateTrips?:  {
    __typename: "Trips",
    id: string,
    trip_status?: TripStatus | null,
    pickup_lat?: string | null,
    pickup_lng?: string | null,
    dropoff_lat?: string | null,
    dropoff_lng?: string | null,
    pickup_location_description?: string | null,
    dropoff_location_description?: string | null,
    trip_cost?: number | null,
    TotalQtyItems?: number | null,
    receipt?: string | null,
    duration?: number | null,
    distance?: number | null,
    store_name?: string | null,
    store_image?: string | null,
    user_name?: string | null,
    user_photo?: string | null,
    mobile_number?: string | null,
    driver_name?: string | null,
    driver_photo?: string | null,
    driver_rating?: number | null,
    driver_mobile_number?: string | null,
    driver_car_model?: string | null,
    driver_car_make?: string | null,
    driver_car_color?: string | null,
    driver_car_plate_number?: string | null,
    sub_total?: number | null,
    redeem_points?: number | null,
    service_fee?: number | null,
    delivery_fee?: number | null,
    delivery_discount?: number | null,
    sum_total?: number | null,
    Driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID?: string | null,
    storeID: string,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    tripsDriverId?: string | null,
  } | null,
};

export type DeleteTripsMutationVariables = {
  input: DeleteTripsInput,
  condition?: ModelTripsConditionInput | null,
};

export type DeleteTripsMutation = {
  deleteTrips?:  {
    __typename: "Trips",
    id: string,
    trip_status?: TripStatus | null,
    pickup_lat?: string | null,
    pickup_lng?: string | null,
    dropoff_lat?: string | null,
    dropoff_lng?: string | null,
    pickup_location_description?: string | null,
    dropoff_location_description?: string | null,
    trip_cost?: number | null,
    TotalQtyItems?: number | null,
    receipt?: string | null,
    duration?: number | null,
    distance?: number | null,
    store_name?: string | null,
    store_image?: string | null,
    user_name?: string | null,
    user_photo?: string | null,
    mobile_number?: string | null,
    driver_name?: string | null,
    driver_photo?: string | null,
    driver_rating?: number | null,
    driver_mobile_number?: string | null,
    driver_car_model?: string | null,
    driver_car_make?: string | null,
    driver_car_color?: string | null,
    driver_car_plate_number?: string | null,
    sub_total?: number | null,
    redeem_points?: number | null,
    service_fee?: number | null,
    delivery_fee?: number | null,
    delivery_discount?: number | null,
    sum_total?: number | null,
    Driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID?: string | null,
    storeID: string,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    tripsDriverId?: string | null,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    expiryDays: number,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    expiryDays: number,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    expiryDays: number,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    expiry_date: string,
    userID: string,
    storeID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    expiry_date: string,
    userID: string,
    storeID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    expiry_date: string,
    userID: string,
    storeID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    home_address?: string | null,
    work_address?: string | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      items:  Array< {
        __typename: "Payment",
        id: string,
        customer_name?: string | null,
        email: string,
        address?: string | null,
        phone_number: string,
        total_amount: number,
        payment_method?: string | null,
        payment_status?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    home_address?: string | null,
    work_address?: string | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      items:  Array< {
        __typename: "Payment",
        id: string,
        customer_name?: string | null,
        email: string,
        address?: string | null,
        phone_number: string,
        total_amount: number,
        payment_method?: string | null,
        payment_status?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    home_address?: string | null,
    work_address?: string | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      items:  Array< {
        __typename: "Payment",
        id: string,
        customer_name?: string | null,
        email: string,
        address?: string | null,
        phone_number: string,
        total_amount: number,
        payment_method?: string | null,
        payment_status?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDriverMutationVariables = {
  input: CreateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type CreateDriverMutation = {
  createDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    rating?: number | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    verificationStatus?: DriverRegistrationStatus | null,
    onlineStatus?: boolean | null,
    Cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        model: string,
        make: string,
        year: number,
        plate_number: string,
        color: string,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    DriverWallets?:  {
      __typename: "ModelDriverWalletConnection",
      items:  Array< {
        __typename: "DriverWallet",
        id: string,
        amount: number,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LicenseDocuments?:  {
      __typename: "ModelLicenseDocumentConnection",
      items:  Array< {
        __typename: "LicenseDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    RegistrationDocuments?:  {
      __typename: "ModelRegistrationDocumentConnection",
      items:  Array< {
        __typename: "RegistrationDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    InsuranceDocuments?:  {
      __typename: "ModelInsuranceDocumentConnection",
      items:  Array< {
        __typename: "InsuranceDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDriverMutationVariables = {
  input: UpdateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type UpdateDriverMutation = {
  updateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    rating?: number | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    verificationStatus?: DriverRegistrationStatus | null,
    onlineStatus?: boolean | null,
    Cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        model: string,
        make: string,
        year: number,
        plate_number: string,
        color: string,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    DriverWallets?:  {
      __typename: "ModelDriverWalletConnection",
      items:  Array< {
        __typename: "DriverWallet",
        id: string,
        amount: number,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LicenseDocuments?:  {
      __typename: "ModelLicenseDocumentConnection",
      items:  Array< {
        __typename: "LicenseDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    RegistrationDocuments?:  {
      __typename: "ModelRegistrationDocumentConnection",
      items:  Array< {
        __typename: "RegistrationDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    InsuranceDocuments?:  {
      __typename: "ModelInsuranceDocumentConnection",
      items:  Array< {
        __typename: "InsuranceDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDriverMutationVariables = {
  input: DeleteDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type DeleteDriverMutation = {
  deleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    rating?: number | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    verificationStatus?: DriverRegistrationStatus | null,
    onlineStatus?: boolean | null,
    Cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        model: string,
        make: string,
        year: number,
        plate_number: string,
        color: string,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    DriverWallets?:  {
      __typename: "ModelDriverWalletConnection",
      items:  Array< {
        __typename: "DriverWallet",
        id: string,
        amount: number,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LicenseDocuments?:  {
      __typename: "ModelLicenseDocumentConnection",
      items:  Array< {
        __typename: "LicenseDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    RegistrationDocuments?:  {
      __typename: "ModelRegistrationDocumentConnection",
      items:  Array< {
        __typename: "RegistrationDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    InsuranceDocuments?:  {
      __typename: "ModelInsuranceDocumentConnection",
      items:  Array< {
        __typename: "InsuranceDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLicenseDocumentMutationVariables = {
  input: CreateLicenseDocumentInput,
  condition?: ModelLicenseDocumentConditionInput | null,
};

export type CreateLicenseDocumentMutation = {
  createLicenseDocument?:  {
    __typename: "LicenseDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLicenseDocumentMutationVariables = {
  input: UpdateLicenseDocumentInput,
  condition?: ModelLicenseDocumentConditionInput | null,
};

export type UpdateLicenseDocumentMutation = {
  updateLicenseDocument?:  {
    __typename: "LicenseDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLicenseDocumentMutationVariables = {
  input: DeleteLicenseDocumentInput,
  condition?: ModelLicenseDocumentConditionInput | null,
};

export type DeleteLicenseDocumentMutation = {
  deleteLicenseDocument?:  {
    __typename: "LicenseDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRegistrationDocumentMutationVariables = {
  input: CreateRegistrationDocumentInput,
  condition?: ModelRegistrationDocumentConditionInput | null,
};

export type CreateRegistrationDocumentMutation = {
  createRegistrationDocument?:  {
    __typename: "RegistrationDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRegistrationDocumentMutationVariables = {
  input: UpdateRegistrationDocumentInput,
  condition?: ModelRegistrationDocumentConditionInput | null,
};

export type UpdateRegistrationDocumentMutation = {
  updateRegistrationDocument?:  {
    __typename: "RegistrationDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRegistrationDocumentMutationVariables = {
  input: DeleteRegistrationDocumentInput,
  condition?: ModelRegistrationDocumentConditionInput | null,
};

export type DeleteRegistrationDocumentMutation = {
  deleteRegistrationDocument?:  {
    __typename: "RegistrationDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateInsuranceDocumentMutationVariables = {
  input: CreateInsuranceDocumentInput,
  condition?: ModelInsuranceDocumentConditionInput | null,
};

export type CreateInsuranceDocumentMutation = {
  createInsuranceDocument?:  {
    __typename: "InsuranceDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateInsuranceDocumentMutationVariables = {
  input: UpdateInsuranceDocumentInput,
  condition?: ModelInsuranceDocumentConditionInput | null,
};

export type UpdateInsuranceDocumentMutation = {
  updateInsuranceDocument?:  {
    __typename: "InsuranceDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteInsuranceDocumentMutationVariables = {
  input: DeleteInsuranceDocumentInput,
  condition?: ModelInsuranceDocumentConditionInput | null,
};

export type DeleteInsuranceDocumentMutation = {
  deleteInsuranceDocument?:  {
    __typename: "InsuranceDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSystemNotificationMutationVariables = {
  input: CreateSystemNotificationInput,
  condition?: ModelSystemNotificationConditionInput | null,
};

export type CreateSystemNotificationMutation = {
  createSystemNotification?:  {
    __typename: "SystemNotification",
    id: string,
    title?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSystemNotificationMutationVariables = {
  input: UpdateSystemNotificationInput,
  condition?: ModelSystemNotificationConditionInput | null,
};

export type UpdateSystemNotificationMutation = {
  updateSystemNotification?:  {
    __typename: "SystemNotification",
    id: string,
    title?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSystemNotificationMutationVariables = {
  input: DeleteSystemNotificationInput,
  condition?: ModelSystemNotificationConditionInput | null,
};

export type DeleteSystemNotificationMutation = {
  deleteSystemNotification?:  {
    __typename: "SystemNotification",
    id: string,
    title?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDriverSystemNotificationMutationVariables = {
  input: CreateDriverSystemNotificationInput,
  condition?: ModelDriverSystemNotificationConditionInput | null,
};

export type CreateDriverSystemNotificationMutation = {
  createDriverSystemNotification?:  {
    __typename: "DriverSystemNotification",
    id: string,
    title: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDriverSystemNotificationMutationVariables = {
  input: UpdateDriverSystemNotificationInput,
  condition?: ModelDriverSystemNotificationConditionInput | null,
};

export type UpdateDriverSystemNotificationMutation = {
  updateDriverSystemNotification?:  {
    __typename: "DriverSystemNotification",
    id: string,
    title: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDriverSystemNotificationMutationVariables = {
  input: DeleteDriverSystemNotificationInput,
  condition?: ModelDriverSystemNotificationConditionInput | null,
};

export type DeleteDriverSystemNotificationMutation = {
  deleteDriverSystemNotification?:  {
    __typename: "DriverSystemNotification",
    id: string,
    title: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetPaymentIntentQueryVariables = {
  id: string,
};

export type GetPaymentIntentQuery = {
  getPaymentIntent?:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPaymentIntentsQueryVariables = {
  filter?: ModelPaymentIntentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentIntentsQuery = {
  listPaymentIntents?:  {
    __typename: "ModelPaymentIntentConnection",
    items:  Array< {
      __typename: "PaymentIntent",
      clientSecret: string,
      ephemeralKey: string,
      customer: string,
      setupIntent: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPaymentIntentsQueryVariables = {
  filter?: ModelPaymentIntentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPaymentIntentsQuery = {
  syncPaymentIntents?:  {
    __typename: "ModelPaymentIntentConnection",
    items:  Array< {
      __typename: "PaymentIntent",
      clientSecret: string,
      ephemeralKey: string,
      customer: string,
      setupIntent: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStripeIdentitySessionQueryVariables = {
  id: string,
};

export type GetStripeIdentitySessionQuery = {
  getStripeIdentitySession?:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStripeIdentitySessionsQueryVariables = {
  filter?: ModelStripeIdentitySessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStripeIdentitySessionsQuery = {
  listStripeIdentitySessions?:  {
    __typename: "ModelStripeIdentitySessionConnection",
    items:  Array< {
      __typename: "StripeIdentitySession",
      ephemeralKeySecret: string,
      verificationSessionId: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStripeIdentitySessionsQueryVariables = {
  filter?: ModelStripeIdentitySessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStripeIdentitySessionsQuery = {
  syncStripeIdentitySessions?:  {
    __typename: "ModelStripeIdentitySessionConnection",
    items:  Array< {
      __typename: "StripeIdentitySession",
      ephemeralKeySecret: string,
      verificationSessionId: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRiturnitFeesQueryVariables = {
  id: string,
};

export type GetRiturnitFeesQuery = {
  getRiturnitFees?:  {
    __typename: "RiturnitFees",
    id: string,
    rideBasePay: number,
    serviceFee: number,
    discountFee: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRiturnitFeesQueryVariables = {
  filter?: ModelRiturnitFeesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRiturnitFeesQuery = {
  listRiturnitFees?:  {
    __typename: "ModelRiturnitFeesConnection",
    items:  Array< {
      __typename: "RiturnitFees",
      id: string,
      rideBasePay: number,
      serviceFee: number,
      discountFee: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRiturnitFeesQueryVariables = {
  filter?: ModelRiturnitFeesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRiturnitFeesQuery = {
  syncRiturnitFees?:  {
    __typename: "ModelRiturnitFeesConnection",
    items:  Array< {
      __typename: "RiturnitFees",
      id: string,
      rideBasePay: number,
      serviceFee: number,
      discountFee: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRatingQueryVariables = {
  id: string,
};

export type GetRatingQuery = {
  getRating?:  {
    __typename: "Rating",
    id: string,
    rating?: number | null,
    comment?: string | null,
    driver_image?: string | null,
    driver_name?: string | null,
    customer_name?: string | null,
    customer_image?: string | null,
    tripsID: string,
    driverID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRatingsQuery = {
  listRatings?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      rating?: number | null,
      comment?: string | null,
      driver_image?: string | null,
      driver_name?: string | null,
      customer_name?: string | null,
      customer_image?: string | null,
      tripsID: string,
      driverID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRatingsQuery = {
  syncRatings?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      rating?: number | null,
      comment?: string | null,
      driver_image?: string | null,
      driver_name?: string | null,
      customer_name?: string | null,
      customer_image?: string | null,
      tripsID: string,
      driverID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type RatingsByTripsIDQueryVariables = {
  tripsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RatingsByTripsIDQuery = {
  ratingsByTripsID?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      rating?: number | null,
      comment?: string | null,
      driver_image?: string | null,
      driver_name?: string | null,
      customer_name?: string | null,
      customer_image?: string | null,
      tripsID: string,
      driverID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type RatingsByDriverIDQueryVariables = {
  driverID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RatingsByDriverIDQuery = {
  ratingsByDriverID?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      rating?: number | null,
      comment?: string | null,
      driver_image?: string | null,
      driver_name?: string | null,
      customer_name?: string | null,
      customer_image?: string | null,
      tripsID: string,
      driverID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type RatingsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RatingsByUserIDQuery = {
  ratingsByUserID?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      rating?: number | null,
      comment?: string | null,
      driver_image?: string | null,
      driver_name?: string | null,
      customer_name?: string | null,
      customer_image?: string | null,
      tripsID: string,
      driverID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRiturnitContactUsQueryVariables = {
  id: string,
};

export type GetRiturnitContactUsQuery = {
  getRiturnitContactUs?:  {
    __typename: "RiturnitContactUs",
    id: string,
    contactUsImage: string,
    introDescription: string,
    BuildingNumber: string,
    StreetName: string,
    CityName: string,
    AreaOrState: string,
    PostalCode: number,
    ContactNumber: string,
    EmailAddress: string,
    FacebookURL?: string | null,
    TikTok?: string | null,
    Twitter?: string | null,
    Instagram?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRiturnitContactusesQueryVariables = {
  filter?: ModelRiturnitContactUsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRiturnitContactusesQuery = {
  listRiturnitContactuses?:  {
    __typename: "ModelRiturnitContactUsConnection",
    items:  Array< {
      __typename: "RiturnitContactUs",
      id: string,
      contactUsImage: string,
      introDescription: string,
      BuildingNumber: string,
      StreetName: string,
      CityName: string,
      AreaOrState: string,
      PostalCode: number,
      ContactNumber: string,
      EmailAddress: string,
      FacebookURL?: string | null,
      TikTok?: string | null,
      Twitter?: string | null,
      Instagram?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRiturnitContactusesQueryVariables = {
  filter?: ModelRiturnitContactUsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRiturnitContactusesQuery = {
  syncRiturnitContactuses?:  {
    __typename: "ModelRiturnitContactUsConnection",
    items:  Array< {
      __typename: "RiturnitContactUs",
      id: string,
      contactUsImage: string,
      introDescription: string,
      BuildingNumber: string,
      StreetName: string,
      CityName: string,
      AreaOrState: string,
      PostalCode: number,
      ContactNumber: string,
      EmailAddress: string,
      FacebookURL?: string | null,
      TikTok?: string | null,
      Twitter?: string | null,
      Instagram?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRiturnitPointQueryVariables = {
  id: string,
};

export type GetRiturnitPointQuery = {
  getRiturnitPoint?:  {
    __typename: "RiturnitPoint",
    id: string,
    points: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRiturnitPointsQueryVariables = {
  filter?: ModelRiturnitPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRiturnitPointsQuery = {
  listRiturnitPoints?:  {
    __typename: "ModelRiturnitPointConnection",
    items:  Array< {
      __typename: "RiturnitPoint",
      id: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRiturnitPointsQueryVariables = {
  filter?: ModelRiturnitPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRiturnitPointsQuery = {
  syncRiturnitPoints?:  {
    __typename: "ModelRiturnitPointConnection",
    items:  Array< {
      __typename: "RiturnitPoint",
      id: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRiturnitCancelTripReasonQueryVariables = {
  id: string,
};

export type GetRiturnitCancelTripReasonQuery = {
  getRiturnitCancelTripReason?:  {
    __typename: "RiturnitCancelTripReason",
    id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRiturnitCancelTripReasonsQueryVariables = {
  filter?: ModelRiturnitCancelTripReasonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRiturnitCancelTripReasonsQuery = {
  listRiturnitCancelTripReasons?:  {
    __typename: "ModelRiturnitCancelTripReasonConnection",
    items:  Array< {
      __typename: "RiturnitCancelTripReason",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRiturnitCancelTripReasonsQueryVariables = {
  filter?: ModelRiturnitCancelTripReasonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRiturnitCancelTripReasonsQuery = {
  syncRiturnitCancelTripReasons?:  {
    __typename: "ModelRiturnitCancelTripReasonConnection",
    items:  Array< {
      __typename: "RiturnitCancelTripReason",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPointsQueryVariables = {
  id: string,
};

export type GetPointsQuery = {
  getPoints?:  {
    __typename: "Points",
    id: string,
    amount: number,
    store_name: string,
    store_image?: string | null,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPointsQueryVariables = {
  filter?: ModelPointsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPointsQuery = {
  listPoints?:  {
    __typename: "ModelPointsConnection",
    items:  Array< {
      __typename: "Points",
      id: string,
      amount: number,
      store_name: string,
      store_image?: string | null,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPointsQueryVariables = {
  filter?: ModelPointsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPointsQuery = {
  syncPoints?:  {
    __typename: "ModelPointsConnection",
    items:  Array< {
      __typename: "Points",
      id: string,
      amount: number,
      store_name: string,
      store_image?: string | null,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PointsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPointsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PointsByUserIDQuery = {
  pointsByUserID?:  {
    __typename: "ModelPointsConnection",
    items:  Array< {
      __typename: "Points",
      id: string,
      amount: number,
      store_name: string,
      store_image?: string | null,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PointsByStoreIDQueryVariables = {
  storeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPointsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PointsByStoreIDQuery = {
  pointsByStoreID?:  {
    __typename: "ModelPointsConnection",
    items:  Array< {
      __typename: "Points",
      id: string,
      amount: number,
      store_name: string,
      store_image?: string | null,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCarQueryVariables = {
  id: string,
};

export type GetCarQuery = {
  getCar?:  {
    __typename: "Car",
    id: string,
    model: string,
    make: string,
    year: number,
    plate_number: string,
    color: string,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCarsQuery = {
  listCars?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      model: string,
      make: string,
      year: number,
      plate_number: string,
      color: string,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCarsQuery = {
  syncCars?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      model: string,
      make: string,
      year: number,
      plate_number: string,
      color: string,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CarsByDriverIDQueryVariables = {
  driverID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CarsByDriverIDQuery = {
  carsByDriverID?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      model: string,
      make: string,
      year: number,
      plate_number: string,
      color: string,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    id: string,
    customer_name?: string | null,
    email: string,
    address?: string | null,
    phone_number: string,
    total_amount: number,
    payment_method?: string | null,
    payment_status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      customer_name?: string | null,
      email: string,
      address?: string | null,
      phone_number: string,
      total_amount: number,
      payment_method?: string | null,
      payment_status?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPaymentsQuery = {
  syncPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      customer_name?: string | null,
      email: string,
      address?: string | null,
      phone_number: string,
      total_amount: number,
      payment_method?: string | null,
      payment_status?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PaymentsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PaymentsByUserIDQuery = {
  paymentsByUserID?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      customer_name?: string | null,
      email: string,
      address?: string | null,
      phone_number: string,
      total_amount: number,
      payment_method?: string | null,
      payment_status?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDriverWalletQueryVariables = {
  id: string,
};

export type GetDriverWalletQuery = {
  getDriverWallet?:  {
    __typename: "DriverWallet",
    id: string,
    amount: number,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDriverWalletsQueryVariables = {
  filter?: ModelDriverWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriverWalletsQuery = {
  listDriverWallets?:  {
    __typename: "ModelDriverWalletConnection",
    items:  Array< {
      __typename: "DriverWallet",
      id: string,
      amount: number,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDriverWalletsQueryVariables = {
  filter?: ModelDriverWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDriverWalletsQuery = {
  syncDriverWallets?:  {
    __typename: "ModelDriverWalletConnection",
    items:  Array< {
      __typename: "DriverWallet",
      id: string,
      amount: number,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DriverWalletsByDriverIDQueryVariables = {
  driverID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDriverWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DriverWalletsByDriverIDQuery = {
  driverWalletsByDriverID?:  {
    __typename: "ModelDriverWalletConnection",
    items:  Array< {
      __typename: "DriverWallet",
      id: string,
      amount: number,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetReceiptQueryVariables = {
  id: string,
};

export type GetReceiptQuery = {
  getReceipt?:  {
    __typename: "Receipt",
    id: string,
    image: string,
    store_name: string,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListReceiptsQueryVariables = {
  filter?: ModelReceiptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReceiptsQuery = {
  listReceipts?:  {
    __typename: "ModelReceiptConnection",
    items:  Array< {
      __typename: "Receipt",
      id: string,
      image: string,
      store_name: string,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncReceiptsQueryVariables = {
  filter?: ModelReceiptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReceiptsQuery = {
  syncReceipts?:  {
    __typename: "ModelReceiptConnection",
    items:  Array< {
      __typename: "Receipt",
      id: string,
      image: string,
      store_name: string,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ReceiptsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReceiptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReceiptsByUserIDQuery = {
  receiptsByUserID?:  {
    __typename: "ModelReceiptConnection",
    items:  Array< {
      __typename: "Receipt",
      id: string,
      image: string,
      store_name: string,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ReceiptsByStoreIDQueryVariables = {
  storeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReceiptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReceiptsByStoreIDQuery = {
  receiptsByStoreID?:  {
    __typename: "ModelReceiptConnection",
    items:  Array< {
      __typename: "Receipt",
      id: string,
      image: string,
      store_name: string,
      userID: string,
      storeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTripCartQueryVariables = {
  id: string,
};

export type GetTripCartQuery = {
  getTripCart?:  {
    __typename: "TripCart",
    id: string,
    expiry_date: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    storeID: string,
    userID: string,
    tripsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTripCartsQueryVariables = {
  filter?: ModelTripCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTripCartsQuery = {
  listTripCarts?:  {
    __typename: "ModelTripCartConnection",
    items:  Array< {
      __typename: "TripCart",
      id: string,
      expiry_date: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      storeID: string,
      userID: string,
      tripsID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTripCartsQueryVariables = {
  filter?: ModelTripCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTripCartsQuery = {
  syncTripCarts?:  {
    __typename: "ModelTripCartConnection",
    items:  Array< {
      __typename: "TripCart",
      id: string,
      expiry_date: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      storeID: string,
      userID: string,
      tripsID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TripCartsByStoreIDQueryVariables = {
  storeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTripCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TripCartsByStoreIDQuery = {
  tripCartsByStoreID?:  {
    __typename: "ModelTripCartConnection",
    items:  Array< {
      __typename: "TripCart",
      id: string,
      expiry_date: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      storeID: string,
      userID: string,
      tripsID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TripCartsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTripCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TripCartsByUserIDQuery = {
  tripCartsByUserID?:  {
    __typename: "ModelTripCartConnection",
    items:  Array< {
      __typename: "TripCart",
      id: string,
      expiry_date: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      storeID: string,
      userID: string,
      tripsID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TripCartsByTripsIDQueryVariables = {
  tripsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTripCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TripCartsByTripsIDQuery = {
  tripCartsByTripsID?:  {
    __typename: "ModelTripCartConnection",
    items:  Array< {
      __typename: "TripCart",
      id: string,
      expiry_date: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      storeID: string,
      userID: string,
      tripsID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTripsQueryVariables = {
  id: string,
};

export type GetTripsQuery = {
  getTrips?:  {
    __typename: "Trips",
    id: string,
    trip_status?: TripStatus | null,
    pickup_lat?: string | null,
    pickup_lng?: string | null,
    dropoff_lat?: string | null,
    dropoff_lng?: string | null,
    pickup_location_description?: string | null,
    dropoff_location_description?: string | null,
    trip_cost?: number | null,
    TotalQtyItems?: number | null,
    receipt?: string | null,
    duration?: number | null,
    distance?: number | null,
    store_name?: string | null,
    store_image?: string | null,
    user_name?: string | null,
    user_photo?: string | null,
    mobile_number?: string | null,
    driver_name?: string | null,
    driver_photo?: string | null,
    driver_rating?: number | null,
    driver_mobile_number?: string | null,
    driver_car_model?: string | null,
    driver_car_make?: string | null,
    driver_car_color?: string | null,
    driver_car_plate_number?: string | null,
    sub_total?: number | null,
    redeem_points?: number | null,
    service_fee?: number | null,
    delivery_fee?: number | null,
    delivery_discount?: number | null,
    sum_total?: number | null,
    Driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID?: string | null,
    storeID: string,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    tripsDriverId?: string | null,
  } | null,
};

export type ListTripsQueryVariables = {
  filter?: ModelTripsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTripsQuery = {
  listTrips?:  {
    __typename: "ModelTripsConnection",
    items:  Array< {
      __typename: "Trips",
      id: string,
      trip_status?: TripStatus | null,
      pickup_lat?: string | null,
      pickup_lng?: string | null,
      dropoff_lat?: string | null,
      dropoff_lng?: string | null,
      pickup_location_description?: string | null,
      dropoff_location_description?: string | null,
      trip_cost?: number | null,
      TotalQtyItems?: number | null,
      receipt?: string | null,
      duration?: number | null,
      distance?: number | null,
      store_name?: string | null,
      store_image?: string | null,
      user_name?: string | null,
      user_photo?: string | null,
      mobile_number?: string | null,
      driver_name?: string | null,
      driver_photo?: string | null,
      driver_rating?: number | null,
      driver_mobile_number?: string | null,
      driver_car_model?: string | null,
      driver_car_make?: string | null,
      driver_car_color?: string | null,
      driver_car_plate_number?: string | null,
      sub_total?: number | null,
      redeem_points?: number | null,
      service_fee?: number | null,
      delivery_fee?: number | null,
      delivery_discount?: number | null,
      sum_total?: number | null,
      Driver?:  {
        __typename: "Driver",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        rating?: number | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        verificationStatus?: DriverRegistrationStatus | null,
        onlineStatus?: boolean | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userID?: string | null,
      storeID: string,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      tripsDriverId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTripsQueryVariables = {
  filter?: ModelTripsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTripsQuery = {
  syncTrips?:  {
    __typename: "ModelTripsConnection",
    items:  Array< {
      __typename: "Trips",
      id: string,
      trip_status?: TripStatus | null,
      pickup_lat?: string | null,
      pickup_lng?: string | null,
      dropoff_lat?: string | null,
      dropoff_lng?: string | null,
      pickup_location_description?: string | null,
      dropoff_location_description?: string | null,
      trip_cost?: number | null,
      TotalQtyItems?: number | null,
      receipt?: string | null,
      duration?: number | null,
      distance?: number | null,
      store_name?: string | null,
      store_image?: string | null,
      user_name?: string | null,
      user_photo?: string | null,
      mobile_number?: string | null,
      driver_name?: string | null,
      driver_photo?: string | null,
      driver_rating?: number | null,
      driver_mobile_number?: string | null,
      driver_car_model?: string | null,
      driver_car_make?: string | null,
      driver_car_color?: string | null,
      driver_car_plate_number?: string | null,
      sub_total?: number | null,
      redeem_points?: number | null,
      service_fee?: number | null,
      delivery_fee?: number | null,
      delivery_discount?: number | null,
      sum_total?: number | null,
      Driver?:  {
        __typename: "Driver",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        rating?: number | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        verificationStatus?: DriverRegistrationStatus | null,
        onlineStatus?: boolean | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userID?: string | null,
      storeID: string,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      tripsDriverId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TripsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTripsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TripsByUserIDQuery = {
  tripsByUserID?:  {
    __typename: "ModelTripsConnection",
    items:  Array< {
      __typename: "Trips",
      id: string,
      trip_status?: TripStatus | null,
      pickup_lat?: string | null,
      pickup_lng?: string | null,
      dropoff_lat?: string | null,
      dropoff_lng?: string | null,
      pickup_location_description?: string | null,
      dropoff_location_description?: string | null,
      trip_cost?: number | null,
      TotalQtyItems?: number | null,
      receipt?: string | null,
      duration?: number | null,
      distance?: number | null,
      store_name?: string | null,
      store_image?: string | null,
      user_name?: string | null,
      user_photo?: string | null,
      mobile_number?: string | null,
      driver_name?: string | null,
      driver_photo?: string | null,
      driver_rating?: number | null,
      driver_mobile_number?: string | null,
      driver_car_model?: string | null,
      driver_car_make?: string | null,
      driver_car_color?: string | null,
      driver_car_plate_number?: string | null,
      sub_total?: number | null,
      redeem_points?: number | null,
      service_fee?: number | null,
      delivery_fee?: number | null,
      delivery_discount?: number | null,
      sum_total?: number | null,
      Driver?:  {
        __typename: "Driver",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        rating?: number | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        verificationStatus?: DriverRegistrationStatus | null,
        onlineStatus?: boolean | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userID?: string | null,
      storeID: string,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      tripsDriverId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TripsByStoreIDQueryVariables = {
  storeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTripsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TripsByStoreIDQuery = {
  tripsByStoreID?:  {
    __typename: "ModelTripsConnection",
    items:  Array< {
      __typename: "Trips",
      id: string,
      trip_status?: TripStatus | null,
      pickup_lat?: string | null,
      pickup_lng?: string | null,
      dropoff_lat?: string | null,
      dropoff_lng?: string | null,
      pickup_location_description?: string | null,
      dropoff_location_description?: string | null,
      trip_cost?: number | null,
      TotalQtyItems?: number | null,
      receipt?: string | null,
      duration?: number | null,
      distance?: number | null,
      store_name?: string | null,
      store_image?: string | null,
      user_name?: string | null,
      user_photo?: string | null,
      mobile_number?: string | null,
      driver_name?: string | null,
      driver_photo?: string | null,
      driver_rating?: number | null,
      driver_mobile_number?: string | null,
      driver_car_model?: string | null,
      driver_car_make?: string | null,
      driver_car_color?: string | null,
      driver_car_plate_number?: string | null,
      sub_total?: number | null,
      redeem_points?: number | null,
      service_fee?: number | null,
      delivery_fee?: number | null,
      delivery_discount?: number | null,
      sum_total?: number | null,
      Driver?:  {
        __typename: "Driver",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        rating?: number | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        verificationStatus?: DriverRegistrationStatus | null,
        onlineStatus?: boolean | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userID?: string | null,
      storeID: string,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      tripsDriverId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    expiryDays: number,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStoresQuery = {
  syncStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    expiry_date: string,
    userID: string,
    storeID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      expiry_date: string,
      userID: string,
      storeID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        home_address?: string | null,
        work_address?: string | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      Store?:  {
        __typename: "Store",
        id: string,
        name: string,
        image: string,
        description?: string | null,
        expiryDays: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      expiry_date: string,
      userID: string,
      storeID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        home_address?: string | null,
        work_address?: string | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      Store?:  {
        __typename: "Store",
        id: string,
        name: string,
        image: string,
        description?: string | null,
        expiryDays: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByUserIDQuery = {
  productsByUserID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      expiry_date: string,
      userID: string,
      storeID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        home_address?: string | null,
        work_address?: string | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      Store?:  {
        __typename: "Store",
        id: string,
        name: string,
        image: string,
        description?: string | null,
        expiryDays: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsByStoreIDQueryVariables = {
  storeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByStoreIDQuery = {
  productsByStoreID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      image: string,
      quantity: number,
      price: number,
      description?: string | null,
      expiry_date: string,
      userID: string,
      storeID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        image?: string | null,
        phone_number?: string | null,
        home_address?: string | null,
        work_address?: string | null,
        inviteCode?: string | null,
        lng?: string | null,
        lat?: string | null,
        fcmToken?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      Store?:  {
        __typename: "Store",
        id: string,
        name: string,
        image: string,
        description?: string | null,
        expiryDays: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    home_address?: string | null,
    work_address?: string | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      items:  Array< {
        __typename: "Payment",
        id: string,
        customer_name?: string | null,
        email: string,
        address?: string | null,
        phone_number: string,
        total_amount: number,
        payment_method?: string | null,
        payment_status?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDriverQueryVariables = {
  id: string,
};

export type GetDriverQuery = {
  getDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    rating?: number | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    verificationStatus?: DriverRegistrationStatus | null,
    onlineStatus?: boolean | null,
    Cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        model: string,
        make: string,
        year: number,
        plate_number: string,
        color: string,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    DriverWallets?:  {
      __typename: "ModelDriverWalletConnection",
      items:  Array< {
        __typename: "DriverWallet",
        id: string,
        amount: number,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LicenseDocuments?:  {
      __typename: "ModelLicenseDocumentConnection",
      items:  Array< {
        __typename: "LicenseDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    RegistrationDocuments?:  {
      __typename: "ModelRegistrationDocumentConnection",
      items:  Array< {
        __typename: "RegistrationDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    InsuranceDocuments?:  {
      __typename: "ModelInsuranceDocumentConnection",
      items:  Array< {
        __typename: "InsuranceDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDriversQueryVariables = {
  filter?: ModelDriverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriversQuery = {
  listDrivers?:  {
    __typename: "ModelDriverConnection",
    items:  Array< {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDriversQueryVariables = {
  filter?: ModelDriverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDriversQuery = {
  syncDrivers?:  {
    __typename: "ModelDriverConnection",
    items:  Array< {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLicenseDocumentQueryVariables = {
  id: string,
};

export type GetLicenseDocumentQuery = {
  getLicenseDocument?:  {
    __typename: "LicenseDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLicenseDocumentsQueryVariables = {
  filter?: ModelLicenseDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLicenseDocumentsQuery = {
  listLicenseDocuments?:  {
    __typename: "ModelLicenseDocumentConnection",
    items:  Array< {
      __typename: "LicenseDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLicenseDocumentsQueryVariables = {
  filter?: ModelLicenseDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLicenseDocumentsQuery = {
  syncLicenseDocuments?:  {
    __typename: "ModelLicenseDocumentConnection",
    items:  Array< {
      __typename: "LicenseDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type LicenseDocumentsByDriverIDQueryVariables = {
  driverID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLicenseDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LicenseDocumentsByDriverIDQuery = {
  licenseDocumentsByDriverID?:  {
    __typename: "ModelLicenseDocumentConnection",
    items:  Array< {
      __typename: "LicenseDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRegistrationDocumentQueryVariables = {
  id: string,
};

export type GetRegistrationDocumentQuery = {
  getRegistrationDocument?:  {
    __typename: "RegistrationDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRegistrationDocumentsQueryVariables = {
  filter?: ModelRegistrationDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRegistrationDocumentsQuery = {
  listRegistrationDocuments?:  {
    __typename: "ModelRegistrationDocumentConnection",
    items:  Array< {
      __typename: "RegistrationDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRegistrationDocumentsQueryVariables = {
  filter?: ModelRegistrationDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRegistrationDocumentsQuery = {
  syncRegistrationDocuments?:  {
    __typename: "ModelRegistrationDocumentConnection",
    items:  Array< {
      __typename: "RegistrationDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type RegistrationDocumentsByDriverIDQueryVariables = {
  driverID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRegistrationDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RegistrationDocumentsByDriverIDQuery = {
  registrationDocumentsByDriverID?:  {
    __typename: "ModelRegistrationDocumentConnection",
    items:  Array< {
      __typename: "RegistrationDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetInsuranceDocumentQueryVariables = {
  id: string,
};

export type GetInsuranceDocumentQuery = {
  getInsuranceDocument?:  {
    __typename: "InsuranceDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListInsuranceDocumentsQueryVariables = {
  filter?: ModelInsuranceDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInsuranceDocumentsQuery = {
  listInsuranceDocuments?:  {
    __typename: "ModelInsuranceDocumentConnection",
    items:  Array< {
      __typename: "InsuranceDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncInsuranceDocumentsQueryVariables = {
  filter?: ModelInsuranceDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncInsuranceDocumentsQuery = {
  syncInsuranceDocuments?:  {
    __typename: "ModelInsuranceDocumentConnection",
    items:  Array< {
      __typename: "InsuranceDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type InsuranceDocumentsByDriverIDQueryVariables = {
  driverID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInsuranceDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InsuranceDocumentsByDriverIDQuery = {
  insuranceDocumentsByDriverID?:  {
    __typename: "ModelInsuranceDocumentConnection",
    items:  Array< {
      __typename: "InsuranceDocument",
      id: string,
      image?: string | null,
      name?: string | null,
      expiry_date?: string | null,
      driverID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSystemNotificationQueryVariables = {
  id: string,
};

export type GetSystemNotificationQuery = {
  getSystemNotification?:  {
    __typename: "SystemNotification",
    id: string,
    title?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSystemNotificationsQueryVariables = {
  filter?: ModelSystemNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSystemNotificationsQuery = {
  listSystemNotifications?:  {
    __typename: "ModelSystemNotificationConnection",
    items:  Array< {
      __typename: "SystemNotification",
      id: string,
      title?: string | null,
      message?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSystemNotificationsQueryVariables = {
  filter?: ModelSystemNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSystemNotificationsQuery = {
  syncSystemNotifications?:  {
    __typename: "ModelSystemNotificationConnection",
    items:  Array< {
      __typename: "SystemNotification",
      id: string,
      title?: string | null,
      message?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDriverSystemNotificationQueryVariables = {
  id: string,
};

export type GetDriverSystemNotificationQuery = {
  getDriverSystemNotification?:  {
    __typename: "DriverSystemNotification",
    id: string,
    title: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDriverSystemNotificationsQueryVariables = {
  filter?: ModelDriverSystemNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriverSystemNotificationsQuery = {
  listDriverSystemNotifications?:  {
    __typename: "ModelDriverSystemNotificationConnection",
    items:  Array< {
      __typename: "DriverSystemNotification",
      id: string,
      title: string,
      message: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDriverSystemNotificationsQueryVariables = {
  filter?: ModelDriverSystemNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDriverSystemNotificationsQuery = {
  syncDriverSystemNotifications?:  {
    __typename: "ModelDriverSystemNotificationConnection",
    items:  Array< {
      __typename: "DriverSystemNotification",
      id: string,
      title: string,
      message: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePaymentIntentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentIntentFilterInput | null,
};

export type OnCreatePaymentIntentSubscription = {
  onCreatePaymentIntent?:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePaymentIntentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentIntentFilterInput | null,
};

export type OnUpdatePaymentIntentSubscription = {
  onUpdatePaymentIntent?:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePaymentIntentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentIntentFilterInput | null,
};

export type OnDeletePaymentIntentSubscription = {
  onDeletePaymentIntent?:  {
    __typename: "PaymentIntent",
    clientSecret: string,
    ephemeralKey: string,
    customer: string,
    setupIntent: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStripeIdentitySessionSubscriptionVariables = {
  filter?: ModelSubscriptionStripeIdentitySessionFilterInput | null,
};

export type OnCreateStripeIdentitySessionSubscription = {
  onCreateStripeIdentitySession?:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStripeIdentitySessionSubscriptionVariables = {
  filter?: ModelSubscriptionStripeIdentitySessionFilterInput | null,
};

export type OnUpdateStripeIdentitySessionSubscription = {
  onUpdateStripeIdentitySession?:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStripeIdentitySessionSubscriptionVariables = {
  filter?: ModelSubscriptionStripeIdentitySessionFilterInput | null,
};

export type OnDeleteStripeIdentitySessionSubscription = {
  onDeleteStripeIdentitySession?:  {
    __typename: "StripeIdentitySession",
    ephemeralKeySecret: string,
    verificationSessionId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRiturnitFeesSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitFeesFilterInput | null,
};

export type OnCreateRiturnitFeesSubscription = {
  onCreateRiturnitFees?:  {
    __typename: "RiturnitFees",
    id: string,
    rideBasePay: number,
    serviceFee: number,
    discountFee: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRiturnitFeesSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitFeesFilterInput | null,
};

export type OnUpdateRiturnitFeesSubscription = {
  onUpdateRiturnitFees?:  {
    __typename: "RiturnitFees",
    id: string,
    rideBasePay: number,
    serviceFee: number,
    discountFee: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRiturnitFeesSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitFeesFilterInput | null,
};

export type OnDeleteRiturnitFeesSubscription = {
  onDeleteRiturnitFees?:  {
    __typename: "RiturnitFees",
    id: string,
    rideBasePay: number,
    serviceFee: number,
    discountFee: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
};

export type OnCreateRatingSubscription = {
  onCreateRating?:  {
    __typename: "Rating",
    id: string,
    rating?: number | null,
    comment?: string | null,
    driver_image?: string | null,
    driver_name?: string | null,
    customer_name?: string | null,
    customer_image?: string | null,
    tripsID: string,
    driverID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
};

export type OnUpdateRatingSubscription = {
  onUpdateRating?:  {
    __typename: "Rating",
    id: string,
    rating?: number | null,
    comment?: string | null,
    driver_image?: string | null,
    driver_name?: string | null,
    customer_name?: string | null,
    customer_image?: string | null,
    tripsID: string,
    driverID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
};

export type OnDeleteRatingSubscription = {
  onDeleteRating?:  {
    __typename: "Rating",
    id: string,
    rating?: number | null,
    comment?: string | null,
    driver_image?: string | null,
    driver_name?: string | null,
    customer_name?: string | null,
    customer_image?: string | null,
    tripsID: string,
    driverID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRiturnitContactUsSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitContactUsFilterInput | null,
};

export type OnCreateRiturnitContactUsSubscription = {
  onCreateRiturnitContactUs?:  {
    __typename: "RiturnitContactUs",
    id: string,
    contactUsImage: string,
    introDescription: string,
    BuildingNumber: string,
    StreetName: string,
    CityName: string,
    AreaOrState: string,
    PostalCode: number,
    ContactNumber: string,
    EmailAddress: string,
    FacebookURL?: string | null,
    TikTok?: string | null,
    Twitter?: string | null,
    Instagram?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRiturnitContactUsSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitContactUsFilterInput | null,
};

export type OnUpdateRiturnitContactUsSubscription = {
  onUpdateRiturnitContactUs?:  {
    __typename: "RiturnitContactUs",
    id: string,
    contactUsImage: string,
    introDescription: string,
    BuildingNumber: string,
    StreetName: string,
    CityName: string,
    AreaOrState: string,
    PostalCode: number,
    ContactNumber: string,
    EmailAddress: string,
    FacebookURL?: string | null,
    TikTok?: string | null,
    Twitter?: string | null,
    Instagram?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRiturnitContactUsSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitContactUsFilterInput | null,
};

export type OnDeleteRiturnitContactUsSubscription = {
  onDeleteRiturnitContactUs?:  {
    __typename: "RiturnitContactUs",
    id: string,
    contactUsImage: string,
    introDescription: string,
    BuildingNumber: string,
    StreetName: string,
    CityName: string,
    AreaOrState: string,
    PostalCode: number,
    ContactNumber: string,
    EmailAddress: string,
    FacebookURL?: string | null,
    TikTok?: string | null,
    Twitter?: string | null,
    Instagram?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRiturnitPointSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitPointFilterInput | null,
};

export type OnCreateRiturnitPointSubscription = {
  onCreateRiturnitPoint?:  {
    __typename: "RiturnitPoint",
    id: string,
    points: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRiturnitPointSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitPointFilterInput | null,
};

export type OnUpdateRiturnitPointSubscription = {
  onUpdateRiturnitPoint?:  {
    __typename: "RiturnitPoint",
    id: string,
    points: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRiturnitPointSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitPointFilterInput | null,
};

export type OnDeleteRiturnitPointSubscription = {
  onDeleteRiturnitPoint?:  {
    __typename: "RiturnitPoint",
    id: string,
    points: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRiturnitCancelTripReasonSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitCancelTripReasonFilterInput | null,
};

export type OnCreateRiturnitCancelTripReasonSubscription = {
  onCreateRiturnitCancelTripReason?:  {
    __typename: "RiturnitCancelTripReason",
    id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRiturnitCancelTripReasonSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitCancelTripReasonFilterInput | null,
};

export type OnUpdateRiturnitCancelTripReasonSubscription = {
  onUpdateRiturnitCancelTripReason?:  {
    __typename: "RiturnitCancelTripReason",
    id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRiturnitCancelTripReasonSubscriptionVariables = {
  filter?: ModelSubscriptionRiturnitCancelTripReasonFilterInput | null,
};

export type OnDeleteRiturnitCancelTripReasonSubscription = {
  onDeleteRiturnitCancelTripReason?:  {
    __typename: "RiturnitCancelTripReason",
    id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePointsSubscriptionVariables = {
  filter?: ModelSubscriptionPointsFilterInput | null,
};

export type OnCreatePointsSubscription = {
  onCreatePoints?:  {
    __typename: "Points",
    id: string,
    amount: number,
    store_name: string,
    store_image?: string | null,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePointsSubscriptionVariables = {
  filter?: ModelSubscriptionPointsFilterInput | null,
};

export type OnUpdatePointsSubscription = {
  onUpdatePoints?:  {
    __typename: "Points",
    id: string,
    amount: number,
    store_name: string,
    store_image?: string | null,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePointsSubscriptionVariables = {
  filter?: ModelSubscriptionPointsFilterInput | null,
};

export type OnDeletePointsSubscription = {
  onDeletePoints?:  {
    __typename: "Points",
    id: string,
    amount: number,
    store_name: string,
    store_image?: string | null,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnCreateCarSubscription = {
  onCreateCar?:  {
    __typename: "Car",
    id: string,
    model: string,
    make: string,
    year: number,
    plate_number: string,
    color: string,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnUpdateCarSubscription = {
  onUpdateCar?:  {
    __typename: "Car",
    id: string,
    model: string,
    make: string,
    year: number,
    plate_number: string,
    color: string,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnDeleteCarSubscription = {
  onDeleteCar?:  {
    __typename: "Car",
    id: string,
    model: string,
    make: string,
    year: number,
    plate_number: string,
    color: string,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    id: string,
    customer_name?: string | null,
    email: string,
    address?: string | null,
    phone_number: string,
    total_amount: number,
    payment_method?: string | null,
    payment_status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    id: string,
    customer_name?: string | null,
    email: string,
    address?: string | null,
    phone_number: string,
    total_amount: number,
    payment_method?: string | null,
    payment_status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    id: string,
    customer_name?: string | null,
    email: string,
    address?: string | null,
    phone_number: string,
    total_amount: number,
    payment_method?: string | null,
    payment_status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDriverWalletSubscriptionVariables = {
  filter?: ModelSubscriptionDriverWalletFilterInput | null,
};

export type OnCreateDriverWalletSubscription = {
  onCreateDriverWallet?:  {
    __typename: "DriverWallet",
    id: string,
    amount: number,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDriverWalletSubscriptionVariables = {
  filter?: ModelSubscriptionDriverWalletFilterInput | null,
};

export type OnUpdateDriverWalletSubscription = {
  onUpdateDriverWallet?:  {
    __typename: "DriverWallet",
    id: string,
    amount: number,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDriverWalletSubscriptionVariables = {
  filter?: ModelSubscriptionDriverWalletFilterInput | null,
};

export type OnDeleteDriverWalletSubscription = {
  onDeleteDriverWallet?:  {
    __typename: "DriverWallet",
    id: string,
    amount: number,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateReceiptSubscriptionVariables = {
  filter?: ModelSubscriptionReceiptFilterInput | null,
};

export type OnCreateReceiptSubscription = {
  onCreateReceipt?:  {
    __typename: "Receipt",
    id: string,
    image: string,
    store_name: string,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateReceiptSubscriptionVariables = {
  filter?: ModelSubscriptionReceiptFilterInput | null,
};

export type OnUpdateReceiptSubscription = {
  onUpdateReceipt?:  {
    __typename: "Receipt",
    id: string,
    image: string,
    store_name: string,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteReceiptSubscriptionVariables = {
  filter?: ModelSubscriptionReceiptFilterInput | null,
};

export type OnDeleteReceiptSubscription = {
  onDeleteReceipt?:  {
    __typename: "Receipt",
    id: string,
    image: string,
    store_name: string,
    userID: string,
    storeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTripCartSubscriptionVariables = {
  filter?: ModelSubscriptionTripCartFilterInput | null,
};

export type OnCreateTripCartSubscription = {
  onCreateTripCart?:  {
    __typename: "TripCart",
    id: string,
    expiry_date: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    storeID: string,
    userID: string,
    tripsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTripCartSubscriptionVariables = {
  filter?: ModelSubscriptionTripCartFilterInput | null,
};

export type OnUpdateTripCartSubscription = {
  onUpdateTripCart?:  {
    __typename: "TripCart",
    id: string,
    expiry_date: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    storeID: string,
    userID: string,
    tripsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTripCartSubscriptionVariables = {
  filter?: ModelSubscriptionTripCartFilterInput | null,
};

export type OnDeleteTripCartSubscription = {
  onDeleteTripCart?:  {
    __typename: "TripCart",
    id: string,
    expiry_date: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    storeID: string,
    userID: string,
    tripsID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTripsSubscriptionVariables = {
  filter?: ModelSubscriptionTripsFilterInput | null,
};

export type OnCreateTripsSubscription = {
  onCreateTrips?:  {
    __typename: "Trips",
    id: string,
    trip_status?: TripStatus | null,
    pickup_lat?: string | null,
    pickup_lng?: string | null,
    dropoff_lat?: string | null,
    dropoff_lng?: string | null,
    pickup_location_description?: string | null,
    dropoff_location_description?: string | null,
    trip_cost?: number | null,
    TotalQtyItems?: number | null,
    receipt?: string | null,
    duration?: number | null,
    distance?: number | null,
    store_name?: string | null,
    store_image?: string | null,
    user_name?: string | null,
    user_photo?: string | null,
    mobile_number?: string | null,
    driver_name?: string | null,
    driver_photo?: string | null,
    driver_rating?: number | null,
    driver_mobile_number?: string | null,
    driver_car_model?: string | null,
    driver_car_make?: string | null,
    driver_car_color?: string | null,
    driver_car_plate_number?: string | null,
    sub_total?: number | null,
    redeem_points?: number | null,
    service_fee?: number | null,
    delivery_fee?: number | null,
    delivery_discount?: number | null,
    sum_total?: number | null,
    Driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID?: string | null,
    storeID: string,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    tripsDriverId?: string | null,
  } | null,
};

export type OnUpdateTripsSubscriptionVariables = {
  filter?: ModelSubscriptionTripsFilterInput | null,
};

export type OnUpdateTripsSubscription = {
  onUpdateTrips?:  {
    __typename: "Trips",
    id: string,
    trip_status?: TripStatus | null,
    pickup_lat?: string | null,
    pickup_lng?: string | null,
    dropoff_lat?: string | null,
    dropoff_lng?: string | null,
    pickup_location_description?: string | null,
    dropoff_location_description?: string | null,
    trip_cost?: number | null,
    TotalQtyItems?: number | null,
    receipt?: string | null,
    duration?: number | null,
    distance?: number | null,
    store_name?: string | null,
    store_image?: string | null,
    user_name?: string | null,
    user_photo?: string | null,
    mobile_number?: string | null,
    driver_name?: string | null,
    driver_photo?: string | null,
    driver_rating?: number | null,
    driver_mobile_number?: string | null,
    driver_car_model?: string | null,
    driver_car_make?: string | null,
    driver_car_color?: string | null,
    driver_car_plate_number?: string | null,
    sub_total?: number | null,
    redeem_points?: number | null,
    service_fee?: number | null,
    delivery_fee?: number | null,
    delivery_discount?: number | null,
    sum_total?: number | null,
    Driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID?: string | null,
    storeID: string,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    tripsDriverId?: string | null,
  } | null,
};

export type OnDeleteTripsSubscriptionVariables = {
  filter?: ModelSubscriptionTripsFilterInput | null,
};

export type OnDeleteTripsSubscription = {
  onDeleteTrips?:  {
    __typename: "Trips",
    id: string,
    trip_status?: TripStatus | null,
    pickup_lat?: string | null,
    pickup_lng?: string | null,
    dropoff_lat?: string | null,
    dropoff_lng?: string | null,
    pickup_location_description?: string | null,
    dropoff_location_description?: string | null,
    trip_cost?: number | null,
    TotalQtyItems?: number | null,
    receipt?: string | null,
    duration?: number | null,
    distance?: number | null,
    store_name?: string | null,
    store_image?: string | null,
    user_name?: string | null,
    user_photo?: string | null,
    mobile_number?: string | null,
    driver_name?: string | null,
    driver_photo?: string | null,
    driver_rating?: number | null,
    driver_mobile_number?: string | null,
    driver_car_model?: string | null,
    driver_car_make?: string | null,
    driver_car_color?: string | null,
    driver_car_plate_number?: string | null,
    sub_total?: number | null,
    redeem_points?: number | null,
    service_fee?: number | null,
    delivery_fee?: number | null,
    delivery_discount?: number | null,
    sum_total?: number | null,
    Driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      rating?: number | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      verificationStatus?: DriverRegistrationStatus | null,
      onlineStatus?: boolean | null,
      Cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      DriverWallets?:  {
        __typename: "ModelDriverWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LicenseDocuments?:  {
        __typename: "ModelLicenseDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      RegistrationDocuments?:  {
        __typename: "ModelRegistrationDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      InsuranceDocuments?:  {
        __typename: "ModelInsuranceDocumentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID?: string | null,
    storeID: string,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    tripsDriverId?: string | null,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    expiryDays: number,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    expiryDays: number,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    expiryDays: number,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    expiry_date: string,
    userID: string,
    storeID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    expiry_date: string,
    userID: string,
    storeID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    image: string,
    quantity: number,
    price: number,
    description?: string | null,
    expiry_date: string,
    userID: string,
    storeID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      image?: string | null,
      phone_number?: string | null,
      home_address?: string | null,
      work_address?: string | null,
      inviteCode?: string | null,
      lng?: string | null,
      lat?: string | null,
      Ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Payments?:  {
        __typename: "ModelPaymentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      fcmToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      expiryDays: number,
      Points?:  {
        __typename: "ModelPointsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Receipts?:  {
        __typename: "ModelReceiptConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TripCarts?:  {
        __typename: "ModelTripCartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Trips?:  {
        __typename: "ModelTripsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    home_address?: string | null,
    work_address?: string | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      items:  Array< {
        __typename: "Payment",
        id: string,
        customer_name?: string | null,
        email: string,
        address?: string | null,
        phone_number: string,
        total_amount: number,
        payment_method?: string | null,
        payment_status?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    home_address?: string | null,
    work_address?: string | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      items:  Array< {
        __typename: "Payment",
        id: string,
        customer_name?: string | null,
        email: string,
        address?: string | null,
        phone_number: string,
        total_amount: number,
        payment_method?: string | null,
        payment_status?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    home_address?: string | null,
    work_address?: string | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Receipts?:  {
      __typename: "ModelReceiptConnection",
      items:  Array< {
        __typename: "Receipt",
        id: string,
        image: string,
        store_name: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      items:  Array< {
        __typename: "Payment",
        id: string,
        customer_name?: string | null,
        email: string,
        address?: string | null,
        phone_number: string,
        total_amount: number,
        payment_method?: string | null,
        payment_status?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        expiry_date: string,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Points?:  {
      __typename: "ModelPointsConnection",
      items:  Array< {
        __typename: "Points",
        id: string,
        amount: number,
        store_name: string,
        store_image?: string | null,
        userID: string,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Trips?:  {
      __typename: "ModelTripsConnection",
      items:  Array< {
        __typename: "Trips",
        id: string,
        trip_status?: TripStatus | null,
        pickup_lat?: string | null,
        pickup_lng?: string | null,
        dropoff_lat?: string | null,
        dropoff_lng?: string | null,
        pickup_location_description?: string | null,
        dropoff_location_description?: string | null,
        trip_cost?: number | null,
        TotalQtyItems?: number | null,
        receipt?: string | null,
        duration?: number | null,
        distance?: number | null,
        store_name?: string | null,
        store_image?: string | null,
        user_name?: string | null,
        user_photo?: string | null,
        mobile_number?: string | null,
        driver_name?: string | null,
        driver_photo?: string | null,
        driver_rating?: number | null,
        driver_mobile_number?: string | null,
        driver_car_model?: string | null,
        driver_car_make?: string | null,
        driver_car_color?: string | null,
        driver_car_plate_number?: string | null,
        sub_total?: number | null,
        redeem_points?: number | null,
        service_fee?: number | null,
        delivery_fee?: number | null,
        delivery_discount?: number | null,
        sum_total?: number | null,
        userID?: string | null,
        storeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        tripsDriverId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TripCarts?:  {
      __typename: "ModelTripCartConnection",
      items:  Array< {
        __typename: "TripCart",
        id: string,
        expiry_date: string,
        name: string,
        image: string,
        quantity: number,
        price: number,
        description?: string | null,
        storeID: string,
        userID: string,
        tripsID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnCreateDriverSubscription = {
  onCreateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    rating?: number | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    verificationStatus?: DriverRegistrationStatus | null,
    onlineStatus?: boolean | null,
    Cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        model: string,
        make: string,
        year: number,
        plate_number: string,
        color: string,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    DriverWallets?:  {
      __typename: "ModelDriverWalletConnection",
      items:  Array< {
        __typename: "DriverWallet",
        id: string,
        amount: number,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LicenseDocuments?:  {
      __typename: "ModelLicenseDocumentConnection",
      items:  Array< {
        __typename: "LicenseDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    RegistrationDocuments?:  {
      __typename: "ModelRegistrationDocumentConnection",
      items:  Array< {
        __typename: "RegistrationDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    InsuranceDocuments?:  {
      __typename: "ModelInsuranceDocumentConnection",
      items:  Array< {
        __typename: "InsuranceDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnUpdateDriverSubscription = {
  onUpdateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    rating?: number | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    verificationStatus?: DriverRegistrationStatus | null,
    onlineStatus?: boolean | null,
    Cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        model: string,
        make: string,
        year: number,
        plate_number: string,
        color: string,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    DriverWallets?:  {
      __typename: "ModelDriverWalletConnection",
      items:  Array< {
        __typename: "DriverWallet",
        id: string,
        amount: number,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LicenseDocuments?:  {
      __typename: "ModelLicenseDocumentConnection",
      items:  Array< {
        __typename: "LicenseDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    RegistrationDocuments?:  {
      __typename: "ModelRegistrationDocumentConnection",
      items:  Array< {
        __typename: "RegistrationDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    InsuranceDocuments?:  {
      __typename: "ModelInsuranceDocumentConnection",
      items:  Array< {
        __typename: "InsuranceDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnDeleteDriverSubscription = {
  onDeleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    image?: string | null,
    phone_number?: string | null,
    rating?: number | null,
    inviteCode?: string | null,
    lng?: string | null,
    lat?: string | null,
    verificationStatus?: DriverRegistrationStatus | null,
    onlineStatus?: boolean | null,
    Cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        model: string,
        make: string,
        year: number,
        plate_number: string,
        color: string,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      items:  Array< {
        __typename: "Rating",
        id: string,
        rating?: number | null,
        comment?: string | null,
        driver_image?: string | null,
        driver_name?: string | null,
        customer_name?: string | null,
        customer_image?: string | null,
        tripsID: string,
        driverID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    DriverWallets?:  {
      __typename: "ModelDriverWalletConnection",
      items:  Array< {
        __typename: "DriverWallet",
        id: string,
        amount: number,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LicenseDocuments?:  {
      __typename: "ModelLicenseDocumentConnection",
      items:  Array< {
        __typename: "LicenseDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    RegistrationDocuments?:  {
      __typename: "ModelRegistrationDocumentConnection",
      items:  Array< {
        __typename: "RegistrationDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    InsuranceDocuments?:  {
      __typename: "ModelInsuranceDocumentConnection",
      items:  Array< {
        __typename: "InsuranceDocument",
        id: string,
        image?: string | null,
        name?: string | null,
        expiry_date?: string | null,
        driverID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    fcmToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLicenseDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionLicenseDocumentFilterInput | null,
};

export type OnCreateLicenseDocumentSubscription = {
  onCreateLicenseDocument?:  {
    __typename: "LicenseDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLicenseDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionLicenseDocumentFilterInput | null,
};

export type OnUpdateLicenseDocumentSubscription = {
  onUpdateLicenseDocument?:  {
    __typename: "LicenseDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLicenseDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionLicenseDocumentFilterInput | null,
};

export type OnDeleteLicenseDocumentSubscription = {
  onDeleteLicenseDocument?:  {
    __typename: "LicenseDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRegistrationDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationDocumentFilterInput | null,
};

export type OnCreateRegistrationDocumentSubscription = {
  onCreateRegistrationDocument?:  {
    __typename: "RegistrationDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRegistrationDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationDocumentFilterInput | null,
};

export type OnUpdateRegistrationDocumentSubscription = {
  onUpdateRegistrationDocument?:  {
    __typename: "RegistrationDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRegistrationDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationDocumentFilterInput | null,
};

export type OnDeleteRegistrationDocumentSubscription = {
  onDeleteRegistrationDocument?:  {
    __typename: "RegistrationDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateInsuranceDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceDocumentFilterInput | null,
};

export type OnCreateInsuranceDocumentSubscription = {
  onCreateInsuranceDocument?:  {
    __typename: "InsuranceDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateInsuranceDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceDocumentFilterInput | null,
};

export type OnUpdateInsuranceDocumentSubscription = {
  onUpdateInsuranceDocument?:  {
    __typename: "InsuranceDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteInsuranceDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceDocumentFilterInput | null,
};

export type OnDeleteInsuranceDocumentSubscription = {
  onDeleteInsuranceDocument?:  {
    __typename: "InsuranceDocument",
    id: string,
    image?: string | null,
    name?: string | null,
    expiry_date?: string | null,
    driverID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSystemNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionSystemNotificationFilterInput | null,
};

export type OnCreateSystemNotificationSubscription = {
  onCreateSystemNotification?:  {
    __typename: "SystemNotification",
    id: string,
    title?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSystemNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionSystemNotificationFilterInput | null,
};

export type OnUpdateSystemNotificationSubscription = {
  onUpdateSystemNotification?:  {
    __typename: "SystemNotification",
    id: string,
    title?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSystemNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionSystemNotificationFilterInput | null,
};

export type OnDeleteSystemNotificationSubscription = {
  onDeleteSystemNotification?:  {
    __typename: "SystemNotification",
    id: string,
    title?: string | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDriverSystemNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionDriverSystemNotificationFilterInput | null,
};

export type OnCreateDriverSystemNotificationSubscription = {
  onCreateDriverSystemNotification?:  {
    __typename: "DriverSystemNotification",
    id: string,
    title: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDriverSystemNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionDriverSystemNotificationFilterInput | null,
};

export type OnUpdateDriverSystemNotificationSubscription = {
  onUpdateDriverSystemNotification?:  {
    __typename: "DriverSystemNotification",
    id: string,
    title: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDriverSystemNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionDriverSystemNotificationFilterInput | null,
};

export type OnDeleteDriverSystemNotificationSubscription = {
  onDeleteDriverSystemNotification?:  {
    __typename: "DriverSystemNotification",
    id: string,
    title: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

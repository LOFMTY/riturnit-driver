import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum TripStatus {
  NEW = "NEW",
  ACCEPTED = "ACCEPTED",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED"
}

export enum DriverRegistrationStatus {
  NEW = "NEW",
  COMPLETE = "COMPLETE",
  REJECTED = "REJECTED"
}



type EagerPaymentIntent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentIntent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientSecret: string;
  readonly ephemeralKey: string;
  readonly customer: string;
  readonly setupIntent: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPaymentIntent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentIntent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientSecret: string;
  readonly ephemeralKey: string;
  readonly customer: string;
  readonly setupIntent: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PaymentIntent = LazyLoading extends LazyLoadingDisabled ? EagerPaymentIntent : LazyPaymentIntent

export declare const PaymentIntent: (new (init: ModelInit<PaymentIntent>) => PaymentIntent) & {
  copyOf(source: PaymentIntent, mutator: (draft: MutableModel<PaymentIntent>) => MutableModel<PaymentIntent> | void): PaymentIntent;
}

type EagerStripeIdentitySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StripeIdentitySession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ephemeralKeySecret: string;
  readonly verificationSessionId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStripeIdentitySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StripeIdentitySession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ephemeralKeySecret: string;
  readonly verificationSessionId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StripeIdentitySession = LazyLoading extends LazyLoadingDisabled ? EagerStripeIdentitySession : LazyStripeIdentitySession

export declare const StripeIdentitySession: (new (init: ModelInit<StripeIdentitySession>) => StripeIdentitySession) & {
  copyOf(source: StripeIdentitySession, mutator: (draft: MutableModel<StripeIdentitySession>) => MutableModel<StripeIdentitySession> | void): StripeIdentitySession;
}

type EagerRiturnitFees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitFees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rideBasePay: number;
  readonly serviceFee: number;
  readonly discountFee: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRiturnitFees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitFees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rideBasePay: number;
  readonly serviceFee: number;
  readonly discountFee: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RiturnitFees = LazyLoading extends LazyLoadingDisabled ? EagerRiturnitFees : LazyRiturnitFees

export declare const RiturnitFees: (new (init: ModelInit<RiturnitFees>) => RiturnitFees) & {
  copyOf(source: RiturnitFees, mutator: (draft: MutableModel<RiturnitFees>) => MutableModel<RiturnitFees> | void): RiturnitFees;
}

type EagerRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating?: number | null;
  readonly comment?: string | null;
  readonly driver_image?: string | null;
  readonly driver_name?: string | null;
  readonly customer_name?: string | null;
  readonly customer_image?: string | null;
  readonly tripsID: string;
  readonly driverID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating?: number | null;
  readonly comment?: string | null;
  readonly driver_image?: string | null;
  readonly driver_name?: string | null;
  readonly customer_name?: string | null;
  readonly customer_image?: string | null;
  readonly tripsID: string;
  readonly driverID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rating = LazyLoading extends LazyLoadingDisabled ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating>) => Rating) & {
  copyOf(source: Rating, mutator: (draft: MutableModel<Rating>) => MutableModel<Rating> | void): Rating;
}

type EagerRiturnitContactUs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitContactUs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contactUsImage: string;
  readonly introDescription: string;
  readonly BuildingNumber: string;
  readonly StreetName: string;
  readonly CityName: string;
  readonly AreaOrState: string;
  readonly PostalCode: number;
  readonly ContactNumber: string;
  readonly EmailAddress: string;
  readonly FacebookURL?: string | null;
  readonly TikTok?: string | null;
  readonly Twitter?: string | null;
  readonly Instagram?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRiturnitContactUs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitContactUs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contactUsImage: string;
  readonly introDescription: string;
  readonly BuildingNumber: string;
  readonly StreetName: string;
  readonly CityName: string;
  readonly AreaOrState: string;
  readonly PostalCode: number;
  readonly ContactNumber: string;
  readonly EmailAddress: string;
  readonly FacebookURL?: string | null;
  readonly TikTok?: string | null;
  readonly Twitter?: string | null;
  readonly Instagram?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RiturnitContactUs = LazyLoading extends LazyLoadingDisabled ? EagerRiturnitContactUs : LazyRiturnitContactUs

export declare const RiturnitContactUs: (new (init: ModelInit<RiturnitContactUs>) => RiturnitContactUs) & {
  copyOf(source: RiturnitContactUs, mutator: (draft: MutableModel<RiturnitContactUs>) => MutableModel<RiturnitContactUs> | void): RiturnitContactUs;
}

type EagerRiturnitPoint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitPoint, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRiturnitPoint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitPoint, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RiturnitPoint = LazyLoading extends LazyLoadingDisabled ? EagerRiturnitPoint : LazyRiturnitPoint

export declare const RiturnitPoint: (new (init: ModelInit<RiturnitPoint>) => RiturnitPoint) & {
  copyOf(source: RiturnitPoint, mutator: (draft: MutableModel<RiturnitPoint>) => MutableModel<RiturnitPoint> | void): RiturnitPoint;
}

type EagerRiturnitCancelTripReason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitCancelTripReason, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRiturnitCancelTripReason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RiturnitCancelTripReason, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RiturnitCancelTripReason = LazyLoading extends LazyLoadingDisabled ? EagerRiturnitCancelTripReason : LazyRiturnitCancelTripReason

export declare const RiturnitCancelTripReason: (new (init: ModelInit<RiturnitCancelTripReason>) => RiturnitCancelTripReason) & {
  copyOf(source: RiturnitCancelTripReason, mutator: (draft: MutableModel<RiturnitCancelTripReason>) => MutableModel<RiturnitCancelTripReason> | void): RiturnitCancelTripReason;
}

type EagerPoints = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Points, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly store_name: string;
  readonly store_image?: string | null;
  readonly userID: string;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPoints = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Points, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly store_name: string;
  readonly store_image?: string | null;
  readonly userID: string;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Points = LazyLoading extends LazyLoadingDisabled ? EagerPoints : LazyPoints

export declare const Points: (new (init: ModelInit<Points>) => Points) & {
  copyOf(source: Points, mutator: (draft: MutableModel<Points>) => MutableModel<Points> | void): Points;
}

type EagerCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly model: string;
  readonly make: string;
  readonly year: number;
  readonly plate_number: string;
  readonly color: string;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly model: string;
  readonly make: string;
  readonly year: number;
  readonly plate_number: string;
  readonly color: string;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Car = LazyLoading extends LazyLoadingDisabled ? EagerCar : LazyCar

export declare const Car: (new (init: ModelInit<Car>) => Car) & {
  copyOf(source: Car, mutator: (draft: MutableModel<Car>) => MutableModel<Car> | void): Car;
}

type EagerPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer_name?: string | null;
  readonly email: string;
  readonly address?: string | null;
  readonly phone_number: string;
  readonly total_amount: number;
  readonly payment_method?: string | null;
  readonly payment_status?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer_name?: string | null;
  readonly email: string;
  readonly address?: string | null;
  readonly phone_number: string;
  readonly total_amount: number;
  readonly payment_method?: string | null;
  readonly payment_status?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Payment = LazyLoading extends LazyLoadingDisabled ? EagerPayment : LazyPayment

export declare const Payment: (new (init: ModelInit<Payment>) => Payment) & {
  copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

type EagerDriverWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverWallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriverWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverWallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DriverWallet = LazyLoading extends LazyLoadingDisabled ? EagerDriverWallet : LazyDriverWallet

export declare const DriverWallet: (new (init: ModelInit<DriverWallet>) => DriverWallet) & {
  copyOf(source: DriverWallet, mutator: (draft: MutableModel<DriverWallet>) => MutableModel<DriverWallet> | void): DriverWallet;
}

type EagerReceipt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Receipt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly store_name: string;
  readonly userID: string;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReceipt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Receipt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly store_name: string;
  readonly userID: string;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Receipt = LazyLoading extends LazyLoadingDisabled ? EagerReceipt : LazyReceipt

export declare const Receipt: (new (init: ModelInit<Receipt>) => Receipt) & {
  copyOf(source: Receipt, mutator: (draft: MutableModel<Receipt>) => MutableModel<Receipt> | void): Receipt;
}

type EagerTripCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TripCart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly expiry_date: string;
  readonly name: string;
  readonly image: string;
  readonly quantity: number;
  readonly price: number;
  readonly description?: string | null;
  readonly storeID: string;
  readonly userID: string;
  readonly tripsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTripCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TripCart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly expiry_date: string;
  readonly name: string;
  readonly image: string;
  readonly quantity: number;
  readonly price: number;
  readonly description?: string | null;
  readonly storeID: string;
  readonly userID: string;
  readonly tripsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TripCart = LazyLoading extends LazyLoadingDisabled ? EagerTripCart : LazyTripCart

export declare const TripCart: (new (init: ModelInit<TripCart>) => TripCart) & {
  copyOf(source: TripCart, mutator: (draft: MutableModel<TripCart>) => MutableModel<TripCart> | void): TripCart;
}

type EagerTrips = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trips, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trip_status?: TripStatus | keyof typeof TripStatus | null;
  readonly pickup_lat?: string | null;
  readonly pickup_lng?: string | null;
  readonly dropoff_lat?: string | null;
  readonly dropoff_lng?: string | null;
  readonly pickup_location_description?: string | null;
  readonly dropoff_location_description?: string | null;
  readonly trip_cost?: number | null;
  readonly TotalQtyItems?: number | null;
  readonly receipt?: string | null;
  readonly duration?: number | null;
  readonly distance?: number | null;
  readonly store_name?: string | null;
  readonly store_image?: string | null;
  readonly user_name?: string | null;
  readonly user_photo?: string | null;
  readonly mobile_number?: string | null;
  readonly driver_name?: string | null;
  readonly driver_photo?: string | null;
  readonly driver_rating?: number | null;
  readonly driver_mobile_number?: string | null;
  readonly driver_car_model?: string | null;
  readonly driver_car_make?: string | null;
  readonly driver_car_color?: string | null;
  readonly driver_car_plate_number?: string | null;
  readonly sub_total?: number | null;
  readonly redeem_points?: number | null;
  readonly service_fee?: number | null;
  readonly delivery_fee?: number | null;
  readonly delivery_discount?: number | null;
  readonly sum_total?: number | null;
  readonly Driver?: Driver | null;
  readonly userID?: string | null;
  readonly storeID: string;
  readonly TripCarts?: (TripCart | null)[] | null;
  readonly Ratings?: (Rating | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tripsDriverId?: string | null;
}

type LazyTrips = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trips, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trip_status?: TripStatus | keyof typeof TripStatus | null;
  readonly pickup_lat?: string | null;
  readonly pickup_lng?: string | null;
  readonly dropoff_lat?: string | null;
  readonly dropoff_lng?: string | null;
  readonly pickup_location_description?: string | null;
  readonly dropoff_location_description?: string | null;
  readonly trip_cost?: number | null;
  readonly TotalQtyItems?: number | null;
  readonly receipt?: string | null;
  readonly duration?: number | null;
  readonly distance?: number | null;
  readonly store_name?: string | null;
  readonly store_image?: string | null;
  readonly user_name?: string | null;
  readonly user_photo?: string | null;
  readonly mobile_number?: string | null;
  readonly driver_name?: string | null;
  readonly driver_photo?: string | null;
  readonly driver_rating?: number | null;
  readonly driver_mobile_number?: string | null;
  readonly driver_car_model?: string | null;
  readonly driver_car_make?: string | null;
  readonly driver_car_color?: string | null;
  readonly driver_car_plate_number?: string | null;
  readonly sub_total?: number | null;
  readonly redeem_points?: number | null;
  readonly service_fee?: number | null;
  readonly delivery_fee?: number | null;
  readonly delivery_discount?: number | null;
  readonly sum_total?: number | null;
  readonly Driver: AsyncItem<Driver | undefined>;
  readonly userID?: string | null;
  readonly storeID: string;
  readonly TripCarts: AsyncCollection<TripCart>;
  readonly Ratings: AsyncCollection<Rating>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tripsDriverId?: string | null;
}

export declare type Trips = LazyLoading extends LazyLoadingDisabled ? EagerTrips : LazyTrips

export declare const Trips: (new (init: ModelInit<Trips>) => Trips) & {
  copyOf(source: Trips, mutator: (draft: MutableModel<Trips>) => MutableModel<Trips> | void): Trips;
}

type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly description?: string | null;
  readonly expiryDays: number;
  readonly Points?: (Points | null)[] | null;
  readonly Products?: (Product | null)[] | null;
  readonly Receipts?: (Receipt | null)[] | null;
  readonly TripCarts?: (TripCart | null)[] | null;
  readonly Trips?: (Trips | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly description?: string | null;
  readonly expiryDays: number;
  readonly Points: AsyncCollection<Points>;
  readonly Products: AsyncCollection<Product>;
  readonly Receipts: AsyncCollection<Receipt>;
  readonly TripCarts: AsyncCollection<TripCart>;
  readonly Trips: AsyncCollection<Trips>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly quantity: number;
  readonly price: number;
  readonly description?: string | null;
  readonly expiry_date: string;
  readonly userID: string;
  readonly storeID: string;
  readonly User?: User | null;
  readonly Store?: Store | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly quantity: number;
  readonly price: number;
  readonly description?: string | null;
  readonly expiry_date: string;
  readonly userID: string;
  readonly storeID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Store: AsyncItem<Store | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;
  readonly phone_number?: string | null;
  readonly home_address?: string | null;
  readonly work_address?: string | null;
  readonly inviteCode?: string | null;
  readonly lng?: string | null;
  readonly lat?: string | null;
  readonly Ratings?: (Rating | null)[] | null;
  readonly Receipts?: (Receipt | null)[] | null;
  readonly Payments?: (Payment | null)[] | null;
  readonly Products?: (Product | null)[] | null;
  readonly Points?: (Points | null)[] | null;
  readonly Trips?: (Trips | null)[] | null;
  readonly TripCarts?: (TripCart | null)[] | null;
  readonly fcmToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;
  readonly phone_number?: string | null;
  readonly home_address?: string | null;
  readonly work_address?: string | null;
  readonly inviteCode?: string | null;
  readonly lng?: string | null;
  readonly lat?: string | null;
  readonly Ratings: AsyncCollection<Rating>;
  readonly Receipts: AsyncCollection<Receipt>;
  readonly Payments: AsyncCollection<Payment>;
  readonly Products: AsyncCollection<Product>;
  readonly Points: AsyncCollection<Points>;
  readonly Trips: AsyncCollection<Trips>;
  readonly TripCarts: AsyncCollection<TripCart>;
  readonly fcmToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerDriver = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Driver, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;
  readonly phone_number?: string | null;
  readonly rating?: number | null;
  readonly inviteCode?: string | null;
  readonly lng?: string | null;
  readonly lat?: string | null;
  readonly verificationStatus?: DriverRegistrationStatus | keyof typeof DriverRegistrationStatus | null;
  readonly onlineStatus?: boolean | null;
  readonly Cars?: (Car | null)[] | null;
  readonly Ratings?: (Rating | null)[] | null;
  readonly DriverWallets?: (DriverWallet | null)[] | null;
  readonly LicenseDocuments?: (LicenseDocument | null)[] | null;
  readonly RegistrationDocuments?: (RegistrationDocument | null)[] | null;
  readonly InsuranceDocuments?: (InsuranceDocument | null)[] | null;
  readonly fcmToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriver = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Driver, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;
  readonly phone_number?: string | null;
  readonly rating?: number | null;
  readonly inviteCode?: string | null;
  readonly lng?: string | null;
  readonly lat?: string | null;
  readonly verificationStatus?: DriverRegistrationStatus | keyof typeof DriverRegistrationStatus | null;
  readonly onlineStatus?: boolean | null;
  readonly Cars: AsyncCollection<Car>;
  readonly Ratings: AsyncCollection<Rating>;
  readonly DriverWallets: AsyncCollection<DriverWallet>;
  readonly LicenseDocuments: AsyncCollection<LicenseDocument>;
  readonly RegistrationDocuments: AsyncCollection<RegistrationDocument>;
  readonly InsuranceDocuments: AsyncCollection<InsuranceDocument>;
  readonly fcmToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Driver = LazyLoading extends LazyLoadingDisabled ? EagerDriver : LazyDriver

export declare const Driver: (new (init: ModelInit<Driver>) => Driver) & {
  copyOf(source: Driver, mutator: (draft: MutableModel<Driver>) => MutableModel<Driver> | void): Driver;
}

type EagerLicenseDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LicenseDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name?: string | null;
  readonly expiry_date?: string | null;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLicenseDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LicenseDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name?: string | null;
  readonly expiry_date?: string | null;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LicenseDocument = LazyLoading extends LazyLoadingDisabled ? EagerLicenseDocument : LazyLicenseDocument

export declare const LicenseDocument: (new (init: ModelInit<LicenseDocument>) => LicenseDocument) & {
  copyOf(source: LicenseDocument, mutator: (draft: MutableModel<LicenseDocument>) => MutableModel<LicenseDocument> | void): LicenseDocument;
}

type EagerRegistrationDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RegistrationDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name?: string | null;
  readonly expiry_date?: string | null;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRegistrationDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RegistrationDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name?: string | null;
  readonly expiry_date?: string | null;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RegistrationDocument = LazyLoading extends LazyLoadingDisabled ? EagerRegistrationDocument : LazyRegistrationDocument

export declare const RegistrationDocument: (new (init: ModelInit<RegistrationDocument>) => RegistrationDocument) & {
  copyOf(source: RegistrationDocument, mutator: (draft: MutableModel<RegistrationDocument>) => MutableModel<RegistrationDocument> | void): RegistrationDocument;
}

type EagerInsuranceDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InsuranceDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name?: string | null;
  readonly expiry_date?: string | null;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInsuranceDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InsuranceDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name?: string | null;
  readonly expiry_date?: string | null;
  readonly driverID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InsuranceDocument = LazyLoading extends LazyLoadingDisabled ? EagerInsuranceDocument : LazyInsuranceDocument

export declare const InsuranceDocument: (new (init: ModelInit<InsuranceDocument>) => InsuranceDocument) & {
  copyOf(source: InsuranceDocument, mutator: (draft: MutableModel<InsuranceDocument>) => MutableModel<InsuranceDocument> | void): InsuranceDocument;
}

type EagerSystemNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SystemNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySystemNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SystemNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SystemNotification = LazyLoading extends LazyLoadingDisabled ? EagerSystemNotification : LazySystemNotification

export declare const SystemNotification: (new (init: ModelInit<SystemNotification>) => SystemNotification) & {
  copyOf(source: SystemNotification, mutator: (draft: MutableModel<SystemNotification>) => MutableModel<SystemNotification> | void): SystemNotification;
}

type EagerDriverSystemNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverSystemNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriverSystemNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverSystemNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DriverSystemNotification = LazyLoading extends LazyLoadingDisabled ? EagerDriverSystemNotification : LazyDriverSystemNotification

export declare const DriverSystemNotification: (new (init: ModelInit<DriverSystemNotification>) => DriverSystemNotification) & {
  copyOf(source: DriverSystemNotification, mutator: (draft: MutableModel<DriverSystemNotification>) => MutableModel<DriverSystemNotification> | void): DriverSystemNotification;
}
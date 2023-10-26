/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePaymentIntent = /* GraphQL */ `
  subscription OnCreatePaymentIntent(
    $filter: ModelSubscriptionPaymentIntentFilterInput
  ) {
    onCreatePaymentIntent(filter: $filter) {
      clientSecret
      ephemeralKey
      customer
      setupIntent
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePaymentIntent = /* GraphQL */ `
  subscription OnUpdatePaymentIntent(
    $filter: ModelSubscriptionPaymentIntentFilterInput
  ) {
    onUpdatePaymentIntent(filter: $filter) {
      clientSecret
      ephemeralKey
      customer
      setupIntent
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePaymentIntent = /* GraphQL */ `
  subscription OnDeletePaymentIntent(
    $filter: ModelSubscriptionPaymentIntentFilterInput
  ) {
    onDeletePaymentIntent(filter: $filter) {
      clientSecret
      ephemeralKey
      customer
      setupIntent
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateStripeIdentitySession = /* GraphQL */ `
  subscription OnCreateStripeIdentitySession(
    $filter: ModelSubscriptionStripeIdentitySessionFilterInput
  ) {
    onCreateStripeIdentitySession(filter: $filter) {
      ephemeralKeySecret
      verificationSessionId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStripeIdentitySession = /* GraphQL */ `
  subscription OnUpdateStripeIdentitySession(
    $filter: ModelSubscriptionStripeIdentitySessionFilterInput
  ) {
    onUpdateStripeIdentitySession(filter: $filter) {
      ephemeralKeySecret
      verificationSessionId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStripeIdentitySession = /* GraphQL */ `
  subscription OnDeleteStripeIdentitySession(
    $filter: ModelSubscriptionStripeIdentitySessionFilterInput
  ) {
    onDeleteStripeIdentitySession(filter: $filter) {
      ephemeralKeySecret
      verificationSessionId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRiturnitFees = /* GraphQL */ `
  subscription OnCreateRiturnitFees(
    $filter: ModelSubscriptionRiturnitFeesFilterInput
  ) {
    onCreateRiturnitFees(filter: $filter) {
      id
      rideBasePay
      serviceFee
      discountFee
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRiturnitFees = /* GraphQL */ `
  subscription OnUpdateRiturnitFees(
    $filter: ModelSubscriptionRiturnitFeesFilterInput
  ) {
    onUpdateRiturnitFees(filter: $filter) {
      id
      rideBasePay
      serviceFee
      discountFee
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRiturnitFees = /* GraphQL */ `
  subscription OnDeleteRiturnitFees(
    $filter: ModelSubscriptionRiturnitFeesFilterInput
  ) {
    onDeleteRiturnitFees(filter: $filter) {
      id
      rideBasePay
      serviceFee
      discountFee
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($filter: ModelSubscriptionRatingFilterInput) {
    onCreateRating(filter: $filter) {
      id
      rating
      comment
      driver_image
      driver_name
      customer_name
      customer_image
      tripsID
      driverID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($filter: ModelSubscriptionRatingFilterInput) {
    onUpdateRating(filter: $filter) {
      id
      rating
      comment
      driver_image
      driver_name
      customer_name
      customer_image
      tripsID
      driverID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($filter: ModelSubscriptionRatingFilterInput) {
    onDeleteRating(filter: $filter) {
      id
      rating
      comment
      driver_image
      driver_name
      customer_name
      customer_image
      tripsID
      driverID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRiturnitContactUs = /* GraphQL */ `
  subscription OnCreateRiturnitContactUs(
    $filter: ModelSubscriptionRiturnitContactUsFilterInput
  ) {
    onCreateRiturnitContactUs(filter: $filter) {
      id
      contactUsImage
      introDescription
      BuildingNumber
      StreetName
      CityName
      AreaOrState
      PostalCode
      ContactNumber
      EmailAddress
      FacebookURL
      TikTok
      Twitter
      Instagram
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRiturnitContactUs = /* GraphQL */ `
  subscription OnUpdateRiturnitContactUs(
    $filter: ModelSubscriptionRiturnitContactUsFilterInput
  ) {
    onUpdateRiturnitContactUs(filter: $filter) {
      id
      contactUsImage
      introDescription
      BuildingNumber
      StreetName
      CityName
      AreaOrState
      PostalCode
      ContactNumber
      EmailAddress
      FacebookURL
      TikTok
      Twitter
      Instagram
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRiturnitContactUs = /* GraphQL */ `
  subscription OnDeleteRiturnitContactUs(
    $filter: ModelSubscriptionRiturnitContactUsFilterInput
  ) {
    onDeleteRiturnitContactUs(filter: $filter) {
      id
      contactUsImage
      introDescription
      BuildingNumber
      StreetName
      CityName
      AreaOrState
      PostalCode
      ContactNumber
      EmailAddress
      FacebookURL
      TikTok
      Twitter
      Instagram
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRiturnitPoint = /* GraphQL */ `
  subscription OnCreateRiturnitPoint(
    $filter: ModelSubscriptionRiturnitPointFilterInput
  ) {
    onCreateRiturnitPoint(filter: $filter) {
      id
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRiturnitPoint = /* GraphQL */ `
  subscription OnUpdateRiturnitPoint(
    $filter: ModelSubscriptionRiturnitPointFilterInput
  ) {
    onUpdateRiturnitPoint(filter: $filter) {
      id
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRiturnitPoint = /* GraphQL */ `
  subscription OnDeleteRiturnitPoint(
    $filter: ModelSubscriptionRiturnitPointFilterInput
  ) {
    onDeleteRiturnitPoint(filter: $filter) {
      id
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRiturnitCancelTripReason = /* GraphQL */ `
  subscription OnCreateRiturnitCancelTripReason(
    $filter: ModelSubscriptionRiturnitCancelTripReasonFilterInput
  ) {
    onCreateRiturnitCancelTripReason(filter: $filter) {
      id
      label
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRiturnitCancelTripReason = /* GraphQL */ `
  subscription OnUpdateRiturnitCancelTripReason(
    $filter: ModelSubscriptionRiturnitCancelTripReasonFilterInput
  ) {
    onUpdateRiturnitCancelTripReason(filter: $filter) {
      id
      label
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRiturnitCancelTripReason = /* GraphQL */ `
  subscription OnDeleteRiturnitCancelTripReason(
    $filter: ModelSubscriptionRiturnitCancelTripReasonFilterInput
  ) {
    onDeleteRiturnitCancelTripReason(filter: $filter) {
      id
      label
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePoints = /* GraphQL */ `
  subscription OnCreatePoints($filter: ModelSubscriptionPointsFilterInput) {
    onCreatePoints(filter: $filter) {
      id
      amount
      store_name
      store_image
      userID
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePoints = /* GraphQL */ `
  subscription OnUpdatePoints($filter: ModelSubscriptionPointsFilterInput) {
    onUpdatePoints(filter: $filter) {
      id
      amount
      store_name
      store_image
      userID
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePoints = /* GraphQL */ `
  subscription OnDeletePoints($filter: ModelSubscriptionPointsFilterInput) {
    onDeletePoints(filter: $filter) {
      id
      amount
      store_name
      store_image
      userID
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
      id
      model
      make
      year
      plate_number
      color
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
      id
      model
      make
      year
      plate_number
      color
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
      id
      model
      make
      year
      plate_number
      color
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
      id
      customer_name
      email
      address
      phone_number
      total_amount
      payment_method
      payment_status
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
      id
      customer_name
      email
      address
      phone_number
      total_amount
      payment_method
      payment_status
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
      id
      customer_name
      email
      address
      phone_number
      total_amount
      payment_method
      payment_status
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateDriverWallet = /* GraphQL */ `
  subscription OnCreateDriverWallet(
    $filter: ModelSubscriptionDriverWalletFilterInput
  ) {
    onCreateDriverWallet(filter: $filter) {
      id
      amount
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateDriverWallet = /* GraphQL */ `
  subscription OnUpdateDriverWallet(
    $filter: ModelSubscriptionDriverWalletFilterInput
  ) {
    onUpdateDriverWallet(filter: $filter) {
      id
      amount
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteDriverWallet = /* GraphQL */ `
  subscription OnDeleteDriverWallet(
    $filter: ModelSubscriptionDriverWalletFilterInput
  ) {
    onDeleteDriverWallet(filter: $filter) {
      id
      amount
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateReceipt = /* GraphQL */ `
  subscription OnCreateReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onCreateReceipt(filter: $filter) {
      id
      image
      store_name
      userID
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateReceipt = /* GraphQL */ `
  subscription OnUpdateReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onUpdateReceipt(filter: $filter) {
      id
      image
      store_name
      userID
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteReceipt = /* GraphQL */ `
  subscription OnDeleteReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onDeleteReceipt(filter: $filter) {
      id
      image
      store_name
      userID
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateTripCart = /* GraphQL */ `
  subscription OnCreateTripCart($filter: ModelSubscriptionTripCartFilterInput) {
    onCreateTripCart(filter: $filter) {
      id
      expiry_date
      name
      image
      quantity
      price
      description
      storeID
      userID
      tripsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateTripCart = /* GraphQL */ `
  subscription OnUpdateTripCart($filter: ModelSubscriptionTripCartFilterInput) {
    onUpdateTripCart(filter: $filter) {
      id
      expiry_date
      name
      image
      quantity
      price
      description
      storeID
      userID
      tripsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteTripCart = /* GraphQL */ `
  subscription OnDeleteTripCart($filter: ModelSubscriptionTripCartFilterInput) {
    onDeleteTripCart(filter: $filter) {
      id
      expiry_date
      name
      image
      quantity
      price
      description
      storeID
      userID
      tripsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateTrips = /* GraphQL */ `
  subscription OnCreateTrips($filter: ModelSubscriptionTripsFilterInput) {
    onCreateTrips(filter: $filter) {
      id
      trip_status
      pickup_lat
      pickup_lng
      dropoff_lat
      dropoff_lng
      pickup_location_description
      dropoff_location_description
      trip_cost
      TotalQtyItems
      receipt
      duration
      distance
      store_name
      store_image
      user_name
      user_photo
      mobile_number
      driver_name
      driver_photo
      driver_rating
      driver_mobile_number
      driver_car_model
      driver_car_make
      driver_car_color
      driver_car_plate_number
      sub_total
      redeem_points
      service_fee
      delivery_fee
      delivery_discount
      sum_total
      Driver {
        id
        name
        email
        image
        phone_number
        rating
        inviteCode
        lng
        lat
        verificationStatus
        onlineStatus
        Cars {
          nextToken
          startedAt
          __typename
        }
        Ratings {
          nextToken
          startedAt
          __typename
        }
        DriverWallets {
          nextToken
          startedAt
          __typename
        }
        LicenseDocuments {
          nextToken
          startedAt
          __typename
        }
        RegistrationDocuments {
          nextToken
          startedAt
          __typename
        }
        InsuranceDocuments {
          nextToken
          startedAt
          __typename
        }
        fcmToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      storeID
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tripsDriverId
      __typename
    }
  }
`;
export const onUpdateTrips = /* GraphQL */ `
  subscription OnUpdateTrips($filter: ModelSubscriptionTripsFilterInput) {
    onUpdateTrips(filter: $filter) {
      id
      trip_status
      pickup_lat
      pickup_lng
      dropoff_lat
      dropoff_lng
      pickup_location_description
      dropoff_location_description
      trip_cost
      TotalQtyItems
      receipt
      duration
      distance
      store_name
      store_image
      user_name
      user_photo
      mobile_number
      driver_name
      driver_photo
      driver_rating
      driver_mobile_number
      driver_car_model
      driver_car_make
      driver_car_color
      driver_car_plate_number
      sub_total
      redeem_points
      service_fee
      delivery_fee
      delivery_discount
      sum_total
      Driver {
        id
        name
        email
        image
        phone_number
        rating
        inviteCode
        lng
        lat
        verificationStatus
        onlineStatus
        Cars {
          nextToken
          startedAt
          __typename
        }
        Ratings {
          nextToken
          startedAt
          __typename
        }
        DriverWallets {
          nextToken
          startedAt
          __typename
        }
        LicenseDocuments {
          nextToken
          startedAt
          __typename
        }
        RegistrationDocuments {
          nextToken
          startedAt
          __typename
        }
        InsuranceDocuments {
          nextToken
          startedAt
          __typename
        }
        fcmToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      storeID
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tripsDriverId
      __typename
    }
  }
`;
export const onDeleteTrips = /* GraphQL */ `
  subscription OnDeleteTrips($filter: ModelSubscriptionTripsFilterInput) {
    onDeleteTrips(filter: $filter) {
      id
      trip_status
      pickup_lat
      pickup_lng
      dropoff_lat
      dropoff_lng
      pickup_location_description
      dropoff_location_description
      trip_cost
      TotalQtyItems
      receipt
      duration
      distance
      store_name
      store_image
      user_name
      user_photo
      mobile_number
      driver_name
      driver_photo
      driver_rating
      driver_mobile_number
      driver_car_model
      driver_car_make
      driver_car_color
      driver_car_plate_number
      sub_total
      redeem_points
      service_fee
      delivery_fee
      delivery_discount
      sum_total
      Driver {
        id
        name
        email
        image
        phone_number
        rating
        inviteCode
        lng
        lat
        verificationStatus
        onlineStatus
        Cars {
          nextToken
          startedAt
          __typename
        }
        Ratings {
          nextToken
          startedAt
          __typename
        }
        DriverWallets {
          nextToken
          startedAt
          __typename
        }
        LicenseDocuments {
          nextToken
          startedAt
          __typename
        }
        RegistrationDocuments {
          nextToken
          startedAt
          __typename
        }
        InsuranceDocuments {
          nextToken
          startedAt
          __typename
        }
        fcmToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      storeID
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tripsDriverId
      __typename
    }
  }
`;
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
      id
      name
      image
      description
      expiryDays
      Points {
        items {
          id
          amount
          store_name
          store_image
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Products {
        items {
          id
          name
          image
          quantity
          price
          description
          expiry_date
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Receipts {
        items {
          id
          image
          store_name
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Trips {
        items {
          id
          trip_status
          pickup_lat
          pickup_lng
          dropoff_lat
          dropoff_lng
          pickup_location_description
          dropoff_location_description
          trip_cost
          TotalQtyItems
          receipt
          duration
          distance
          store_name
          store_image
          user_name
          user_photo
          mobile_number
          driver_name
          driver_photo
          driver_rating
          driver_mobile_number
          driver_car_model
          driver_car_make
          driver_car_color
          driver_car_plate_number
          sub_total
          redeem_points
          service_fee
          delivery_fee
          delivery_discount
          sum_total
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          tripsDriverId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
      id
      name
      image
      description
      expiryDays
      Points {
        items {
          id
          amount
          store_name
          store_image
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Products {
        items {
          id
          name
          image
          quantity
          price
          description
          expiry_date
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Receipts {
        items {
          id
          image
          store_name
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Trips {
        items {
          id
          trip_status
          pickup_lat
          pickup_lng
          dropoff_lat
          dropoff_lng
          pickup_location_description
          dropoff_location_description
          trip_cost
          TotalQtyItems
          receipt
          duration
          distance
          store_name
          store_image
          user_name
          user_photo
          mobile_number
          driver_name
          driver_photo
          driver_rating
          driver_mobile_number
          driver_car_model
          driver_car_make
          driver_car_color
          driver_car_plate_number
          sub_total
          redeem_points
          service_fee
          delivery_fee
          delivery_discount
          sum_total
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          tripsDriverId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
      id
      name
      image
      description
      expiryDays
      Points {
        items {
          id
          amount
          store_name
          store_image
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Products {
        items {
          id
          name
          image
          quantity
          price
          description
          expiry_date
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Receipts {
        items {
          id
          image
          store_name
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Trips {
        items {
          id
          trip_status
          pickup_lat
          pickup_lng
          dropoff_lat
          dropoff_lng
          pickup_location_description
          dropoff_location_description
          trip_cost
          TotalQtyItems
          receipt
          duration
          distance
          store_name
          store_image
          user_name
          user_photo
          mobile_number
          driver_name
          driver_photo
          driver_rating
          driver_mobile_number
          driver_car_model
          driver_car_make
          driver_car_color
          driver_car_plate_number
          sub_total
          redeem_points
          service_fee
          delivery_fee
          delivery_discount
          sum_total
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          tripsDriverId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      image
      quantity
      price
      description
      expiry_date
      userID
      storeID
      User {
        id
        name
        email
        image
        phone_number
        home_address
        work_address
        inviteCode
        lng
        lat
        Ratings {
          nextToken
          startedAt
          __typename
        }
        Receipts {
          nextToken
          startedAt
          __typename
        }
        Payments {
          nextToken
          startedAt
          __typename
        }
        Products {
          nextToken
          startedAt
          __typename
        }
        Points {
          nextToken
          startedAt
          __typename
        }
        Trips {
          nextToken
          startedAt
          __typename
        }
        TripCarts {
          nextToken
          startedAt
          __typename
        }
        fcmToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Store {
        id
        name
        image
        description
        expiryDays
        Points {
          nextToken
          startedAt
          __typename
        }
        Products {
          nextToken
          startedAt
          __typename
        }
        Receipts {
          nextToken
          startedAt
          __typename
        }
        TripCarts {
          nextToken
          startedAt
          __typename
        }
        Trips {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      image
      quantity
      price
      description
      expiry_date
      userID
      storeID
      User {
        id
        name
        email
        image
        phone_number
        home_address
        work_address
        inviteCode
        lng
        lat
        Ratings {
          nextToken
          startedAt
          __typename
        }
        Receipts {
          nextToken
          startedAt
          __typename
        }
        Payments {
          nextToken
          startedAt
          __typename
        }
        Products {
          nextToken
          startedAt
          __typename
        }
        Points {
          nextToken
          startedAt
          __typename
        }
        Trips {
          nextToken
          startedAt
          __typename
        }
        TripCarts {
          nextToken
          startedAt
          __typename
        }
        fcmToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Store {
        id
        name
        image
        description
        expiryDays
        Points {
          nextToken
          startedAt
          __typename
        }
        Products {
          nextToken
          startedAt
          __typename
        }
        Receipts {
          nextToken
          startedAt
          __typename
        }
        TripCarts {
          nextToken
          startedAt
          __typename
        }
        Trips {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      image
      quantity
      price
      description
      expiry_date
      userID
      storeID
      User {
        id
        name
        email
        image
        phone_number
        home_address
        work_address
        inviteCode
        lng
        lat
        Ratings {
          nextToken
          startedAt
          __typename
        }
        Receipts {
          nextToken
          startedAt
          __typename
        }
        Payments {
          nextToken
          startedAt
          __typename
        }
        Products {
          nextToken
          startedAt
          __typename
        }
        Points {
          nextToken
          startedAt
          __typename
        }
        Trips {
          nextToken
          startedAt
          __typename
        }
        TripCarts {
          nextToken
          startedAt
          __typename
        }
        fcmToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Store {
        id
        name
        image
        description
        expiryDays
        Points {
          nextToken
          startedAt
          __typename
        }
        Products {
          nextToken
          startedAt
          __typename
        }
        Receipts {
          nextToken
          startedAt
          __typename
        }
        TripCarts {
          nextToken
          startedAt
          __typename
        }
        Trips {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      email
      image
      phone_number
      home_address
      work_address
      inviteCode
      lng
      lat
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Receipts {
        items {
          id
          image
          store_name
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Payments {
        items {
          id
          customer_name
          email
          address
          phone_number
          total_amount
          payment_method
          payment_status
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Products {
        items {
          id
          name
          image
          quantity
          price
          description
          expiry_date
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Points {
        items {
          id
          amount
          store_name
          store_image
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Trips {
        items {
          id
          trip_status
          pickup_lat
          pickup_lng
          dropoff_lat
          dropoff_lng
          pickup_location_description
          dropoff_location_description
          trip_cost
          TotalQtyItems
          receipt
          duration
          distance
          store_name
          store_image
          user_name
          user_photo
          mobile_number
          driver_name
          driver_photo
          driver_rating
          driver_mobile_number
          driver_car_model
          driver_car_make
          driver_car_color
          driver_car_plate_number
          sub_total
          redeem_points
          service_fee
          delivery_fee
          delivery_discount
          sum_total
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          tripsDriverId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fcmToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      email
      image
      phone_number
      home_address
      work_address
      inviteCode
      lng
      lat
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Receipts {
        items {
          id
          image
          store_name
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Payments {
        items {
          id
          customer_name
          email
          address
          phone_number
          total_amount
          payment_method
          payment_status
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Products {
        items {
          id
          name
          image
          quantity
          price
          description
          expiry_date
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Points {
        items {
          id
          amount
          store_name
          store_image
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Trips {
        items {
          id
          trip_status
          pickup_lat
          pickup_lng
          dropoff_lat
          dropoff_lng
          pickup_location_description
          dropoff_location_description
          trip_cost
          TotalQtyItems
          receipt
          duration
          distance
          store_name
          store_image
          user_name
          user_photo
          mobile_number
          driver_name
          driver_photo
          driver_rating
          driver_mobile_number
          driver_car_model
          driver_car_make
          driver_car_color
          driver_car_plate_number
          sub_total
          redeem_points
          service_fee
          delivery_fee
          delivery_discount
          sum_total
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          tripsDriverId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fcmToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      email
      image
      phone_number
      home_address
      work_address
      inviteCode
      lng
      lat
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Receipts {
        items {
          id
          image
          store_name
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Payments {
        items {
          id
          customer_name
          email
          address
          phone_number
          total_amount
          payment_method
          payment_status
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Products {
        items {
          id
          name
          image
          quantity
          price
          description
          expiry_date
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Points {
        items {
          id
          amount
          store_name
          store_image
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Trips {
        items {
          id
          trip_status
          pickup_lat
          pickup_lng
          dropoff_lat
          dropoff_lng
          pickup_location_description
          dropoff_location_description
          trip_cost
          TotalQtyItems
          receipt
          duration
          distance
          store_name
          store_image
          user_name
          user_photo
          mobile_number
          driver_name
          driver_photo
          driver_rating
          driver_mobile_number
          driver_car_model
          driver_car_make
          driver_car_color
          driver_car_plate_number
          sub_total
          redeem_points
          service_fee
          delivery_fee
          delivery_discount
          sum_total
          userID
          storeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          tripsDriverId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      TripCarts {
        items {
          id
          expiry_date
          name
          image
          quantity
          price
          description
          storeID
          userID
          tripsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fcmToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onCreateDriver(filter: $filter) {
      id
      name
      email
      image
      phone_number
      rating
      inviteCode
      lng
      lat
      verificationStatus
      onlineStatus
      Cars {
        items {
          id
          model
          make
          year
          plate_number
          color
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DriverWallets {
        items {
          id
          amount
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      LicenseDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      RegistrationDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      InsuranceDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fcmToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
      id
      name
      email
      image
      phone_number
      rating
      inviteCode
      lng
      lat
      verificationStatus
      onlineStatus
      Cars {
        items {
          id
          model
          make
          year
          plate_number
          color
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DriverWallets {
        items {
          id
          amount
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      LicenseDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      RegistrationDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      InsuranceDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fcmToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
      id
      name
      email
      image
      phone_number
      rating
      inviteCode
      lng
      lat
      verificationStatus
      onlineStatus
      Cars {
        items {
          id
          model
          make
          year
          plate_number
          color
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Ratings {
        items {
          id
          rating
          comment
          driver_image
          driver_name
          customer_name
          customer_image
          tripsID
          driverID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DriverWallets {
        items {
          id
          amount
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      LicenseDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      RegistrationDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      InsuranceDocuments {
        items {
          id
          image
          name
          expiry_date
          driverID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fcmToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateLicenseDocument = /* GraphQL */ `
  subscription OnCreateLicenseDocument(
    $filter: ModelSubscriptionLicenseDocumentFilterInput
  ) {
    onCreateLicenseDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateLicenseDocument = /* GraphQL */ `
  subscription OnUpdateLicenseDocument(
    $filter: ModelSubscriptionLicenseDocumentFilterInput
  ) {
    onUpdateLicenseDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteLicenseDocument = /* GraphQL */ `
  subscription OnDeleteLicenseDocument(
    $filter: ModelSubscriptionLicenseDocumentFilterInput
  ) {
    onDeleteLicenseDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRegistrationDocument = /* GraphQL */ `
  subscription OnCreateRegistrationDocument(
    $filter: ModelSubscriptionRegistrationDocumentFilterInput
  ) {
    onCreateRegistrationDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRegistrationDocument = /* GraphQL */ `
  subscription OnUpdateRegistrationDocument(
    $filter: ModelSubscriptionRegistrationDocumentFilterInput
  ) {
    onUpdateRegistrationDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRegistrationDocument = /* GraphQL */ `
  subscription OnDeleteRegistrationDocument(
    $filter: ModelSubscriptionRegistrationDocumentFilterInput
  ) {
    onDeleteRegistrationDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateInsuranceDocument = /* GraphQL */ `
  subscription OnCreateInsuranceDocument(
    $filter: ModelSubscriptionInsuranceDocumentFilterInput
  ) {
    onCreateInsuranceDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateInsuranceDocument = /* GraphQL */ `
  subscription OnUpdateInsuranceDocument(
    $filter: ModelSubscriptionInsuranceDocumentFilterInput
  ) {
    onUpdateInsuranceDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteInsuranceDocument = /* GraphQL */ `
  subscription OnDeleteInsuranceDocument(
    $filter: ModelSubscriptionInsuranceDocumentFilterInput
  ) {
    onDeleteInsuranceDocument(filter: $filter) {
      id
      image
      name
      expiry_date
      driverID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateSystemNotification = /* GraphQL */ `
  subscription OnCreateSystemNotification(
    $filter: ModelSubscriptionSystemNotificationFilterInput
  ) {
    onCreateSystemNotification(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateSystemNotification = /* GraphQL */ `
  subscription OnUpdateSystemNotification(
    $filter: ModelSubscriptionSystemNotificationFilterInput
  ) {
    onUpdateSystemNotification(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteSystemNotification = /* GraphQL */ `
  subscription OnDeleteSystemNotification(
    $filter: ModelSubscriptionSystemNotificationFilterInput
  ) {
    onDeleteSystemNotification(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateDriverSystemNotification = /* GraphQL */ `
  subscription OnCreateDriverSystemNotification(
    $filter: ModelSubscriptionDriverSystemNotificationFilterInput
  ) {
    onCreateDriverSystemNotification(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateDriverSystemNotification = /* GraphQL */ `
  subscription OnUpdateDriverSystemNotification(
    $filter: ModelSubscriptionDriverSystemNotificationFilterInput
  ) {
    onUpdateDriverSystemNotification(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteDriverSystemNotification = /* GraphQL */ `
  subscription OnDeleteDriverSystemNotification(
    $filter: ModelSubscriptionDriverSystemNotificationFilterInput
  ) {
    onDeleteDriverSystemNotification(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

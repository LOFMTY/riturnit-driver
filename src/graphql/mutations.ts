/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const CreateStripePayment = /* GraphQL */ `
  mutation CreateStripePayment(
    $amount: Int!
    $email: String!
    $name: String!
    $phone: String
  ) {
    CreateStripePayment(
      amount: $amount
      email: $email
      name: $name
      phone: $phone
    ) {
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
export const StripeIdentity = /* GraphQL */ `
  mutation StripeIdentity($customerId: ID!) {
    StripeIdentity(customerId: $customerId) {
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
export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent(
    $input: CreatePaymentIntentInput!
    $condition: ModelPaymentIntentConditionInput
  ) {
    createPaymentIntent(input: $input, condition: $condition) {
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
export const updatePaymentIntent = /* GraphQL */ `
  mutation UpdatePaymentIntent(
    $input: UpdatePaymentIntentInput!
    $condition: ModelPaymentIntentConditionInput
  ) {
    updatePaymentIntent(input: $input, condition: $condition) {
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
export const deletePaymentIntent = /* GraphQL */ `
  mutation DeletePaymentIntent(
    $input: DeletePaymentIntentInput!
    $condition: ModelPaymentIntentConditionInput
  ) {
    deletePaymentIntent(input: $input, condition: $condition) {
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
export const createStripeIdentitySession = /* GraphQL */ `
  mutation CreateStripeIdentitySession(
    $input: CreateStripeIdentitySessionInput!
    $condition: ModelStripeIdentitySessionConditionInput
  ) {
    createStripeIdentitySession(input: $input, condition: $condition) {
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
export const updateStripeIdentitySession = /* GraphQL */ `
  mutation UpdateStripeIdentitySession(
    $input: UpdateStripeIdentitySessionInput!
    $condition: ModelStripeIdentitySessionConditionInput
  ) {
    updateStripeIdentitySession(input: $input, condition: $condition) {
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
export const deleteStripeIdentitySession = /* GraphQL */ `
  mutation DeleteStripeIdentitySession(
    $input: DeleteStripeIdentitySessionInput!
    $condition: ModelStripeIdentitySessionConditionInput
  ) {
    deleteStripeIdentitySession(input: $input, condition: $condition) {
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
export const createRiturnitFees = /* GraphQL */ `
  mutation CreateRiturnitFees(
    $input: CreateRiturnitFeesInput!
    $condition: ModelRiturnitFeesConditionInput
  ) {
    createRiturnitFees(input: $input, condition: $condition) {
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
export const updateRiturnitFees = /* GraphQL */ `
  mutation UpdateRiturnitFees(
    $input: UpdateRiturnitFeesInput!
    $condition: ModelRiturnitFeesConditionInput
  ) {
    updateRiturnitFees(input: $input, condition: $condition) {
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
export const deleteRiturnitFees = /* GraphQL */ `
  mutation DeleteRiturnitFees(
    $input: DeleteRiturnitFeesInput!
    $condition: ModelRiturnitFeesConditionInput
  ) {
    deleteRiturnitFees(input: $input, condition: $condition) {
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
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
export const createRiturnitContactUs = /* GraphQL */ `
  mutation CreateRiturnitContactUs(
    $input: CreateRiturnitContactUsInput!
    $condition: ModelRiturnitContactUsConditionInput
  ) {
    createRiturnitContactUs(input: $input, condition: $condition) {
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
export const updateRiturnitContactUs = /* GraphQL */ `
  mutation UpdateRiturnitContactUs(
    $input: UpdateRiturnitContactUsInput!
    $condition: ModelRiturnitContactUsConditionInput
  ) {
    updateRiturnitContactUs(input: $input, condition: $condition) {
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
export const deleteRiturnitContactUs = /* GraphQL */ `
  mutation DeleteRiturnitContactUs(
    $input: DeleteRiturnitContactUsInput!
    $condition: ModelRiturnitContactUsConditionInput
  ) {
    deleteRiturnitContactUs(input: $input, condition: $condition) {
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
export const createRiturnitPoint = /* GraphQL */ `
  mutation CreateRiturnitPoint(
    $input: CreateRiturnitPointInput!
    $condition: ModelRiturnitPointConditionInput
  ) {
    createRiturnitPoint(input: $input, condition: $condition) {
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
export const updateRiturnitPoint = /* GraphQL */ `
  mutation UpdateRiturnitPoint(
    $input: UpdateRiturnitPointInput!
    $condition: ModelRiturnitPointConditionInput
  ) {
    updateRiturnitPoint(input: $input, condition: $condition) {
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
export const deleteRiturnitPoint = /* GraphQL */ `
  mutation DeleteRiturnitPoint(
    $input: DeleteRiturnitPointInput!
    $condition: ModelRiturnitPointConditionInput
  ) {
    deleteRiturnitPoint(input: $input, condition: $condition) {
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
export const createRiturnitCancelTripReason = /* GraphQL */ `
  mutation CreateRiturnitCancelTripReason(
    $input: CreateRiturnitCancelTripReasonInput!
    $condition: ModelRiturnitCancelTripReasonConditionInput
  ) {
    createRiturnitCancelTripReason(input: $input, condition: $condition) {
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
export const updateRiturnitCancelTripReason = /* GraphQL */ `
  mutation UpdateRiturnitCancelTripReason(
    $input: UpdateRiturnitCancelTripReasonInput!
    $condition: ModelRiturnitCancelTripReasonConditionInput
  ) {
    updateRiturnitCancelTripReason(input: $input, condition: $condition) {
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
export const deleteRiturnitCancelTripReason = /* GraphQL */ `
  mutation DeleteRiturnitCancelTripReason(
    $input: DeleteRiturnitCancelTripReasonInput!
    $condition: ModelRiturnitCancelTripReasonConditionInput
  ) {
    deleteRiturnitCancelTripReason(input: $input, condition: $condition) {
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
export const createPoints = /* GraphQL */ `
  mutation CreatePoints(
    $input: CreatePointsInput!
    $condition: ModelPointsConditionInput
  ) {
    createPoints(input: $input, condition: $condition) {
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
export const updatePoints = /* GraphQL */ `
  mutation UpdatePoints(
    $input: UpdatePointsInput!
    $condition: ModelPointsConditionInput
  ) {
    updatePoints(input: $input, condition: $condition) {
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
export const deletePoints = /* GraphQL */ `
  mutation DeletePoints(
    $input: DeletePointsInput!
    $condition: ModelPointsConditionInput
  ) {
    deletePoints(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createDriverWallet = /* GraphQL */ `
  mutation CreateDriverWallet(
    $input: CreateDriverWalletInput!
    $condition: ModelDriverWalletConditionInput
  ) {
    createDriverWallet(input: $input, condition: $condition) {
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
export const updateDriverWallet = /* GraphQL */ `
  mutation UpdateDriverWallet(
    $input: UpdateDriverWalletInput!
    $condition: ModelDriverWalletConditionInput
  ) {
    updateDriverWallet(input: $input, condition: $condition) {
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
export const deleteDriverWallet = /* GraphQL */ `
  mutation DeleteDriverWallet(
    $input: DeleteDriverWalletInput!
    $condition: ModelDriverWalletConditionInput
  ) {
    deleteDriverWallet(input: $input, condition: $condition) {
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
export const createReceipt = /* GraphQL */ `
  mutation CreateReceipt(
    $input: CreateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    createReceipt(input: $input, condition: $condition) {
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
export const updateReceipt = /* GraphQL */ `
  mutation UpdateReceipt(
    $input: UpdateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    updateReceipt(input: $input, condition: $condition) {
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
export const deleteReceipt = /* GraphQL */ `
  mutation DeleteReceipt(
    $input: DeleteReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    deleteReceipt(input: $input, condition: $condition) {
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
export const createTripCart = /* GraphQL */ `
  mutation CreateTripCart(
    $input: CreateTripCartInput!
    $condition: ModelTripCartConditionInput
  ) {
    createTripCart(input: $input, condition: $condition) {
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
export const updateTripCart = /* GraphQL */ `
  mutation UpdateTripCart(
    $input: UpdateTripCartInput!
    $condition: ModelTripCartConditionInput
  ) {
    updateTripCart(input: $input, condition: $condition) {
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
export const deleteTripCart = /* GraphQL */ `
  mutation DeleteTripCart(
    $input: DeleteTripCartInput!
    $condition: ModelTripCartConditionInput
  ) {
    deleteTripCart(input: $input, condition: $condition) {
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
export const createTrips = /* GraphQL */ `
  mutation CreateTrips(
    $input: CreateTripsInput!
    $condition: ModelTripsConditionInput
  ) {
    createTrips(input: $input, condition: $condition) {
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
export const updateTrips = /* GraphQL */ `
  mutation UpdateTrips(
    $input: UpdateTripsInput!
    $condition: ModelTripsConditionInput
  ) {
    updateTrips(input: $input, condition: $condition) {
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
export const deleteTrips = /* GraphQL */ `
  mutation DeleteTrips(
    $input: DeleteTripsInput!
    $condition: ModelTripsConditionInput
  ) {
    deleteTrips(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
export const createLicenseDocument = /* GraphQL */ `
  mutation CreateLicenseDocument(
    $input: CreateLicenseDocumentInput!
    $condition: ModelLicenseDocumentConditionInput
  ) {
    createLicenseDocument(input: $input, condition: $condition) {
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
export const updateLicenseDocument = /* GraphQL */ `
  mutation UpdateLicenseDocument(
    $input: UpdateLicenseDocumentInput!
    $condition: ModelLicenseDocumentConditionInput
  ) {
    updateLicenseDocument(input: $input, condition: $condition) {
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
export const deleteLicenseDocument = /* GraphQL */ `
  mutation DeleteLicenseDocument(
    $input: DeleteLicenseDocumentInput!
    $condition: ModelLicenseDocumentConditionInput
  ) {
    deleteLicenseDocument(input: $input, condition: $condition) {
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
export const createRegistrationDocument = /* GraphQL */ `
  mutation CreateRegistrationDocument(
    $input: CreateRegistrationDocumentInput!
    $condition: ModelRegistrationDocumentConditionInput
  ) {
    createRegistrationDocument(input: $input, condition: $condition) {
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
export const updateRegistrationDocument = /* GraphQL */ `
  mutation UpdateRegistrationDocument(
    $input: UpdateRegistrationDocumentInput!
    $condition: ModelRegistrationDocumentConditionInput
  ) {
    updateRegistrationDocument(input: $input, condition: $condition) {
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
export const deleteRegistrationDocument = /* GraphQL */ `
  mutation DeleteRegistrationDocument(
    $input: DeleteRegistrationDocumentInput!
    $condition: ModelRegistrationDocumentConditionInput
  ) {
    deleteRegistrationDocument(input: $input, condition: $condition) {
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
export const createInsuranceDocument = /* GraphQL */ `
  mutation CreateInsuranceDocument(
    $input: CreateInsuranceDocumentInput!
    $condition: ModelInsuranceDocumentConditionInput
  ) {
    createInsuranceDocument(input: $input, condition: $condition) {
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
export const updateInsuranceDocument = /* GraphQL */ `
  mutation UpdateInsuranceDocument(
    $input: UpdateInsuranceDocumentInput!
    $condition: ModelInsuranceDocumentConditionInput
  ) {
    updateInsuranceDocument(input: $input, condition: $condition) {
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
export const deleteInsuranceDocument = /* GraphQL */ `
  mutation DeleteInsuranceDocument(
    $input: DeleteInsuranceDocumentInput!
    $condition: ModelInsuranceDocumentConditionInput
  ) {
    deleteInsuranceDocument(input: $input, condition: $condition) {
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
export const createSystemNotification = /* GraphQL */ `
  mutation CreateSystemNotification(
    $input: CreateSystemNotificationInput!
    $condition: ModelSystemNotificationConditionInput
  ) {
    createSystemNotification(input: $input, condition: $condition) {
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
export const updateSystemNotification = /* GraphQL */ `
  mutation UpdateSystemNotification(
    $input: UpdateSystemNotificationInput!
    $condition: ModelSystemNotificationConditionInput
  ) {
    updateSystemNotification(input: $input, condition: $condition) {
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
export const deleteSystemNotification = /* GraphQL */ `
  mutation DeleteSystemNotification(
    $input: DeleteSystemNotificationInput!
    $condition: ModelSystemNotificationConditionInput
  ) {
    deleteSystemNotification(input: $input, condition: $condition) {
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
export const createDriverSystemNotification = /* GraphQL */ `
  mutation CreateDriverSystemNotification(
    $input: CreateDriverSystemNotificationInput!
    $condition: ModelDriverSystemNotificationConditionInput
  ) {
    createDriverSystemNotification(input: $input, condition: $condition) {
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
export const updateDriverSystemNotification = /* GraphQL */ `
  mutation UpdateDriverSystemNotification(
    $input: UpdateDriverSystemNotificationInput!
    $condition: ModelDriverSystemNotificationConditionInput
  ) {
    updateDriverSystemNotification(input: $input, condition: $condition) {
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
export const deleteDriverSystemNotification = /* GraphQL */ `
  mutation DeleteDriverSystemNotification(
    $input: DeleteDriverSystemNotificationInput!
    $condition: ModelDriverSystemNotificationConditionInput
  ) {
    deleteDriverSystemNotification(input: $input, condition: $condition) {
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

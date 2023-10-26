/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPaymentIntent = /* GraphQL */ `
  query GetPaymentIntent($id: ID!) {
    getPaymentIntent(id: $id) {
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
export const listPaymentIntents = /* GraphQL */ `
  query ListPaymentIntents(
    $filter: ModelPaymentIntentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentIntents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPaymentIntents = /* GraphQL */ `
  query SyncPaymentIntents(
    $filter: ModelPaymentIntentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPaymentIntents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStripeIdentitySession = /* GraphQL */ `
  query GetStripeIdentitySession($id: ID!) {
    getStripeIdentitySession(id: $id) {
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
export const listStripeIdentitySessions = /* GraphQL */ `
  query ListStripeIdentitySessions(
    $filter: ModelStripeIdentitySessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStripeIdentitySessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStripeIdentitySessions = /* GraphQL */ `
  query SyncStripeIdentitySessions(
    $filter: ModelStripeIdentitySessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStripeIdentitySessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRiturnitFees = /* GraphQL */ `
  query GetRiturnitFees($id: ID!) {
    getRiturnitFees(id: $id) {
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
export const listRiturnitFees = /* GraphQL */ `
  query ListRiturnitFees(
    $filter: ModelRiturnitFeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRiturnitFees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRiturnitFees = /* GraphQL */ `
  query SyncRiturnitFees(
    $filter: ModelRiturnitFeesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRiturnitFees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncRatings = /* GraphQL */ `
  query SyncRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const ratingsByTripsID = /* GraphQL */ `
  query RatingsByTripsID(
    $tripsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByTripsID(
      tripsID: $tripsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const ratingsByDriverID = /* GraphQL */ `
  query RatingsByDriverID(
    $driverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByDriverID(
      driverID: $driverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const ratingsByUserID = /* GraphQL */ `
  query RatingsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getRiturnitContactUs = /* GraphQL */ `
  query GetRiturnitContactUs($id: ID!) {
    getRiturnitContactUs(id: $id) {
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
export const listRiturnitContactuses = /* GraphQL */ `
  query ListRiturnitContactuses(
    $filter: ModelRiturnitContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRiturnitContactuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRiturnitContactuses = /* GraphQL */ `
  query SyncRiturnitContactuses(
    $filter: ModelRiturnitContactUsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRiturnitContactuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRiturnitPoint = /* GraphQL */ `
  query GetRiturnitPoint($id: ID!) {
    getRiturnitPoint(id: $id) {
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
export const listRiturnitPoints = /* GraphQL */ `
  query ListRiturnitPoints(
    $filter: ModelRiturnitPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRiturnitPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        points
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
  }
`;
export const syncRiturnitPoints = /* GraphQL */ `
  query SyncRiturnitPoints(
    $filter: ModelRiturnitPointFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRiturnitPoints(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        points
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
  }
`;
export const getRiturnitCancelTripReason = /* GraphQL */ `
  query GetRiturnitCancelTripReason($id: ID!) {
    getRiturnitCancelTripReason(id: $id) {
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
export const listRiturnitCancelTripReasons = /* GraphQL */ `
  query ListRiturnitCancelTripReasons(
    $filter: ModelRiturnitCancelTripReasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRiturnitCancelTripReasons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        label
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
  }
`;
export const syncRiturnitCancelTripReasons = /* GraphQL */ `
  query SyncRiturnitCancelTripReasons(
    $filter: ModelRiturnitCancelTripReasonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRiturnitCancelTripReasons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        label
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
  }
`;
export const getPoints = /* GraphQL */ `
  query GetPoints($id: ID!) {
    getPoints(id: $id) {
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
export const listPoints = /* GraphQL */ `
  query ListPoints(
    $filter: ModelPointsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncPoints = /* GraphQL */ `
  query SyncPoints(
    $filter: ModelPointsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPoints(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const pointsByUserID = /* GraphQL */ `
  query PointsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPointsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pointsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const pointsByStoreID = /* GraphQL */ `
  query PointsByStoreID(
    $storeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPointsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pointsByStoreID(
      storeID: $storeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCars = /* GraphQL */ `
  query SyncCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const carsByDriverID = /* GraphQL */ `
  query CarsByDriverID(
    $driverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    carsByDriverID(
      driverID: $driverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncPayments = /* GraphQL */ `
  query SyncPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const paymentsByUserID = /* GraphQL */ `
  query PaymentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getDriverWallet = /* GraphQL */ `
  query GetDriverWallet($id: ID!) {
    getDriverWallet(id: $id) {
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
export const listDriverWallets = /* GraphQL */ `
  query ListDriverWallets(
    $filter: ModelDriverWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDriverWallets = /* GraphQL */ `
  query SyncDriverWallets(
    $filter: ModelDriverWalletFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDriverWallets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const driverWalletsByDriverID = /* GraphQL */ `
  query DriverWalletsByDriverID(
    $driverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDriverWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    driverWalletsByDriverID(
      driverID: $driverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getReceipt = /* GraphQL */ `
  query GetReceipt($id: ID!) {
    getReceipt(id: $id) {
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
export const listReceipts = /* GraphQL */ `
  query ListReceipts(
    $filter: ModelReceiptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReceipts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncReceipts = /* GraphQL */ `
  query SyncReceipts(
    $filter: ModelReceiptFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReceipts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const receiptsByUserID = /* GraphQL */ `
  query ReceiptsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReceiptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    receiptsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const receiptsByStoreID = /* GraphQL */ `
  query ReceiptsByStoreID(
    $storeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReceiptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    receiptsByStoreID(
      storeID: $storeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTripCart = /* GraphQL */ `
  query GetTripCart($id: ID!) {
    getTripCart(id: $id) {
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
export const listTripCarts = /* GraphQL */ `
  query ListTripCarts(
    $filter: ModelTripCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTripCarts = /* GraphQL */ `
  query SyncTripCarts(
    $filter: ModelTripCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTripCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const tripCartsByStoreID = /* GraphQL */ `
  query TripCartsByStoreID(
    $storeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTripCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tripCartsByStoreID(
      storeID: $storeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const tripCartsByUserID = /* GraphQL */ `
  query TripCartsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTripCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tripCartsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const tripCartsByTripsID = /* GraphQL */ `
  query TripCartsByTripsID(
    $tripsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTripCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tripCartsByTripsID(
      tripsID: $tripsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTrips = /* GraphQL */ `
  query GetTrips($id: ID!) {
    getTrips(id: $id) {
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
export const listTrips = /* GraphQL */ `
  query ListTrips(
    $filter: ModelTripsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          nextToken
          startedAt
          __typename
        }
        Ratings {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTrips = /* GraphQL */ `
  query SyncTrips(
    $filter: ModelTripsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          nextToken
          startedAt
          __typename
        }
        Ratings {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tripsByUserID = /* GraphQL */ `
  query TripsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTripsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tripsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          nextToken
          startedAt
          __typename
        }
        Ratings {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tripsByStoreID = /* GraphQL */ `
  query TripsByStoreID(
    $storeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTripsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tripsByStoreID(
      storeID: $storeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          nextToken
          startedAt
          __typename
        }
        Ratings {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStores = /* GraphQL */ `
  query SyncStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productsByUserID = /* GraphQL */ `
  query ProductsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productsByStoreID = /* GraphQL */ `
  query ProductsByStoreID(
    $storeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByStoreID(
      storeID: $storeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
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
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDrivers = /* GraphQL */ `
  query SyncDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDrivers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLicenseDocument = /* GraphQL */ `
  query GetLicenseDocument($id: ID!) {
    getLicenseDocument(id: $id) {
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
export const listLicenseDocuments = /* GraphQL */ `
  query ListLicenseDocuments(
    $filter: ModelLicenseDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicenseDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncLicenseDocuments = /* GraphQL */ `
  query SyncLicenseDocuments(
    $filter: ModelLicenseDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLicenseDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const licenseDocumentsByDriverID = /* GraphQL */ `
  query LicenseDocumentsByDriverID(
    $driverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLicenseDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    licenseDocumentsByDriverID(
      driverID: $driverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getRegistrationDocument = /* GraphQL */ `
  query GetRegistrationDocument($id: ID!) {
    getRegistrationDocument(id: $id) {
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
export const listRegistrationDocuments = /* GraphQL */ `
  query ListRegistrationDocuments(
    $filter: ModelRegistrationDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrationDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncRegistrationDocuments = /* GraphQL */ `
  query SyncRegistrationDocuments(
    $filter: ModelRegistrationDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRegistrationDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const registrationDocumentsByDriverID = /* GraphQL */ `
  query RegistrationDocumentsByDriverID(
    $driverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrationDocumentsByDriverID(
      driverID: $driverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getInsuranceDocument = /* GraphQL */ `
  query GetInsuranceDocument($id: ID!) {
    getInsuranceDocument(id: $id) {
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
export const listInsuranceDocuments = /* GraphQL */ `
  query ListInsuranceDocuments(
    $filter: ModelInsuranceDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsuranceDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncInsuranceDocuments = /* GraphQL */ `
  query SyncInsuranceDocuments(
    $filter: ModelInsuranceDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInsuranceDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const insuranceDocumentsByDriverID = /* GraphQL */ `
  query InsuranceDocumentsByDriverID(
    $driverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInsuranceDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    insuranceDocumentsByDriverID(
      driverID: $driverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getSystemNotification = /* GraphQL */ `
  query GetSystemNotification($id: ID!) {
    getSystemNotification(id: $id) {
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
export const listSystemNotifications = /* GraphQL */ `
  query ListSystemNotifications(
    $filter: ModelSystemNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSystemNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSystemNotifications = /* GraphQL */ `
  query SyncSystemNotifications(
    $filter: ModelSystemNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSystemNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDriverSystemNotification = /* GraphQL */ `
  query GetDriverSystemNotification($id: ID!) {
    getDriverSystemNotification(id: $id) {
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
export const listDriverSystemNotifications = /* GraphQL */ `
  query ListDriverSystemNotifications(
    $filter: ModelDriverSystemNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverSystemNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDriverSystemNotifications = /* GraphQL */ `
  query SyncDriverSystemNotifications(
    $filter: ModelDriverSystemNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDriverSystemNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;

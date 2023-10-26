import {gql} from '@apollo/client';

export const listTrips = gql`
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
        storeID
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
        TripCarts {
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

export const updateTrips = gql`
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
      storeID
      userID
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

export const getTrips = gql`
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
      storeID
      userID
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

export const listRiturnitCancelTripReasons = gql`
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
    }
  }
`;

export const listTripCarts = gql`
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

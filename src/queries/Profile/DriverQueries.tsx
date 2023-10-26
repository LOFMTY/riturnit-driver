import {gql} from '@apollo/client';

export const getDriver = gql`
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

export const getUser = gql`
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

export const updateUser = gql`
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
      rating
      lng
      lat
      verificationStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

export const updateDriver = gql`
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

export const deleteUser = gql`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
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

export const createDriver = gql`
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

export const deleteDriver = gql`
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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

export const ratingsByDriverID = gql`
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

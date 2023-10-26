import { gql } from "@apollo/client";

export const createLicenseDocument = gql`
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

export const updateLicenseDocument = gql`
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

export const deleteLicenseDocument = gql`
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

export const listLicenseDocuments = gql`
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

export const createRegistrationDocument = gql`
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
export const updateRegistrationDocument = gql`
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
export const deleteRegistrationDocument = gql`
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

export const registrationDocumentsByDriverID = gql`
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

export const createInsuranceDocument = gql`
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
export const updateInsuranceDocument = gql`
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
export const deleteInsuranceDocument = gql`
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

export const insuranceDocumentsByDriverID = gql`
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
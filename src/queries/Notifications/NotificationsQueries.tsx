import {gql} from '@apollo/client';

export const listDriverSystemNotifications = gql`
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
      }
      nextToken
      startedAt
    }
  }
`;
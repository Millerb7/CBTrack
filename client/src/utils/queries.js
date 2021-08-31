import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      name
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query thoughts($_id: String) {
    thoughts(_id: $_id) {
      _id
      originalThought
      fixedThought
    }
  }
`;
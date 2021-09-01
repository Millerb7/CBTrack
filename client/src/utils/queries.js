import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      name
      email
      thoughts {
        _id
        originalThought
        fixedThoguht
        createdAt
      }
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
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

export const QUERY_ENTRIES = gql`
  query entries {
    entries {
      _id
      originalThought
      fixedThought
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_ENTRY = gql`
  query entry($entryId: ID!) {
    entry(entryId: $entryId) {
      _id
      originalThought
      fixedThought
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      entries {
        _id
        originalThought
        fixedThought
        thoughtAuthor
        createdAt
      }
    }
  }
`;
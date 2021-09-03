import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      name
      email
      entries {
        _id
        originalThought
        fixedThoguht
        createdAt
      }
    }
  }
`;

export const QUERY_ENTRIES = gql`
  query user($email: String!) {
    user(email: $email) {
      entries {
        _id
        originalThought
        fixedThought
        entryAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_DATE = gql`
  query user($email: String!, $date: String!) {
    user(email: $email, date: $date) {
      _id
      name
      email
      entries(where: { createdAt: { _eq: date } }) {
        _id
        originalThought
        fixedThoguht
        createdAt
      }
    }
  }
`;

export const QUERY_ENTRY = gql`
  query entry($entryId: ID!) {
    entry(entryId: $entryId) {
      _id
      originalThought
      fixedThought
      entryAuthor
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
        entryAuthor
        createdAt
      }
    }
  }
`;

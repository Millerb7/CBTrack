import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_ENTRY = gql`
  mutation addEntry($originalThought: String!, $fixedThought: String!) {
    addEntry(originalThought: $originalThought, fixedThought: $fixedThought) {
      _id
      originalThought
      fixedThought
      thoughtAuthor
      createdAt
    }
  }
`;


import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
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
        email
      }
    }
  }
`;

export const CREATE_THOUGHTS = gql`
  mutation createVote($_id: String!, $originalThought: String!, $fixedThought: String!) {
    createVote(_id: $_id, originalThought: $originalThought, fixedThought: $fixedThought) {
      _id
      originalThought
      fixedThought
    }
  }
`;
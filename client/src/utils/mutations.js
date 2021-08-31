import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createMatchup($name: String!, $email: String!, $password: String!) {
    createMatchup(name: $name, email: $email, password: $password) {
      _id
      name
      email
      password
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
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Entry {
    _id: ID!
    originalThought: String!
    fixedThought: String!
    date: Date!
  }

  type Query {
    user: [User]
    entries(_id: String): [Entry]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createEntry(_id: String!, originalThought: String!, fixedThought: String!): Entry
  }
`;

module.exports = typeDefs;
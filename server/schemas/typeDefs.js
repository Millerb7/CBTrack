const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    entries: [Entry]!
  }

  type Entry {
    _id: ID
    originalThought: String
    fixedThought: String
    entryAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    entries(userId: ID!): [Entry]
    entry(entryId: ID!): Entry
    me: User
    date: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEntry(originalThought: String!, fixedThought: String!): Entry
  }
`;

module.exports = typeDefs; 
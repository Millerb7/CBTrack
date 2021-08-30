const { User, Entry } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        entries: async (parent, { _id }) => {
            return Entry.find(_id ? { _id } : {});
        }
    },
    Mutation: {
        createUser: async (parent,args) => {
            const user = await User.create(args);
            return user;
        },
        createEntry: async (parent,args) => {
            const entry = await Entry.create(args);
            return entry;
        },
    }
};

module.exports = resolvers;
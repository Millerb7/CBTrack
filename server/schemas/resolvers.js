const { User, Entry } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("entries");
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate("entries");
    },
    entries: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
      return Entry.find(params).sort({ createdAt: -1 });
    },
    entry: async (parent, { entryId }) => {
      return Entry.findOne({ _id: entryId });
    },
    day: async (parent, { userId, day }) => {
      return Entry.find({ entryAuthor: userId, createdAt: day });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("entries");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addEntry: async (parent, { originalThought, fixedThought }, context) => {
      if (context.user) {
        const entry = await Entry.create({
          originalThought,
          fixedThought,
          entryAuthor: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { entries: entry } }
        );

        return entry;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

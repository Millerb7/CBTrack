const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const entrySchema = new Schema ({
    originalThought: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    fixedThought: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    incident: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    location: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    people: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    entryAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

entrySchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('createdAt')) {
        get: (timestamp) => dateFormat(timestamp)
    }
    next();
  });

const Entry = model('Entry', entrySchema);

module.exports = Entry;
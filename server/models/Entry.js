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
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    entryAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: String,
        default: "today",
        get: (timestamp) => dateFormat(Date.now),
    }
});

const Entry = model('Entry', entrySchema);

module.exports = Entry;
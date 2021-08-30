const { Schema, model } = require('mongoose');

const entrySchema = new Schema ({
    originalThought: {
        type: String,
        required: true,
    },
    fixedThought: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Entry = model('Entry', entrySchema);

module.exports = Entry;
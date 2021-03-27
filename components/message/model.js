const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const mySchema = new mongoose.Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoose.model('Message', mySchema);

module.exports = model;
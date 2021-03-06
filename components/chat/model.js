const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new mongoose.Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
});

const model = mongoose.model('Chat', mySchema);

module.exports = model;
const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const mySchema = new mongoose.Schema({
    name: String
});

const model = mongoose.model('User', mySchema);

module.exports = model;
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
        createdByUserID: String,
        question: String,
        options: [{ optionName: String, optionCount: Number }],
        totalVotes: Number
});

module.exports = mongoose.model("Poll", Poll);

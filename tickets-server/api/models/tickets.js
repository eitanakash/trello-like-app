const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketsSchma = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  members: {
    type: [],
    required: true
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  boardType: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('Tickets', ticketsSchma);


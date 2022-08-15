const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  slug: { type: String }
});
module.exports = mongoose.model('Courses', courses);

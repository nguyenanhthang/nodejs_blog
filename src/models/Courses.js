const mongoose = require("mongoose");
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const courses = new Schema({
  name: { type: String, require: true },
  description: { type: String },
  img:{type:String},
  video: { type: String, require: true},
  level: { type: String },
  slug: { type: String, slug: 'name',unique:true }
},{
  timestamps:true,
});
module.exports = mongoose.model("Courses", courses);

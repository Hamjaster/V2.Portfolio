const mongoose = require("mongoose");

const ProjectsSchema = mongoose.Schema({
  title: String,
  desc: String,
  link: String,
  github: String,
  img: String,
  video: String,
  featured: Boolean,
  remove: Boolean,
  skills: Array,
});

const ProjectModal = mongoose.model("projects", ProjectsSchema);
module.exports = ProjectModal;

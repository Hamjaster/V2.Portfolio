const mongoose = require('mongoose')

const ProjectsSchema = mongoose.Schema({
    title: String,
    desc: String,
    link: String,
    github: String,
    img: String,
    featured: Boolean,
    remove: Boolean
})

const ProjectModal = mongoose.model('projects', ProjectsSchema)
module.exports = ProjectModal;
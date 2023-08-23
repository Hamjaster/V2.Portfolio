const mongoose = require('mongoose')

const ProjectsSchema = mongoose.Schema({
    title: String,
    desc: String,
    link: String,
    img: String
})

const ProjectModal = mongoose.model('projects', ProjectsSchema)
module.exports = ProjectModal;
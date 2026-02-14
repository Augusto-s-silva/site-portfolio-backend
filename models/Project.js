const mongoose = require('mongoose');

const ProjectShema = new mongoose.Schema({
    name: String,
    description: String,
    link: String
});

module.exports = mongoose.model('Project', ProjectShema);
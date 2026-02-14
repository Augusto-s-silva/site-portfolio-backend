const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

exports.createProject = async (req, res) => {
    const { name, description, link } = req.body;
    const project = new Project({ name, description, link });
    await project.save();
    res.json(project);
};

exports.updateProject = async (req, res) => {
    const { name, description, link } = req.body;

    const project = await Project.findByIdAndUpdate(
        req.params.id,
        { name, description, link },
        { new: true }
    );

    res.json(project);
};

exports.deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Projeto removido' });
};
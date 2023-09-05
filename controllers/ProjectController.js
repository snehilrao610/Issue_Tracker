const Issue = require("../models/Issue");
const Project = require("../models/Project");

exports.listProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.render("projects/index", { title: "List of Projects", projects });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.renderCreateProjectForm = (req, res) => {
  res.render("projects/create", { title: "Create Project" });
};

exports.createProject = async (req, res) => {
  try {
    await Project.create(req.body);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.projectDetails = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    const issues = await Issue.find({ projectId: project._id });
    if (!project) {
      return res.status(404).send("Project not found");
    }
    // Fetch and display related issues here
    res.render("projects/detail", {
      project,
      title: "Project Details",
      issues,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const Issue = require("../models/Issue");
const Project = require("../models/Project");

exports.renderCreateIssueForm = async (req, res) => {
  try {
    // Fetch the project ID from the request parameters or query string
    const projectId = req.query.projectId;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).send("Project not found");
    }

    // Render the issue creation form with the project ID
    res.render("issues/create", { project, title: "Issue Create" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.createIssue = async (req, res) => {
  try {
    const { projectId, title, description, labels, author } = req.body;

    // Validate if the project with the given ID exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).send("Project not found");
    }

    // Create the issue only if the project exists
    await Issue.create({ projectId, title, description, labels, author });

    // Redirect to the project details page
    res.redirect(`/projects/${projectId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

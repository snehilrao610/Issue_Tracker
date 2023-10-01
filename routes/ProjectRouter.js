const express = require("express");
const router = express.Router();
const projectController = require("../controllers/ProjectController");

// Route to display the list of projects
router.get("/", projectController.listProjects);

// Route to render the form for creating a new project
router.get("/new", projectController.renderCreateProjectForm);

// Route to handle creating a new project
router.post("/", projectController.createProject);

// Route to display project details and related issues
router.get("/:projectId", projectController.projectDetails);

router.get("/delete/:projectId", projectController.deleteProject);

module.exports = router;

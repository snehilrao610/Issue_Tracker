const express = require("express");
const router = express.Router();
const issueController = require("../controllers/IssueController");

// Route to render the form for creating a new issue
router.get("/new", issueController.renderCreateIssueForm);

// Route to handle creating a new issue
router.post("/", issueController.createIssue);

// Define other routes for issue filtering and searching as needed

module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const db = require("./lib/db");
const expressLayouts = require("express-ejs-layouts");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(expressLayouts);

// Routes (You'll define these routes in separate route files)
const ProjectRoutes = require("./routes/ProjectRouter");
const IssueRoutes = require("./routes/IssueRouter");

// Use the route handlers
app.use("/", ProjectRoutes);
app.use("/issues", IssueRoutes);

// Home route
// app.get("/", (req, res) => {
//   res.render("index", { title: "Issue Tracker" });
// });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

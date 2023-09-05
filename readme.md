# Issue Tracker

## Overview

Issue Tracker is a web application that [provide a brief description of what your project does]. It allows users to [mention key features or functionalities].

## Installation

To run this project locally, follow these steps:

1. Clone the GitHub repository.
   ` git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory.
   `cd Issue_Tracker`
3. Install the project dependencies. (Make sure you have Node.js and npm installed).
   `npm install`

## Usage

To use Issue Tracker, follow these steps:

1. Start the server.
   `npm run dev`
2. Open your web browser and go to http://localhost:3000 to access the application.
3. You can create new project with

- Title
- Description
- Author

4. For each project you can open up it's detailed page by clicking on it.
5. On Detailed page, you will see all **Issues** Created till.
6. You can also create a new issue for a project and it will show here.
7. Searching is also available based on

- Title / Description
- Labels
- Author

## Project Structure

The project has the following structure:

- /controllers: Contains controllers for Projects and Issues handling.
- /lib: Contains `db.js` for databasde connection.
- /models: Contains Project and Issue models.
- /routes: Contains routes for projects and issues.
- /views: Contains all view for frontend.
- app.js: The Node.js application file that serves the project.
- package.json and package-lock.json: Define project dependencies and scripts.

## Dependencies

Following are the all dependencies used: -

- body-parser
- ejs
- express
- express-ejs-layouts
- method-override
- mongoose

### Command for installing all Dependencies

`npm install body-parser ejs express express-ejs-layouts method-override mongoose`

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or create a pull request on GitHub.

## License

This project is licensed under the [License Name] License - see the LICENSE file for details.

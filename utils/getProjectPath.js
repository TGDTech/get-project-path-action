const { sitPath, projects, authors } = require("./constants");

function getProjectPath(author, project, number) {
  return `${sitPath}${authors[author]}-${number}${projects[project]}`;
}

module.exports = getProjectPath;

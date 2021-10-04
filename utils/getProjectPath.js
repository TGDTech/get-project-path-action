const { sitPath, projects } = require("./constants");

function getProjectPath(project, number) {
  return `${sitPath}${number}${projects[project]}`;
}

module.exports = getProjectPath;

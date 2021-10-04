const core = require('@actions/core');
const getProjectPath = require('./utils/getProjectPath');

function run() {
  try {
    const project = core.getInput('project');
    const stageNumber = core.getInput('stageNumber');

    const value = getProjectPath(project, stageNumber);

    core.setOutput('value', value);
  } catch (err) {
    core.setFailed(err.message);
  }

}

run()

'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the good ${chalk.red('generator-kita-web')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project Name?',
        required: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.projectPath = this.destinationPath(props.projectName);
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('**'), this.projectPath, this.props);
  }

  install() {
    this.yarnInstall([], { cwd: this.projectPath });
  }
};

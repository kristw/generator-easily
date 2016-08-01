'use strict';

var Easily = require('yeoman-easily').Easily;
var chalk = require('chalk');

module.exports = Easily.createGenerator({
  prompting: function () {
    return this.easily
      .greet('Welcome to the <%- superb %> ' + chalk.red('<%= generatorName %>') + ' generator!')
      .confirmBeforeStart('Would you like to continue?')
      .prompt();
  },

  writing: function () {
    if (this.easily.checkForConfirmation()) {
      this.easily.extendJSONWithTemplate(
        '__package.json',
        'package.json',
        this.props
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});

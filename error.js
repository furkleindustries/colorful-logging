const chalk = require('chalk');
const processLogLine = require('./processLogLine');

module.exports = function error(value, colorFormatter, bgColorFormatter) {
  console.error(processLogLine(
    value,
    colorFormatter || chalk.red,
    bgColorFormatter || chalk.bgWhite,
  ));
};

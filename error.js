const chalk = require('chalk');
const processLogLine = require('./processLogLine');

module.exports = function error(value, colorFormatter, bgColorFormatter) {
  if (value instanceof Error) {
    console.error(processLogLine(
      value.stack || value.message || value,
      colorFormatter || chalk.red,
      bgColorFormatter,
    ));
  } else {
    console.error(processLogLine(
      value,
      colorFormatter || chalk.red,
      bgColorFormatter,
    ));
  }
};

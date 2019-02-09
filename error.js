const chalk = require('chalk');
const processLogLine = require('./processLogLine');
const {
  inspect: { styles },
} = require('util');

module.exports = function error(value, colorFormatter, bgColorFormatter) {
  
  if (value instanceof Error) {
    console.error(processLogLine(
      value.stack,
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

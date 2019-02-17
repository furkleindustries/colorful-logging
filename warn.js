const chalk = require('chalk');
const isNode = require('./isNode');
const processLogLine = require('./processLogLine');

module.exports = function warn(value, colorFormatter, bgColorFormatter) {
  const logLine = processLogLine(
    value,
    colorFormatter || (isNode() ? chalk.yellow : chalk.reset),
    bgColorFormatter,
  );

  console.warn(logLine);
};

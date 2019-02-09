const chalk = require('chalk');
const processLogLine = require('./processLogLine');

module.exports = function warn(value, colorFormatter, bgColorFormatter) {
  const logLine = processLogLine(
    value,
    colorFormatter || chalk.yellow,
    bgColorFormatter,
  );

  console.warn(logLine);
};

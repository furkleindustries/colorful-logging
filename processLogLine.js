const isNode = require('./isNode');

module.exports = function processLogLine(value, colorFormatter, bgColorFormatter) {
  let output = value;
  if (output && (Array.isArray(output) || typeof output === 'object')) {
    if (isNode()) {
      output = require('util').inspect(value);
    } else {
      output = JSON.stringify(output, null, 2);
    }
  }

  if (typeof colorFormatter === 'function') {
    output = colorFormatter(output);
  }

  if (typeof bgColorFormatter === 'function') {
    output = bgColorFormatter(output);
  }

  return output;
};

module.exports = function processLogLine(value, colorFormatter, bgColorFormatter) {
  let output = value;
  if (typeof colorFormatter === 'function') {
    output = colorFormatter(output);
  }

  if (typeof bgColorFormatter === 'function') {
    output = bgColorFormatter(output);
  }

  return output;
};

import {
  isNode,
} from './isNode';

export function processLogLine(value, colorFormatter, bgColorFormatter) {
  let output = value;
  if (output && typeof output === 'object') {
    if (output instanceof Error) {
      output = output.stack || output.message || value;
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
}

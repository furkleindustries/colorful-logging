import chalk from 'chalk';
import {
  isNode,
} from './isNode';
import {
  processLogLine,
} from './processLogLine';

export function warn(value, colorFormatter, bgColorFormatter) {
  const logLine = processLogLine(
    value,
    colorFormatter || (isNode() ? chalk.yellow : chalk.reset),
    bgColorFormatter,
  );

  console.warn(logLine);
}

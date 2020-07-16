import chalk from 'chalk';
import {
  isNode,
} from './isNode';
import {
  processLogLine,
} from './processLogLine';

export const warn = (
  colorFormatter,
  bgColorFormatter,
  ...logLines,
) => {
  logLines.forEach((value) => {
    console.warn(processLogLine(
      value,
      colorFormatter,
      bgColorFormatter,
    ));
  });
};

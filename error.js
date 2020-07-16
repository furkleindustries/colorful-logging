import chalk from 'chalk';
import {
  processLogLine,
} from './processLogLine';

export const error = (
  colorFormatter,
  bgColorFormatter,
  ...logLines
) => {
  logLines.forEach((value) => {
    console.error(processLogLine(
      value,
      colorFormatter,
      bgColorFormatter,
    ));
  });
};

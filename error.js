import chalk from 'chalk';
import {
  processLogLine,
} from './processLogLine';

export function error(value, colorFormatter, bgColorFormatter) {
  console.error(processLogLine(
    value,
    colorFormatter || chalk.red,
    bgColorFormatter,
  ));
}

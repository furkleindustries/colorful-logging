import {
  processLogLine,
} from './processLogLine';

export function log(value, colorFormatter, bgColorFormatter) {
  console.log(processLogLine(
    value,
    colorFormatter,
    bgColorFormatter,
  ));
}

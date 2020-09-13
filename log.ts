import {
  Chalk,
} from 'chalk';
import {
  processLogLine,
} from './processLogLine';

export const log = (
  colorFormatter: Chalk,
  bgColorFormatter: Chalk,
  ...logLines: any[]
) => {
  logLines.forEach((value) => {
    console.log(processLogLine(
      value,
      colorFormatter,
      bgColorFormatter,
    ));
  });
};

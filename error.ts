import { Chalk } from 'chalk';
import {
  processLogLine,
} from './processLogLine';

export const error = (
  colorFormatter: Chalk,
  bgColorFormatter: Chalk,
  ...logLines: any[]
) => {
  logLines.forEach((value) => {
    console.error(processLogLine(
      value,
      colorFormatter,
      bgColorFormatter,
    ));
  });
};

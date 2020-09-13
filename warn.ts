import { Chalk } from 'chalk';
import {
  isNode,
} from './isNode';
import {
  processLogLine,
} from './processLogLine';

export const warn = (
  colorFormatter: Chalk,
  bgColorFormatter: Chalk,
  ...logLines: any[]
) => {
  logLines.forEach((value) => {
    console.warn(processLogLine(
      value,
      colorFormatter,
      bgColorFormatter,
    ));
  });
};

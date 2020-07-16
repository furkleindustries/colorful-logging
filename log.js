import {
  processLogLine,
} from './processLogLine';

export const log = (
  colorFormatter,
  bgColorFormatter,
  ...logLines
) => {
  logLines.forEach((value) => {
    console.log(processLogLine(
      value,
      colorFormatter,
      bgColorFormatter,
    ));
  });
};

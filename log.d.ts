import {
  Chalk,
} from 'chalk';

export const log: (
  colorFormatter: Chalk,
  bgColorFormatter: Chalk,
  ...logLines: any[]
) => void;

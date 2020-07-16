import {
  Chalk,
} from 'chalk';

export const error: (
  colorFormatter: Chalk,
  bgColorFormatter: Chalk,
  ...logLines: any[]
) => void;

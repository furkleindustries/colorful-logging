import {
  Chalk,
} from 'chalk';

export type LoggerBackendFunc = (
  colorFormatter: Chalk,
  bgFormatter: Chalk,
  ...logLines: any[]
) => void;

import {
  Chalk,
} from 'chalk';

declare function processLogLine(value: any, colorFormatter?: Chalk, bgColorFormatter?: Chalk): string;
export = processLogLine;


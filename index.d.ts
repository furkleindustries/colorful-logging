import {
  Chalk,
} from 'chalk';

export function error(value: any, colorFormatter?: Chalk, bgColorFormatter?: Chalk): void;
export function log(value: any, colorFormatter?: Chalk, bgColorFormatter?: Chalk): void;
export function processLogLine(value: any, colorFormatter?: Chalk, bgColorFormatter?: Chalk): string;
export function warn(value: any, colorFormatter?: Chalk, bgColorFormatter?: Chalk): void;

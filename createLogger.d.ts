import * as Chalk from 'chalk';
import {
  LoggerBackendFunc,
} from './LoggerBackendFunc';
import {
  LoggerFunc,
} from './LoggerFunc';
import {
  LogTypes,
} from './LogTypes';

export const createLogger: (options?: {
  colorFormatting: Record<
    LogTypes,
    [ typeof Chalk, typeof Chalk ]
  >;

  levels: LogTypes[],

  loggerFunctions: Record<
    LogTypes,
    LoggerBackendFunc
  >,
}) => Record<LogTypes, LoggerFunc>;

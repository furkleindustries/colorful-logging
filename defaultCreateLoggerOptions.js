import chalk from 'chalk';
import {
  error,
} from './error';
import {
  isNode,
} from './isNode';
import {
  log,
} from './log';
import {
  warn,
} from './warn';

const isNode = isNode();
const defaultWarnFormatter = isNode ? chalk.yellow : chalk.reset;

export const defaultCreateLoggerOptions = {
  colorFormatting = {
    error: chalk.red,
    log: undefined,
    warn: defaultWarnFormatter,
  },

  levels,
  loggerFunctions = {
    error,
    log,
    warn,
  },
};

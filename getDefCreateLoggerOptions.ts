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

const isInNode = isNode();
const defaultWarnFormatter = isInNode ? chalk.yellow : chalk.reset;

export const getDefCreateLoggerOptions = () => ({
  colorFormatting: {
    error: chalk.red,
    log: undefined,
    warn: defaultWarnFormatter,
  },

  levels: [ 'error', 'log', 'warn' ],
  loggerFunctions: {
    error,
    log,
    warn,
  },
});

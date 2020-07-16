import {
  defaultCreateLoggerOptions,
} from './defaultCreateLoggerOptions';

export const createLogger = ({
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
} = defaultCreateLoggerOptions) => {
  let levelsMap = {};

  if (levels) {
    const formattedLevels = Array.from(levels).map((level) => {
      return level.trim().toLowerCase();
    });

    for (const level of formattedLevels) {
      if (level === 'none') {
        levelsMap = { none: 'none' };
        break;
      } else if (level === 'error') {
        levelsMap.error = loggerFunctions.error;
      } else if (level === 'log') {
        levelsMap.log = loggerFunctions.log;
      } else if (level === 'warn') {
        levelsMap.warn = loggerFunctions.warn;
      }
    }
  }

  if ('none' in levelsMap) {
    return levelsMap;
  }

  const logTypes = [ 'error', 'log', 'warn' ];
  for (logType of logTypes) {
    if (logType in levelsMap) {
      levelsMap[logType] = levelsMap[logType].bind(
        null,
        colorFormatting[logType][0],
      );
    } else {
      levelsMap[logType] = levelsMap[logType].bind(
        null,
        colorFormatting[logType][1],
      );
    }
  }
};

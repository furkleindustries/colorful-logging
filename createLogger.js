import {
  getDefCreateLoggerOptions,
} from './getDefCreateLoggerOptions';

export const createLogger = (opts) => {
  const {
    colorFormatting,
    levels,
    loggerFunctions,
  } = {
    ...getDefCreateLoggerOptions(),
    ...opts,
  };

  // None leaves this as-is.
  let levelsMap = {
    error: () => {},
    log: () => {},
    warn: () => {},
  };

  if (levels) {
    const formattedLevels = Array.from(levels).map((level) => {
      return level.trim().toLowerCase();
    });

    for (const level of formattedLevels) {
      if (level === 'none') {
        return levelsMap;
      } else if (level === 'error') {
        levelsMap.error = loggerFunctions.error;
      } else if (level === 'log') {
        levelsMap.log = loggerFunctions.log;
      } else if (level === 'warn') {
        levelsMap.warn = loggerFunctions.warn;
      }
    }
  }

  const logTypes = [ 'error', 'log', 'warn' ];
  for (const logType of logTypes) {
    if (logType in levelsMap) {
      levelsMap[logType] = levelsMap[logType].bind(
        null,
        colorFormatting[logType],
        null,
      );
    } else {
      levelsMap[logType] = levelsMap[logType].bind(
        null,
        colorFormatting[logType],
        null,
      );
    }
  }

  return levelsMap;
};

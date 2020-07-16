export type LoggerBackendFunc = (
  colorFormatter: typeof Chalk,
  bgFormatter: typeof Chalk,
  ...logLines: any[],
) => void;

import pino from 'pino';

export const logger = pino({
  level: import.meta.dev ? 'debug' : 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard'
    }
  }
});

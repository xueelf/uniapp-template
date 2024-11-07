enum LogLevel {
  fatal,
  error,
  warn,
  info,
  debug,
  trace,
}
type Level = keyof typeof LogLevel;

function getLevels(): string[] {
  return Object.keys(LogLevel).filter(key => typeof LogLevel[key] === 'number');
}

function getDate(): string {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  const utc = new Date(date.getTime() - offset);

  return utc.toISOString();
}

function parseLevel(level: string): Level {
  return level in LogLevel ? LogLevel[level] : 'info';
}

interface Logger {
  level: Level;
  fatal(...args: any[]): void;
  error(...args: any[]): void;
  warn(...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
  trace(...args: any[]): void;
  setLevel(level: Level): void;
}

class Logger {
  constructor(
    /** 日志等级 */
    public level: Level = 'info',
  ) {
    getLevels().forEach(level => {
      Reflect.set(this, level, this.log.bind(this, level));
    });
  }

  private get order(): number {
    return LogLevel[this.level];
  }

  private log(level: Level, message: unknown): void {
    if (LogLevel[level] > this.order) {
      return;
    }
    const date: string = getDate();
    const tag: string = level.toUpperCase();

    // 数据类型转换
    switch (true) {
      case typeof message === 'object':
        message = JSON.stringify(message, null, 2);
        break;
    }
    console.log(`[${date}] [${tag}] - ${message}`);
  }

  public setLevel(level: Level): void {
    this.level = level;
  }
}

const { VITE_LOG_LEVEL } = import.meta.env;
const level: Level = parseLevel(VITE_LOG_LEVEL);

/**
 * 日志记录器
 *
 * @example
 * 日志等级在 env 文件中配置，合法值为："fatal"、"error"、"warn"、"info"、"debug"、"trace"，默认 "info"。
 * ```
 * import { logger } from '@/util/logger';
 *
 * logger.fatal('崩溃');
 * logger.error('错误');
 * logger.warn('警告');
 * logger.info('信息');
 * logger.debug('调试');
 * logger.trace('跟踪');
 * ```
 */
export const logger = new Logger(level);

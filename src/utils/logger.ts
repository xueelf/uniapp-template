import { formatDate } from '~/utils/formatTime';

export enum Level {
  ALL,
  TRACE,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
  MARK,
  OFF,
}

class Logger {
  constructor(
    /** 日志等级 */
    public level: keyof typeof Level = 'INFO',
  ) {

  }

  private print(level: Level, message: string): void {
    if (Level[this.level] > level) {
      return;
    }
    const date = formatDate(new Date, 'YYY-mm-dd HH:MM:SS');
    console.log(`[${date}] [${Level[level]}] - ${message}`);
  }

  trace(message: string): void {
    return this.print(Level.TRACE, message);
  }

  debug(message: string): void {
    return this.print(Level.DEBUG, message);
  }

  info(message: string): void {
    return this.print(Level.INFO, message);
  }

  warn(message: string): void {
    return this.print(Level.WARN, message);
  }

  error(message: string): void {
    return this.print(Level.ERROR, message);
  }

  mark(message: string): void {
    return this.print(Level.MARK, message);
  }
}

const { VITE_LOG_LEVEL } = import.meta.env;

export const logger = new Logger(VITE_LOG_LEVEL);

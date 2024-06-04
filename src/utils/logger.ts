import { formatDate } from '@/utils/formatTime';

enum Level {
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
  ) {}

  private print(level: Level, message: any): void {
    if (Level[this.level] > level) {
      return;
    }

    // 数据类型转换
    switch (true) {
      case typeof message === 'object':
        message = JSON.stringify(message, null, 2);
        break;
    }
    const date = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS');

    console.log(`[${date}] [${Level[level]}] - ${message}`);
  }

  trace(message: any): void {
    return this.print(Level.TRACE, message);
  }

  debug(message: any): void {
    return this.print(Level.DEBUG, message);
  }

  info(message: any): void {
    return this.print(Level.INFO, message);
  }

  warn(message: any): void {
    return this.print(Level.WARN, message);
  }

  error(message: any): void {
    return this.print(Level.ERROR, message);
  }

  mark(message: any): void {
    return this.print(Level.MARK, message);
  }
}

const { VITE_LOG_LEVEL } = import.meta.env;

export const logger = new Logger(VITE_LOG_LEVEL);

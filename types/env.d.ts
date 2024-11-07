interface ImportMetaEnv extends Readonly<Record<string, string>> {
  /** APP 标题 */
  readonly VITE_APP_TITLE: string;
  /** 服务端口 */
  readonly VITE_PORT: string;
  /** 日志等级 */
  readonly VITE_LOG_LEVEL: string;
  /** 配置文件路径 */
  readonly VITE_PUBLIC_PATH: string;
  /** 接口地址 */
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

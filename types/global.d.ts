// 声明文件，*.vue 后缀的文件交给 vue 模块来处理
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/**
 * 全局自定义环境变量的类型声明
 */
declare interface ViteEnv {
  VITE_OPEN: boolean;
  /** 服务端口 */
  VITE_PORT: number;
  /** 日志等级 */
  VITE_LOG_LEVEL: string;
  /** 接口地址 */
  VITE_PUBLIC_PATH: string;
}

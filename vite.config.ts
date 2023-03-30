import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';

/** 当前执行 node 命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/**
 * 路径查找
 * 
 * @param dir - 目录
 * @returns 绝对路径
 */
function pathResolve(dir: string): string {
  return resolve(__dirname, '.', dir);
};

/**
 * 处理环境变量
 * 
 * @param envConf - 环境变量
 * @returns 类型转换后的 vite 环境变量
 */
function warpperEnv(envConf: Record<string, string>): ViteEnv {
  // 默认值
  const ret: ViteEnv = {
    VITE_OPEN: false,
    VITE_PORT: 2333,
    VITE_PUBLIC_PATH: '',
  };

  for (const envName of Object.keys(envConf)) {
    let realName: string | number | boolean = envConf[envName].replace(/\\n/g, '\n');

    // 类型转换
    switch (true) {
      case realName === 'true':
        realName = true;
        break;
      case realName === 'false':
        realName = false;
        break;
      case envName === 'VITE_PORT':
        realName = Number(realName);
        break;
    }
    ret[envName] = realName;
  }
  return ret;
};

/** 设置别名 */
const alias: Record<string, string> = {
  '@': pathResolve('src'),
  '@build': pathResolve('build'),
};
const viteConfig = defineConfig((config: ConfigEnv): UserConfig => {
  const { command, mode } = config;
  const { VITE_PUBLIC_PATH, VITE_PORT } = warpperEnv(loadEnv(mode, root));

  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias
    },
    // 服务端渲染
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: VITE_PORT,
      host: '0.0.0.0',
      // 本地跨域代理
      proxy: {

      },
    },
    plugins: [
      uni(),
    ],
    build: {
      sourcemap: false,
      // 消除打包大小超过 500kb 警告
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve('index.html'),
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        }
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/uni.scss";',
        },
      },
    },
  };
});

export default viteConfig;

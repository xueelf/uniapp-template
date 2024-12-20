# uni-app-template

A template for uni-app with Vue 3

## 简介

`uni-app-template` 是一个不依赖 HBuilder 的 uni-app 基础项目模版，使用了最新的 `Vue 3`、`Vite`、`TypeScript`、`Pinia` 等主流技术开发。

模板封装了基础的网络请求，日志打印、数值校验等常用工具类，没集成 UI 组件库，也没有任何组件封装。代码精简，结构清晰，十分适合作为入门模板搭建项目。

你可以在全局搜索 `TODO` 来根据实际需求做相应的修改，例如 code 拦截、token 处理。

### 为什么不用 HBuilder 生成 uni-app 项目？

~~那玩意这么难用，你是认真的么？不是因为工作谁会去碰 uni-app 这种东西？~~

用 cli 构建的项目可以用 HBuilder 打开，但用 HBuilder 生成的项目在其它 IDE 里根本没法跑。

## 安装使用

- 克隆仓库

```shell
> git clone https://github.com/xueelf/uni-app-template.git
```

- 安装依赖

```shell
> cd uni-app-template
> npm install
```

- 更新依赖

```shell
> npx @dcloudio/uvm@latest
```

- 运行项目

```shell
> npm run dev:<platform>
```

- 项目打包、发布

```shell
> npm run build:<platform>
```

`platform` 可取值如下：

| 值                      | 平台                                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| app-plus                | app 平台生成打包资源（支持 npm run build:app-plus，可用于持续集成。不支持 run，运行调试仍需在 HBuilder 中操作） |
| app-ios                 | IOS                                                                                                             |
| app-harmony             | 鸿蒙                                                                                                            |
| h5                      | H5                                                                                                              |
| mp-alipay               | 支付宝小程序                                                                                                    |
| mp-baidu                | 百度小程序                                                                                                      |
| mp-weixin               | 微信小程序                                                                                                      |
| mp-toutiao              | 抖音小程序                                                                                                      |
| mp-lark                 | 飞书小程序                                                                                                      |
| mp-qq                   | qq 小程序                                                                                                       |
| mp-360                  | 360 小程序                                                                                                      |
| mp-kuaishou             | 快手小程序                                                                                                      |
| mp-jd                   | 京东小程序                                                                                                      |
| mp-xhs                  | 小红书小程序                                                                                                    |
| quickapp-webview        | 快应用（webview）                                                                                               |
| quickapp-webview-union  | 快应用联盟                                                                                                      |
| quickapp-webview-huawei | 快应用华为                                                                                                      |

## 目录结构

```text
.
├─ src          资源目录
│  ├─ api       接口目录
│  ├─ pages     页面
│  ├─ static    静态资源
│  ├─ stores    pinia
│  ├─ styles    样式目录
│  └─ util      工具类
├─ types        声明文件
└─ .env         环境变量
```

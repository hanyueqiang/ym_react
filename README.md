## react-typescript-app

### 基于 Ant Design 的 React 脚手架，开箱即用

> A React start project


## 技术栈

*  React16
*  TypeScript
*  Ant Design
*  Redux
*  Webpack 4.x

## 特性
*  :gem: 基于 React，Ant Design，Redux, TypeScript 等企业级后台管理系统最佳实践。
*  :art: 基于 Ant Design UI 组件库，提供后台管理系统常见使用场景。
<!-- *  :nail_care: 基于 CSS Module 的样式解决方案。 -->
*  :rocket: 基于 webpack4.x 本地调试和构建。
*  :triangular_ruler: Eslint && husky 统一代码规范。

## 开发构建

### 目录结构

```bash
├── /dist/           # 项目输出目录
├── /config/         # webpack配置目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 图片资源
│ ├── /common/       # 公共配置文件，菜单、路由
│ │ ├── munu.js      # 侧边栏菜单配置
│ │ └── router.js    # 路由配置
│ ├── /components/   # UI组件
│ ├── /layouts/      # 布局组件
│ ├── /router/       # 页面组件
│ ├── /redux/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /utils/        # 工具函数
│ │ ├── authority.js # 权限工具函数
│ │ ├── Authorized.js # 权限配置
│ │ ├── utils.js     # 工具函数
│ │ ├── request.js   # 异步请求函数
│ ├── global.less    # 全局样式
│ ├── main.tsx       # 入口文件
│ └── index.html
├── /typings/         # typescript声明文件
├── /public/         # 项目静态资源
├── postcss.config.js # postcss配置
├── package.json     # 项目依赖
├── .eslintrc.js        # ESlint配置
└── .babelrc.js         # babel配置
└── .prettierrc      # 代码风格配置
└── .tsconfig.json   # typescript配置
```

### 快速开始

克隆项目文件:

```bash
git clone https://github.com/hanyueqiang/ym_react.git
```
推荐使用[ym-create-react-cli](https://www.npmjs.com/package/ym-create-react-cli)初始化项目：

```bash
npm install ym-create-react-cli -g 或 yarn add global ym-create-react-cli

ym-create-react-cli myApp
```

进入目录安装依赖:

```bash
#国内用户推荐yarn或者cnpm
npm i 或 yarn
```

开发：

```bash
npm start 或 yarn start 
```

构建：

```bash
npm run build 或 yarn build
```

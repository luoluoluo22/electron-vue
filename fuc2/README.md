# 建立electron-vue开发环境

> An electron-vue project

## 建立项目

``` bash

vue init simulatedgreg/electron-vue auto_smart

# 安装依赖组件 install dependencies
npm install(yarn)

# 启动服务 serve with hot reload at localhost:9080
npm run dev(yarn run dev)

# 编译并打包成app build electron application for production
npm run build

# run unit tests
npm test

# lint all JS/Vue component files in `src/`
npm run lint

```

# 踩坑记录

## 无法正常显示欢迎页面

当上方的步骤成功以后，运行`yarn run dev`命令发现出现了如下的界面，原因是node的版本高于项目所需版本，需要进行如下修改

### 第一处修改

将`.electron-vue/webpack.renderer.config.js`和`.electron-vue/webpack.web.config.js`中的97行和125行

> 隐藏文件，在vscode打开或者在放达按`cmd+shift+.`显示隐藏文件

```js
    // 下方代码注释掉 
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.resolve(__dirname, '../src/index.ejs'),
    //   minify: {
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true,
    //     removeComments: true
    //   },
    //   nodeModules: false
    // }),
```
替换为
```js
    //替换为 
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.ejs'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      isBrowser: false,
      isDevelopment: process.env.NODE_ENV !== 'production',
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, '../node_modules')
        : false
    }),
```


### 第二处修改

将`./src/index.ejs`中的原内容全部替换为：
```js
   <!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="utf-8" />
    <% if (htmlWebpackPlugin.options.nodeModules) { %>
    <!-- Add `node_modules/` to global paths so `require` works properly in development -->
    <script>
      require('module').globalPaths.push('<%= htmlWebpackPlugin.options.nodeModules.replace(/\\/g, '\\\\') %>')
    </script>
    <% } %>
  </head>

  <body>
    <div id="app"></div>

    <!-- Set `__static` path to static files in production -->
    <% if (!htmlWebpackPlugin.options.isBrowser &&
    !htmlWebpackPlugin.options.isDevelopment) { %>
    <script>
      window.__static = require("path")
        .join(__dirname, "/static")
        .replace(/\\/g, "\\\\");
    </script>
    <% } %>

    <!-- webpack builds are automatically injected -->
  </body>
</html>
```

再次执行`yarn run dev`命令即可

## 关闭调试窗口中的警告信息

进入`./src/renderer/main.js`文件中，在第10行`Vue.config.productionTip = false`下方添加：

`process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true' // 关闭安全提醒`

## 当开发者模式时打开调试窗口

进入`./src/renderer/main.js`文件中，在第8行后新增

```js
// 开启开发者工具，方便调试
import { remote } from 'electron'
const currentWindow = remote.getCurrentWindow()
currentWindow.openDevTools()
```

## 关闭调试窗口中的警告信息

当运行`yarn run dev`后，页面显示正常，但是终端出现如下错误：

```bash
  ERROR in ./src/main/index.js
  Module Error (from ./node_modules/eslint-loader/index.js):
  
    ✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses  
    src/main/index.js:18:22
    function createWindow() {
```

原因是`function createWindow() {`这行缺少1个空格，这是因为vscode保存时自动格式化所导致，需要修改`.eslintrc.js`文件

在`rules`中添加如下代码：
```js
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不检测语句末尾的分号
    'semi': ['off', 'always'],
    // 强制缩进为2个空格
    'indent': ['error', 2],
    // 关闭函数名称跟括号之间的空格检测
    'space-before-function-paren': 0,
    // 忽略大括号内的空格
    'object-curly-spacing': 0
```

## 终端提示端口被占用

`Starting inspector on 127.0.0.1:5858 failed: address already in use`

## 踩坑

- 常用命令
```bash
cd /Users/luomingyang/Luo_MingYang/Electron/auto_design && yarn run dev

```

- 出现不能正常显示页面使用如下解决方法：
https://github.com/SimulatedGREG/electron-vue/issues/871#issuecomment-529809406

- 出现格式问题将`.eslintrc.js`文件修改如下
```js
 rules: {
    'generator-star-spacing': 'off',
    "space-before-function-paren": 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
```


## 打包

先在项目根目录添加打包命令
```bash
cd /Users/luomingyang/Luo_MingYang/Electron/auto_design && npm install electron-packager --save-dev
```

然后在主入口文件添加命令
```js
"main": ".electron.js", // 不要忘记设置入口文件
"scripts": {
    "electron_build": "electron-packager ./ --platform=win32 --arch=x64 --overwrite"
    // 注意事项 electron-packager ./ 会取当前目录下packager.json文件（即当前文件）中main值指向的入口文件
}
```

先在项目根目录添加打包命令
```bash
npm run electron_build(yarn run build)
=>Downloading electron-v2.0.18-darwin-x64.zip: [=---------] 8% ETA: 977.9 seconds
```

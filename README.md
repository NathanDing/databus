# _**你能走多远，取决于你填坑的能力有多大！**_


## 01.创建应用
- 利用create-react-app创建react工程
```
    npm install -g create-react-app
    create-react-app databus
```
- 安装redux
```
    npm install --save redux
    npm install --save react-redux
```
- 安装react-router，现在用的是版本4，和之前的用法和配置方法都有所区别
```
    npm install --save history
    npm install --save react-router-dom
    npm install --save react-router-redux
```
- 安装类型检测库prop-types
```
   npm install --save prop-types
```
- 安装 Ant design及相关内容
```
    $ npm install --save  antd
    根据ant design官网介绍修改配置
    我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。
    此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 react-app-rewired （一个对 create-react-app 进行自定义配置的社区解决方案）。
    引入 react-app-rewired 并修改 package.json 里的启动配置。
    
    $ yarn add react-app-rewired --dev
    /* package.json */
    "scripts": {
    -   "start": "react-scripts start",
    +   "start": "react-app-rewired start",
    -   "build": "react-scripts build",
    +   "build": "react-app-rewired build",
    -   "test": "react-scripts test --env=jsdom",
    +   "test": "react-app-rewired test --env=jsdom",
    }
    然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。
    
    module.exports = function override(config, env) {
      // do stuff with the webpack config...
      return config;
    };
    使用 babel-plugin-import#
    babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件（原理），现在我们尝试安装它并修改 config-overrides.js 文件。
    
    $ yarn add babel-plugin-import --dev
    + const { injectBabelPlugin } = require('react-app-rewired');
    
      module.exports = function override(config, env) {
    +   config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
        return config;
      };
```
- 安装json-server
```
- 首先执行npm i json-server -g把json-server作为全局工具安装
- 新建/server目录用于放置服务端的文件
- 新建/server/db.json文件作为服务端的数据库文件
- 在/server/db.json文件中写入以下数据：
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  },
  "menus":[
    {
      "name": "首页",
      "url": "index",
      "icon": "home"
    },{
      "name": "组件模块",
      "url": "tool",
      "icon": "tool",
      "children":[
        {"name":"按钮","url":"button","icon":"appstore"},
        {"name":"表单","url":"button","icon":"form"}
      ]
    }
  ]
}
- 最后在/server目录执行json-server db.json -w -p 13000
到这里已经完成模拟后台接口的服务搭建
```
- 暴露配置文件
```
- 执行npm run eject （暴露工程配置，执行后会增加config+scripts两个目录*****）
```
- 修改配置文件
```
```

## 02.创建应用目录结构
```
```
## 03.修改入口文件
```
```
## 04.创建各个模块（demo）
```
```

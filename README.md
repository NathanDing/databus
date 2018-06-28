**你能走多远，取决于你填坑的能力有多大！**


## 01.创建应用
- 利用create-react-app创建react工程
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
- 安装 Ant design
```
    npm install --save  antd
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

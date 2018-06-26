## 01.准备工作
- 创建工程,通过create-react-app创建
- 执行npm run eject （暴露工程配置，执行后会增加config+scripts两个目录*****）
- 运行项目 npm start，默认打开http://localhost:3000/
- /doc目录为本项目所有文档目录
- /server借助json-server这个工具快速搭建后台管理系统的服务端程序
## 02.添加框架支持
### 服务端搭建：
- 首先执行npm i json-server -g把json-server作为全局工具安装
- 新建/server目录用于放置服务端的文件
- 新建/server/db.json文件作为服务端的数据库文件
- 在/server/db.json文件中写入以下数据：
``` 
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
```
- 最后在/server目录执行json-server db.json -w -p 13000
### 添加Router支持：


### 添加Redux支持：


### 添加Antd支持：
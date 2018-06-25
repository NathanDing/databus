## 01.准备工作
- 创建工程,通过create-react-app创建
- 执行npm run eject （暴露工程配置，执行后会增加config+scripts两个目录）
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
        "user": [
            {
                "id": 10000,
                "name": "一韬",
                "age": 25,
                "gender": "male"
            },{
                "id": 10001,
                "name": "张三",
                "age": 30,
                "gender": "female"
            }
        ]
    }
```
- 最后在/server目录执行json-server db.json -w -p 13000
### 添加Router支持：
1

### 添加Redux支持：


### 添加Antd支持：
# node-static-server
使用nodejs快速搭建本地服务环境，便于前端开发和调试

# 前置
安装了nodejs及npm

# 使用步骤

1. 打开命令行窗口
2. 输入命令`npm install`，安装依赖
3. 运行环境`npm start`
4. 在浏览器中打开`http://localhost:8080`即可运行

# server.js
server.js是nodejs源码

## 设置端口号
端口号默认是8080，修改下面的代码自由更改
```
var __port = 8080;
```

# www文件夹
www文件夹中放置运行的前端代码


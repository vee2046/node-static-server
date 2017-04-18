# node-static-server
使用nodejs快速搭建本地服务环境，便于前端开发和调试

# 前置
安装了nodejs及npm

## 使用步骤

先把代码包下载到本地，并解压
1. 在代码所在文件夹shift+右击，菜单中选择“在此处打开命令行窗口”，进入命令行
2. 输入`npm install`，安装依赖
3. 开启运行环境`npm start`，看到`nodejs started on port 8080`表示启动成功
4. 在浏览器中打开`http://localhost:8080`即可运行

## server.js
server.js是nodejs源码

### 设置端口号
端口号默认是8080，修改下面的代码自由更改
```
var __port = 8080;
```

## www文件夹
www文件夹中放置运行的前端代码


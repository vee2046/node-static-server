/**
 * Created by vee2046 on 2017/4/18 22:48
 *
 */
var connect = require("connect");
var serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic(__dirname + '/www'));

var __port = 8080;

//启动服务
app.listen(__port);//绑定监听的端口
console.log('nodejs started on port '+__port);//输出监听信息
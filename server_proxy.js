/**
 * Created by vee2046 on 2017/4/18 22:48
 *
 */
var serveStatic = require("serve-static");

const { proxy, close } = require('fast-proxy')({
    base: 'https://autoresume.com:8808/'
})
const gateway = require('restana')()

const distPath = __dirname + '/dist';//__dirname + '/dist/fabric'
gateway.use(serveStatic(distPath));

var __port = 8090;
// var __port = 80;



gateway.all('/api/*', function (req, res) {
    proxy(req, res, req.url, {})
})

//启动服务
gateway.start(__port)
console.log('nodejs started on port ' + __port, 'in ' + distPath);//输出监听信息
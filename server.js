// demo地址 http://www.zhengshengliang.com:9999/ 始终监听9999端口，并记录日志

const http = require('http');
const fs = require('fs');
const url = require('url');
const port = process.argv[2]; // 获取端口号

if (!port) {
    console.log('请指定端口号~~~');
    process.exit(1);
}

const server = http.createServer((request, response) => {
    const path = request.url;
    const parsedUrl = url.parse(path, true);
    const query = path.indexOf('?') >= 0 ? path.substring(path.indexOf('?')) : ''; // http://www.baidu.com/query?name=XXX => name=XXX
    const pathNoQuery = parsedUrl.pathName; // 不包含查询
    const queryObject = parsedUrl.query; // 查询参数
    const method = request.method; // 请求方法

    console.log('HTTP 路径为: ' + path);
    switch (path) {
        case '/':
            response.setHeader('Content-type', 'text/html; charset=utf-8');
            const html = '<!DOCTYPE>' +
                '<html><head><link rel="stylesheet" href="/style.css"></head>' +
                '<body><div><a href="http://www.zhengshengliang.com">最简单实现垂直居中: 使用flex</a></div><script src="/main.js"></script></body></html>';
            response.write(html);
            break;
        case '/style.css':
            response.setHeader('Content-type', 'text/css; charset=utf-8');
            response.write('body { display: flex; height: 100vh;}' +
                'div {margin: auto;}');
            break;
        case '/main.js':
            response.setHeader('Content-type', 'text/javascript; charset=utf-8');
            response.write('alert("第一个node.js服务器！");');
            break;
        default:
            response.statusCode = 404;
    }
    response.end();
});

server.listen(port);
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port);

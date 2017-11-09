/* 服务器 */
// 'use strict'
var http = require('http');
//创建服务器 
var server = http.createServer();
server.on('request',function(req,res){
    res.writeHead(200,{'Content-Type':'text/json'});
    res.end('hello node');
})

server.listen('8333');
console.log(' 8333服务器已经启动')

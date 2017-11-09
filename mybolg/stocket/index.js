var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app)
var io  = require('socket.io')(server);
// 服务器监控
io.on('connection',function (socket) {
    console.log('进入socket',socket);
    socket.on('客户端打来电话',function(data){
        console.log('你好客户端 有什么事')
    })
    socket.emit('hello',function(){
      console.log('伺服器说：我打电话给客户端')
    });
})
app.get('/',function(request,respone){
    respone.send('欢迎来聊天室')
})

app.listen(8787); 
console.log('8787服务器开启成功')
// module.exports = {}
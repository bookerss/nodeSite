// var express = require('express');
// var app =  experss();
var app = require('express')();
// console.log(app);

// app.get('/',(req,res)=>{
//  res.send('hello, express 我是测试啊');
// });

// app.get('/users/:name',(q,s)=>{
//     s.send('hello,'+q.params.name)
// });

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var API = require('./api');
bodyParser = require('body-parser');

var url = 'mongodb://127.0.0.1:27017/myblog';
var mongoose = require('mongoose');
mongoose.connect(url);
/**
  * 连接成功
  */
  mongoose.connection.on('connected', function () {    
    console.log('链接成功 ' + url);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('链接失败' + url);  
});  

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('链接断开');  
});  

var Bear  = require('./model/bear');
// body中间件配置
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
console.log('fafa',bodyParser)
var port = process.env.PORT || 8787;


app.use('/',indexRouter);
// app.use(function(request,respone,next){
//     respone.send('爸爸是中间件')
//     next();
// });
app.use('/users',userRouter);
app.use('/api',function(req,res){
    res.send({message:'进入api接口'})
    // res.send(JSON.stringify(res.body))
});

app.listen(port);
console.log('服务器开启')


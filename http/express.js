
// 测试express
var express = require('express');
var app = require('express')();
// console.log(app)
app.get('/',(req,res)=>{
    console.log(`这位客官楼上请`)
    res.send('哎呦喂！大爷来玩啊')
})
var port = process.env.PORT || 8787;
app.listen(port,()=>{
    console.error('怡红院开门了')
})


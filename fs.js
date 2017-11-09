// 文件管理系统 
var fs = require('fs'),path = require('path');

// console.log(__dirname+'/filedir'+'/test1.txt')

// //flag 是设置文件操作权限 r是读 r+读写 
// fs.readFile(__dirname+'/filedir'+'/test1.txt',{flag:'r+',encoding:"utf8"},function
//     (err,data){
//         if(err){
//            console.error(err);
//            return 
//         }
//         console.log(data);
//     });

//  var data = '这是一个测试看buffer是个什么 ；、\r\n';
//   /*
//   *  <Buffer e8 bf 99 e6 98 af e4 b8 80 e4 b8 aa e6 b5 8b e8 af 95 e7 9c 8b 62 75 66 66 65 72 e6 98 af e4 b8 aa e4 bb 80 e4 b9 88 20 ef bc 9b e3 80 81 0d 0a>
//   *  转换成二进制文件
//   */
//  var data = new Buffer(data)  ;
//  fs.writeFile(__dirname +'/filedir'+ '/test.txt', {flag: 'a'}, function (err) {
//     if(err) {
//      console.error(err);
//      } else {
//         console.log('写入成功');
//      }
//  });
 
// //  renamex
// fs.rename(__dirname+'/filedir/fuck.txt',__dirname+'/filedir/fuck2.txt',(err)=>{
//     if(err) throw err;
//     console.log('重命名完成');
// })


// 
// fs.rename(__dirname+'/filedir/fuck3.txt', __dirname+'/filedir/fuck5.txt', (err) => {
//     if (err) throw err;
//     console.log('重命名完成');
//   });
// fs.stat(__dirname+'/filedir/fuck5.txt', (err, stats) => {
//     if (err) throw err;
//     console.log(`文件属性: ${JSON.stringify(stats)}`);
//   });

// fs.readFile(__filename,{flag:'a+'},function(error,data){
//     if(error) {
//         console.log(error)
//          return ;
//     }
//     console.log(data.toString())

// });

// fs.open(__filename,'r',(error,data)=>{
//     console.log(data.toString())
// })



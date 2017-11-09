
// __dirname __filename 当前模块的文件夹和当前模块文件名称 
var path = require('path');

//==>path__dirname: /Users/wangjun/code/font-end/node/nodeSite/filedir
// console.log('path__dirname:',path.dirname(__filename));

//==>/Users/wangjun/code/font-end/node/nodeSite/filedir
// console.log(__dirname);

//==>/Users/wangjun/code/font-end/node/nodeSite/filedir/nodetest.js
// console.log(__filename);


// console.log('process.platform',process.platform);
// console.log('process.title',process.title);

//  console.log(process)]

// 输入输出流
// process.stdin.resume();
// process.stdin.on('data',function(data){
//   process.stdout.write('看看你输出了什么:'+data.toString());
// })

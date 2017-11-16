// 进程
// 导入进程对象
var process = require('process');
// console.error(process.execPath);//node路径
// console.error(process.cwd());//当前执行脚本路径
// console.log(process.versions)//version为node版本号 versions是依赖版本号
// console.log(process.stdin)//标准输入流对象
// console.log(process.stdout)//标准输出流对象
console.log('**********************************')
console.log('argv:',process.argv)//返回数组 第一个参数是node命名参数 第二个是脚本文件名 第三个是其他命令行餐 
// =====> node index.js one tweo ====> [node,index.js,'one','tweo']
console.log('__________________________')


console.log('__________________________')



// common.js 规范 node作为js的后段实现最成功
// node环境下运行
const path = require('path');
// 绝对路径  目录过程 写完了代码之后 有可能换目录存放 __dirname 将不受影响
console.log(path.resolve(__dirname, 'dist'));
// console.log(path);
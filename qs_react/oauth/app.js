const path = require('path');
const koa = require('koa');
const views = require('koa-views');
const app = new koa();
const routers = require('./routes/index');
const fs = require('fs');
// 中间件
// __dirname 绝对的服务的根路径
// app.use(views(path.join(__dirname,'./view'), {
//   extension: 'ejs'  // 使用占位符让我们显示
// }));
// // 从router中取出route
// app.use(routers.routes()).use(routers.allowedMethods());

// 最本质的：


// koa 里面会有一堆的中间件 里面会有很多不返回的  会一直next往下传
// 所以为了确保中间件的执行顺序  我们就需要将这些异步的中间件函数同步化
// 这个可以用到我们的 async 
const main = async (ctx) => {
  // ctx.response.body = '<h1>hello world</h1>'
  ctx .response.type = 'html';
  ctx.response.body = await fs.readFileSync('./template.html', 'utf-8');
  // return ctx;
};
app.use(main);

app.listen(3000);
console.log('The server is on port 3000');
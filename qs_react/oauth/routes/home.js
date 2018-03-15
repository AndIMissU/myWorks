const router = require('koa-router')();
// router提供路由对象
// async 进行异步请求
const routers = router.get('/', async(ctx) => {
  const title = 'login home';
  // ctx 包括进来的请求和出去的
  
  await ctx.render('home', {
    title
  })
})
module.exports = router;
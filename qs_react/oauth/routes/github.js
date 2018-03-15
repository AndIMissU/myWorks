// oauth 协议为用户资源的授权 提供了一个安全，开发又简单的标准。   
// oauth以其他授权 不同的地方 不会涉及第三方用户的账号和密码， 可以申请获得资源的授权
const router = require('koa-router')();
const config = require('../config');
const fetch = require('node-fetch');
// router提供路由对象
// async 进行异步请求
const routers = router.get('/login', async(ctx) => {
  // ctx 包括进来的请求和出去的
  // await ctx.render('github', {
  //   title
  // })
  // 去往github授权页
  const dataSrc = (new Date()).valueOf();
  // oauth 需要先去第三方网站注册应用  应用上线地址 安全性 保证开发者的权益
  // 一去请求授权  我们的第三方网站 就会将结果返回到服务器  也就是Authorization callback URL
  // github会授权 就会有一个client_id
  var path = `https://github.com/login/oauth/authorize?client_id=${config.client_id}&scope=${config.scope}&state=${dataSrc}`;
  ctx.redirect(path);
  // ctx.body = path;
  // console.log(dataSrc);
})
.get('/oauth/callback', async(ctx) => {
  // code 
  const code = ctx.query.code
  let path = `https://github.com/login/oauth/access_token`;
  const params = {
    client_id: config.client_id,
    client_secret: config.client_secret,
    code: code
  }
  // 用await 做网页请求
   await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(res => {
    console.log(res);
    // 在thenable里面返回一个promise可以一直链下去
    return res.text()
  })
  .then(body => {
    console.log(body);
    const args = body.split('&');
    let arg = args[0].split('=');
    const access_token = args[1];
    console.log(access_token);
    return access_token;
  })
  .then(async(token) => {
    const url = 'https://api.github.com/user?access_token='+token;
    console.log(url);
    await fetch(url)
      .then(res => {
        return res.JSON()
    }).then(res => {
      console.log(res);
      ctx.body = res;
    })
  })
})
module.exports = routers;
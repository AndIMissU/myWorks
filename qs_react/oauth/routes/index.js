const router = require('koa-router')();
// // 这个也是中间件  koa中的中间件其实就是async的函数
// // router中间件可以匹配中间件的地址

// // /home 相当于的路由中间件
const home = require('./home');
const github = require('./github');
// const oauth = require('./oauth');
router.use('/home', home.routes(), home.allowedMethods());
router.use('/github', github.routes(), github.allowedMethods());
// router.use('/oauth', oauth.routes(), oauth.allowedMethods());

module.exports = router;
import Router from 'koa-router';
import config from '../config';
import db from '../models';
const user = require('../controllers/user');
const article = require('../controllers/article');
const router = new Router({
  // 自动在前面加一个/api
  prefix: config.app.routerBaseApi
});
// url /api/user => router 做匹配  
// => controller （负责后端 业务逻辑）
// => model (view 通信) 

router.get('/user', user.getUserInfo)
      .get('/articles/:page?/:limit?', article.getArticles) // 打问号意思就是page可传可不传

export default router;
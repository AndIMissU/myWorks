import Router from 'koa-router'
import db from '../models'
import config from '../config'

const article = require('../controllers/article')

const router = new Router({
  prefix: config.app.routerBaseApi
})

router
  .post('/article', article.postArticle)

  export default router

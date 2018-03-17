// import Koa from 'koa'
// import { Nuxt, Builder } from 'nuxt'
// import path, { resolve } from 'path'
// import KoaStatic from 'koa-static'
// import bodyParser from 'koa-bodyparser'
// import Router from 'koa-router'
// import cors from '@koa/cors'
// import route from './routes'
// // 作表单提交的中间件

// async function start() {
//   const app = new Koa()
//   const router = new Router()
//   app.use(cors())
//   app.use(bodyParser())
//   app.use(KoaStatic('.'))
  
//   router.use('', router.routes())
//   app.use(router.routes()).use(router.allowedMethods())
//   // 将nuxt打包进来  这是独立的一个资源包
//   let config = require('../nuxt.config')
//   const nuxt = new Nuxt(config)

//   const builder = new Builder(nuxt)
//   await builder.build()
//   app.use(async(ctx, next) => {
//     // 将所有东西编译
//     await next()
//     ctx.status = 200;  //输出 http status状态码
//     // 将状态码发送过去
//     return new Promise((resolve, reject) => {
//       ctx.res.on('close', resolve)
//       ctx.res.on('finish', resolve)
//       nuxt.render(ctx.req, ctx.res, promise => {
//         promise.then(resolve).catch(reject)
//       })
//     })
//   })

//   app.listen(3000)
//   console.log('运行...')
// }
// start()


import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import path from 'path'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import cors from '@koa/cors'
import route from './routes'

async function start() {
  const app = new Koa()
  const router = new Router()
  app.use(cors())
  app.use(bodyParser())
  app.use(KoaStatic('.'))
  router.use('', route.routes())
  app.use(router.routes())
    .use(router.allowedMethods())
  // 将nuxt 打包进来  独立的一个资源包
  let config = require('../nuxt.config.js')
  const nuxt = new Nuxt(config)
  // if (config.dev) {
  const builder = new Builder(nuxt)
  await builder.build()
  // }
  app.use(async(ctx, next) => {
    await next()
    ctx.status = 200;// http status-code
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res,
         promise => {
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(3000)
  console.log('运行...')
}
start()
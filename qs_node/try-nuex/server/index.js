import Koa from 'koa';
import globalConfig from './config';
import Router from 'koa-router';
import route from './routes';

async function start() {
  const app = new Koa();
  const host = process.env.HOST || globalConfig.app.host;
  const port = process.env.PORT || globalConfig.app.port;
  const router = new Router();
  router.use('', route.routes());
  app.use(router.routes()).use(router.allowedMethods());
  app.listen(port, host);
  console.log('Server listening on ' + host + ':' +port);
  // await
}
start();

// 这个属于node的核心模块
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');
const mime = require('mime');
const handlebars = require('handlebars');

const server = http.createServer();
server.on('request', request.bind(this));

function request(req, res) {
  // req, res
  // console.log(args);
  // 识别出 / path
  // / => index.html
  // /images/a.png
  // /template/*.html

  

  const {pathname} = url.parse(req.url);
  let filepath = path.join(config.root, pathname);
  if (pathname === '/') {
    // console.log('首页');
    const rootPath = path.join(config.root, 'index.html');
    console.log(rootPath);
    // 文件的类型  text/html png text/css mime
    console.log(mime.getType(rootPath));
    // header http 响应头 状态码 响应体
    res.setHeader('Content-Type', mime.getType(rootPath)+';charset=utf-8');
    
    return fs.createReadStream(rootPath).pipe(res);
  }
  // const = url.parse(req.url)''
  // res.get('/', () => {

  // })
  // 文件 或目录 
  fs.stat(filepath, (err, stats) => {
    if (err) {
      res.end('not found');
      return ;
    }
    // stats 获取文件信息  文件创建时间 文件目录 等等
    if (stats.isDirectory()) {
      console.log('目录');
      // 得到所有文件
      // 阻塞
      let files = fs.readdirSync(filepath);
      console.log(files);
      // 一定会读完才会继续下去 阻塞
      files = files.map(file => ({
        name: file,
        url: path.join(pathname, file)
      }));
      // list 函数返回compile之后的模板
      let html = list()({
        title: pathname,
        files
      })
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
      // console.log(files);
    } else {
      res.setHeader('Content-Type', mime.getType(filepath) + ';charset=utf-8');
      fs.createReadStream(filepath).pipe(res);
    }
  })
  function list() {
    let tmpl = fs.readFileSync(path.resolve(__dirname, 'template', 'list.html'), 'utf8');
    return handlebars.compile(tmpl);
  }
}
server.listen(3000, () => {
  console.log(`静态文件服务启动成功，访问Localhost:3000`)
})
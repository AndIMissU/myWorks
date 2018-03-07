var express = require('express');
var app = express();
// 一次
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
// midlleware 中间件区域 当有一个用户来访问这个网站的时候 这个中间件就会从上到下执行多次
// 验证身份 log bodyparser cookie session 错误处理 路由处理 res

var port = process.env.PORT || 8080;
var router = express.Router();
  // ->Controller

router.get('/', function(req, res){
  res.send('<h1>Hello World!</h1>');
});
// XX的小家
router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});
router.post('/', function(req, res){
  var name = req.body.name; 
  res.json({message: 'Hello ' + name});
})

app.use('/home', router);
// console.log(port);
// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// })
app.listen(port, function() {
  console.log(`web server在${port}端口伺服`);
});
const express = require('express');
// app 就是 express的应用
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const captchapng = require('captchapng');
// 需要一个中间件启动一下body-parser 就是 app.use()
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'ejs');  //设置一下模板引擎
class VerificationCode {
  constructor(len = 4, w = 80,h = 30) {
    this.w = w;
    this.h = h;
    this.len = len;
    this.randomNumber = null;
  }
  getRandomNumber() {
    let i = 0,
      res = [];
    while(i < this.len) {
      i++;
      res.push(Math.floor(Math.random()*10));
    }
    return res.join('');
  }
  getImgBase64() {
    let cap;
    this.randomNumber = this.getRandomNumber();
    cap = new captchapng(this.w, this.h, this.randomNumber);
    cap.color(0,0,0,0);
    cap.color(80,80,80,255);
    let img = cap.getBase64(), imgbase64 = new Buffer(img, 'base64');
    return imgbase64;
  }
  // 显示的文字
  getJSON() {
    let imgbase64 = this.getImgBase64();
    return {
      number: this.randomNumber,
      base64: 'data:image/png;base64,' + imgbase64.toString('base64')
    }
  }
}

app.get('/api', function(req, res) {
  res.json({
    data: [{
      movie: '女儿国'
    },{
      movie: '唐人街探案'
    }]
  })
});

app.post('/login', function(req, res){
  console.log('表单数据')
  // 如何获取表单的数据？如何将随机数据和表单的数据比较
  console.log(req.body.code);
  console.log(req.cookies.yzm);
  if(req.cookies.yzm === req.body.code) {
    res.send('验证码输入正确');
  } else {
    res.send('验证码输入错误');
  }
});

app.get('/', function(req, res) {
  // 首先做数据库查询m  再是业务处理c  再是view显示 v
  let code = new VerificationCode(),
    code_data = code.getJSON();
    // 种Cookie
    res.cookie('yzm', code_data.number, { maxAge:60000 });
  // req 请求 res 返回
  // res.send('Hello World!');
  res.render('index', {
    title: '图形验证码',
    pic: code_data.base64
  });
})
app.listen(3000);
const express = require('express');
const app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users = [];

app.use('/', express.static(__dirname + '/www'));
// 换一个方式启动server
server.listen(3000);
// Socket 是实时RealTime核心 http协议是无法长链接的 一旦送达 立即断开  
// 如果再想进行交互  只能通过 ajax(长期轮着询问交互 就是不停的发送http请求询问 ) 提交 再提交 get/post

// sockets 是做实时通讯的核心
io.sockets.on('connection', function(socket) {
  socket.on('login', function(nickname) {
    console.log('登录成功');
    if( users.indexOf(nickname) > -1) {
      socket.emit('nickExisted')
    } else {
      socket.nickname = nickname;
      users.push(nickname);
      socket.emit('loginSuccess');
      io.sockets.emit('system', nickname, users.length);
    }
  });
})
// app.listen(3000, function() {
//   console.log('欢迎来的 emmmm 的聊天室');
// })
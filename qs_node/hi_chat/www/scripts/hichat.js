window.onload = function() {
  var hichat = new HiChat();
  hichat.init();
}
var HiChat = function() {
  this.socket = null;
}
HiChat.prototype = {
  init: function() {
    this.socket = io.connect();
    this.socket.on('connect', function() {
      document.getElementById('info').textContent = '取个名字吧';
      document.getElementById('nickWrapper').style.display = 'block';
      document.getElementById('nicknameInput').focus();
    });
    this.socket.on('loginSuccess', function(){
      document.title = 'Hi-Chat | ' + document.getElementById('nicknameInput').value;
      document.getElementById('loginWrapper').style.display = 'none';
      document.getElementById('messageInput').focus();
    });
    this.socket.on('system', (nickname, userCount,type) => {
      var msg = nickname + (type === 'login'?'joined':'left');
      this._displayNewMsg('system', msg, 'red');
      document.getElementById('status'), textContent = userCount + (userCount>1?'users':'user'+ ' online');
    });
    document.getElementById('loginBtn').addEventListener('click', () => {
      var nickName = document.getElementById('nicknameInput').value;
      if(nickName.trim().length != 0) {
        this.socket.emit('login', nickName) ;
      } else {
        document.getElementById('nicknameInput').focus();
      }
    }, false);
  },
  _displayNewMsg: function(user, msg, color) {
    var container = document.getElementById('historyMsg'),
        msgToDisplay = document.createElement('p'),
        date = new Date().toTimeString().substr(0, 8),
        //determine whether the msg contains emoji
        msg = this._showEmoji(msg);
    msgToDisplay.style.color = color || '#000';
    msgToDisplay.innerHTML = user + '<span class="timespan">(' + date + '): </span>' + msg;
    container.appendChild(msgToDisplay);
    container.scrollTop = container.scrollHeight;
  },
  _showEmoji: function(msg) {
    var match, result = msg,
        reg = /\[emoji:\d+\]/g,
        emojiIndex,
        totalEmojiNum = document.getElementById('emojiWrapper').children.length;
    while (match = reg.exec(msg)) {
        emojiIndex = match[0].slice(7, -1);
        if (emojiIndex > totalEmojiNum) {
            result = result.replace(match[0], '[X]');
        } else {
            result = result.replace(match[0], '<img class="emoji" src="../content/emoji/' + emojiIndex + '.gif" />');//todo:fix this in chrome it will cause a new request for the image
        };
    };
    return result;
}
}
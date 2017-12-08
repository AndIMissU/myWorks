//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: null,
    todos: []
  },
  bindKeyInput: function(e){
    this.data.current = e.detail.value;
  },
  addItem: function(e) {
    if(this.data.current != null) {
      // 将所有的后台业务交给我们的后台业务
      app.addItem(this.data.current);
      this.data.bindKeyInput = "";

    }
  },
  deleteItem: function(e) {
    var key = e.target.dataset.key;
    // 自带API
    this.ref.child(key).remove();
  },
 
  onLoad: function () {
    // todos select * from
    this.ref = app.getTodoRef();
    this.ref.on('child_added', function(snapshot,prKey) {
      var key = snapshot.key();
      var text = snapshot.val();
      // 构造一个json结构
      var newItem = {key: key, text: text};
      this.data.todos.push(newItem);
      this.setData({
        todos: this.data.todos
      });
    }, this);
    this.ref.on('child_removed', function(snapshot) {
      var key = snapshot.key();
      var index = this.data.todos.findIndex((item,index) => {
        if (item.key == key) {
          return true;
        }
        return false;
      });
      if (index >= 0) {
        this.data.todos.splice(index, 1);
        this.setData({
          todos: this.data.todos
        })
      }
    }, this);
  }
})

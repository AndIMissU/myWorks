//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    home:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getUserInfo();
  },
  getUserInfo: function() {
    var that = this;
    wx.request({
      url:"https://guoke.famishare.me/api/image.php",
      method:'get',
      success:function(res){
        console.log(res.data.data);
        that.setData({
          home: res.data.data
        });
      }
    })
  }
})

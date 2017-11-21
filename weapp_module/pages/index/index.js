//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeIndex:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickTab: function(e) {
    var index = e.target.dataset.current;
    this.setData({
      activeIndex:index,
    });
  },
  swiperTab:function(e) {
    this.setData({
      activeIndex: e.detail.current
    })
  },
  onLoad: function () {
    // var that = this;
    // setInterval( function() { 
    //   if(that.data.currentTab == 2){
    //     that.setData({
    //       currentTab:-1
    //     })
    //   }
    //    that.setData({
    //       currentTab: that.data.currentTab +1
    //     })

    // },1500);
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

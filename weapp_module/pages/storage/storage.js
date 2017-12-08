// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: ""
  },
  bindAddressInput: function(e) {
    this.setData({
      address:e.detail.value
    });
  },
  bindSaveAddress: function() {
    // address?
    // setStorage 存数据  小程序大概给10M空间存
    // 最近看的十篇文章  离线  存取用户信息 配置 更快的
    wx.setStorage({
      key: 'address',
      data: this.data.address,
      success: function() {
        wx.showToast({
          title:'地址保存成功',
          icon: 'success',
          duration: 2000
        })
      }
    });
  },
  bindClearAddress: function(e){
    wx.clearStorage();
    this.setData({
      address:'请输入您的地址'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'address',
      success:function(res){
        that.setData({
          'address':res.data
        })
      }
    });
    console.log("onLoad");
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
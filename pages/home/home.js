var common = require('../../utils/commen.js')
var app = getApp()
Page({
  data: {
    text: "This is page home.",
    array: [{ name: 'zly' }, { name: 'zlu' }],
    info: ''
  },
  getInfo: function () {
    console.log(app.globalData.info)
    this.info = app.globalData.info
    // this.setData({
    //   info: app.globalData.info
    // })
  },
  // 区别
  // wx.navigateTo()是保留当前页面，跳转到某个页面，跳转页面后可以返回上一页。
  // wx.redirectTo()是关闭当前页面，跳转到某个页面，跳转页面后不能返回上一页。
  navget: function () {
    wx.navigateTo({
      url: '../tabs/tabs'
    })
  },
  redirectTo: function () {
    wx.redirectTo({
      url: '../tabs/tabs'
    })
  },
  hello: function () {
    common.sayHello('zahra1111！')
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    this.setData({
      info: app.globalData.info
    })
    // Do something when page show.
  },
  onHide: function () {
    console.log('home页面隐藏')
    // Do something when page hide.
  },
  onUnload: function () {
    console.log('home页面被销毁')
  // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})
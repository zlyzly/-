var app = getApp()
Page({
  data: {
    text: "This is page home."
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    
  },
  onShow: function () {
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
  }
})
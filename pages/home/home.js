var common = require('../../utils/commen.js')
var app = getApp()
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  inputValue: '',
  data: {
    text: "This is page home.",
    array: [{ name: 'zly' }, { name: 'zlu' }],
    info: '',
    list: [
      { num: 1 },
      { num: 2 },
      { num: 6 }
    ],
    //toast默认不显示
    isShowToast: false,
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ucloud.onemicroworld.com/DD6DC0B8-5504-0857-1F74-0C53D289E00E?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=ssd4FjnBu23N53CwmD06sMJinFY%3D',
    src: '',
    danmuList:
    [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }]
  },
  getInfo: function () {
    console.log(app.globalData.info)
    this.info = app.globalData.info
    this.setData({
      info: app.globalData.info
    })
  },
  // 区别
  // wx.navigateTo()是保留当前页面，跳转到某个页面，跳转页面后可以返回上一页。
  // wx.redirectTo()是关闭当前页面，跳转到某个页面，跳转页面后不能返回上一页。
  navget: function () {
    wx.navigateTo({
      url: '../tabbar/tabbar'
    })
  },
  redirectTo: function () {
    wx.redirectTo({
      url: '../tabbar/tabbar'
    })
  },
  
  hello: function () {
    common.sayHello('zahra1111！')
  },
  // 显示toast
  showToast: function () {
    var _this = this;
    // toast时间
    _this.data.count = parseInt(_this.data.count) ? parseInt(_this.data.count) : 3000;
    _this.setData({
      isShowToast: true,
    });
    // 定时器关闭
    setTimeout(function () {
      _this.setData({
        isShowToast: false
      });
    }, _this.data.count);
  },
  /* 点击按钮 */
  clickBtn: function () {
    console.log("你点击了按钮")
    //设置toast时间，toast内容
    this.setData({
      count: 1500,
      toastText: 'Toast提示框'
    });
    this.showToast();
  },
  // video
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindPlayVideo () {
    console.log('video play')
    this.videoContext.play()
  },
  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },
  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.videoContext = wx.createVideoContext('myVideo')
    // 分享
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  // audio
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  onShareTimeline: function(res) {
    console.log(this.route)
    return {
      title: '分享到朋友圈的文案，分享到朋友圈的文案，分享到朋友圈的文案',
      path: '/' + this.route,
      imageUrl: '../../image/login.jpg'
    }
  },
  onShareAppMessage: function(res) {
    return {
      title: '分享到朋友的文案，分享到朋友的文案，分享到朋友的文案',
      path: '/' + this.route,
      imageUrl: '../../image/login.jpg'
    }
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
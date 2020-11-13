//app.js
App({
  //当小程序初始化完成时，会触发onLaunch（全局只触发一次）
  onLaunch: function () {
    // 获取设备信息
    wx.getSystemInfo({
      success: (result) => {
        console.log(result)
        console.log(result.platform) // 客户端平台
        if (result.system.indexOf("Android") != -1) {  // 是安卓机型
          // console.log('安卓')
        } else {  // ios机型 x以上
          // console.log(result.windowHeight)
          if (result.windowHeight >= 642) {
            // console.log('ios x')
          } else { // ios机型 x以下
            // console.log('ios x下')
          }
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     console.log(res)
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           console.log(res)
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onShow: function () {
  //当小程序启动，或从后台进入前台显示，会触发onShow
    console.log('app-info:',this.globalData.info)
  },

  onHide: function () {
  //当小程序从前台进入后台，会触发onHide

  },

  onError: function (msg) {
  //当小程序发生脚本错误，或者api调用失败时，会触发onError并带上错误信息

  },

  other:function(){
//全局函数，可以被项目上的其他js文件调用

  },
  //全局对象--可以在任何页面使用
  globalData: {
    historyText: ['横岗公路', '泗泾地铁站'],
    info: {
      msg: ''
    }
  },
})
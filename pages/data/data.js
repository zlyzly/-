var util = require('../../utils/util.js')
var api = require('../../utils/api.js')
const app = getApp()
Page({
  data: {
    refreshFlag: false,
    loadMoreFlag: false,
    systemStatusBarH: app.globalData.safeArea.statusBarHeight,
    wechatOperationBarH: app.globalData.safeArea.wechatOperationBarHeight,
    containerH: app.globalData.safeArea.safeHeight,
    src: '../../image/loading.png',
    animationData: {}
  },
  onLoad:function(){
    const that = this
    wx.getSystemInfo({  
      success:function(res){  
        console.info(res.windowHeight)
      }  
    })
    //  在页面展示之后先获取一次数据
    var date = new Date();
    this.setData({  
      refreshTime: date.toLocaleTimeString()
    })
    this.loadData()
   },  
   onShow:function(){  
     console.log(this.data.systemStatusBarH, this.data.wechatOperationBarH, this.data.containerH)
   }, 
   /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loadMore() {
    console.log('loadMore')
    this.setData({
      loadMoreFlag: true
    })
    // 1创建一个动画实例 animation
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
  
    // 2调用实例的方法来描述动画。
    this.animation = animation
    animation.rotate(180).step()
    animation.rotate(360).step()
    // 3最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
    this.setData({
      animationData:animation.export()
    })
    setTimeout(() => {
      this.setData({
        loadMoreFlag: false
      })
    }, 2000)
  },
  refresh() {
    this.setData({
      refreshFlag: true
    })
    console.log('refresh')
    setTimeout(() => {
      console.log('close refresh')
      this.setData({
        refreshFlag: false
      })
    }, 2000)
  },
  loadData: function () {
    var that = this
    //网络访问，获取数据列表
    api.getPullData(function(data) {
      that.setData({
        contentlist: data.list,
        allPages: data.total
      })
    })
  }
})
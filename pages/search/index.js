// pages/search/index.js
const app = getApp()
Page({
  data: {
    text: '取消',
    historyList: [],
    popularList: [
      '上大路', '金桥', '七宝', '泗泾', '五角场', '徐汇', '公寓', '张江', '宝山', '九亭'
    ],
    input: '',
    actionSheetHidden: true
  },
  cancelText: function () {
    wx.navigateBack({
      delta: 2
    })
  },
  handleSearch: function (e) {
    console.log(e, e.currentTarget.dataset.text)
    this.setData({
      input: e.currentTarget.dataset.text
    })
  },
  handleTags: function (e) {
    this.setData({
      input: e.currentTarget.dataset.tag
    })
  },
  handleDelete: function (e) {
    app.globalData.historyText = []
    this.setData({
      historyList: []
    })
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
    console.log(this.data.actionSheetHidden)
  },
  handleCancel: function() {
    console.log(11)
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
    console.log(this.data.actionSheetHidden)
  },
  onLoad: function (options) {
    console.log(app.globalData)
    this.setData({ historyList: app.globalData.historyText })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    navbar: ['首页', '轮播图', '登录'],
    currentTab: 2,
    slider: [],
    swiperCurrent: 0,
    phone: '',
    password:''
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e, e.detail.value)
    wx.showToast({
      title: 'form发生了submit事件',
      icon: 'success',
      duration: 1500
    })
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e, e.detail.value)
    this.setData({
      chosen: ''
    })
  },
  onLoad: function () {
    var that = this;
    //网络访问，获取轮播图的图片
    util.getRecommend(function(data){
      that.setData({
        slider: data
      })
    })
  },
  onShow: function () {
    console.log(getCurrentPages())
  },
  //轮播图的切换事件
  swiperChange: function(e){
  //只要把切换后当前的index传给<swiper>组件的current属性即可
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function(e){
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  phoneInput:function(e) {
    // console.log(e)
    this.setData({ phone: e.detail.value })
   },
  passwordInput:function(e) {
   this.setData({ password: e.detail.value })
  },
  // 登陆
  login: function () {
    console.log(this.data.phone, this.data.password)
    if (this.data.phone !== '' && this.data.password !== '') {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1500
      })
    } else {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 1500
      })
    }
  },
  redirectTo: function () {
    wx.redirectTo({
      url: '../logs/logs'
    })
  }
})
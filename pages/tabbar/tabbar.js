var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    navbar: ['首页', '搜索', '我'],
    currentTab: 1,
    slider: [],
    swiperCurrent: 0
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e, e.detail.value)
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
    }); 
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
  }
})
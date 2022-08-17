var app = getApp()
const api = require('../../utils/home')
Page({
  data: {
    text: "下滑页面即可刷新",
    titleArr: [{ icon: 'success', title: '不收中介费'}, { icon: 'info', title: '租金按月付'}, { icon: 'waiting', title: '服务有保障'}],
    src: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D',
    list: [{icon:'success', text: '整套房源'},{icon:'info', text: '单间房源'}, {icon:'waiting', text: '品牌房源'}, {icon:'success', text: '月付房源'}],
    list1: [
      { icon: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D', title: '地铁周边', des: '地铁附近2公里' },
      { icon: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D', title: '精选单间', des: '1500以下，精致合租' },
      { icon: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D', title: '畅享两居室', des: '家人朋友剧组首选' },
      { icon: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D', title: '品质好房', des: '2000左右，理想生活' },
    ],
    list2: [
      {icon: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D', text: '情侣前先看'},
      {icon: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D', text: '一人安心住'},
      {icon: 'http://ucloud.onemicroworld.com/69AF9975-33AE-9532-0910-76178AD5C356?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=WkrtU4VPS0PRjaHf6AN1nZpW67c%3D', text: '转租房源'},
    ],
    tablelist: [],
    pageNo: 1,
    loading: false,
    noMore: false,
    loadingFailed: false
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        console.log(res, new Date())
      }
    })
  },
  navigateTo() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    this.getData(false)
  },
  scrollToLower: function (e) {
    console.log(e)
    if (!this.data.loading && !this.data.noMore) {
      this.setData({
        loading: true,
        pageNo: this.data.pageNo + 1
      })
      this.getData(true);
    }
  },
  getData(isPage) {
    console.log("需要拼接数据：");
    let params = {
      pageNum: this.data.pageNo,
      pageSize: 10
    }
    //请求
    api.tableList(params, (res,err) => {
      console.log(res)
      this.setData({
        loading: false
      })
      if (err) {//返回失败
        this.setData({
          loadingFailed: true
        })
        return false
      }
      if (res.code === 0) {
        if (isPage) {
          //下一页的数据拼接在原有数据后面
          this.setData({
            tablelist: this.data.tablelist.concat(res.data)
          })
        } else {
          //第一页数据直接赋值
          this.setData({
            tablelist: res.data
          })
        }
        //如果返回的数据为空，那么就没有下一页了
        if (res.data.length === 0) {
          this.setData({
            noMore: true
          })
        }
      } else {
        //返回失败
        this.setData({
          loadingFailed: true
        })
      }
    })
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
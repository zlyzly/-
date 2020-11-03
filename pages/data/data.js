var util = require('../../utils/util.js')
var api = require('../../utils/api.js')
// const app = getApp()
Page({
  data: {
    hideHeader: false,
    hideBottom: false,
    refreshTime: '', // 刷新的时间 
    contentlist: [], // 列表显示的数据源
    allPages: '',    // 总页数
    currentPage: 1,  // 当前页数  默认是1
    loadMoreData: '加载更多……',
    scrollHeight: 0
  },
  onLoad:function(){
    const that = this
    wx.getSystemInfo({  
      success:function(res){  
        console.info(res.windowHeight)
        that.setData({  
          scrollHeight:res.windowHeight  
        }) 
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
   },  
   loadMore:function(){
     console.log('上拉加载更多.')
     var self = this;
    //  该方法绑定了页面滑动到底部的事件
    console.log('loadMore', self.data.currentPage, self.data.allPages)
    // if (self.data.currentPage == self.data.allPages){
    //   self.setData({
    //     loadMoreData: '已经到顶',
    //     hideBottom: false
    //   })
    //   return;
    // } else {
    self.setData({
      loadMoreData: '上拉加载更多...',
      hideBottom: true
      // currentPage: self.data.currentPage++
    })
    // }
    setTimeout(function(){
      console.log('上拉加载更多');
      self.setData({
        hideBottom: false  
      })
      self.loadData();  
    },2000);
   },
   refresh() {
    console.log('下拉刷新');
    var self = this;
    self.setData({
      currentPage: 1,
      hideHeader: true
    })
    setTimeout(function(){
      var date = new Date();
      self.setData({
        currentPage: 1,
        refreshTime: date.toLocaleTimeString(),
        hideHeader: false
      })
      self.loadData();
    },2000);
  },
 /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    wx.showToast({
      title: 'onPullDownRefresh',
    })
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
    const self = this
    self.setData({
      loadMoreData: '上拉加载更多...',
      hideBottom: true
    })
    setTimeout(function () {
      self.setData({
        loadMoreData: '',
        hideBottom: false
      })
    },2000)
    // wx.showToast({
    //   title: 'onReachBottom',
    // })
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
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],
  properties: {
  },
  data: {
    text: 'tabs',
    list: ['AAAAA', 'BBBBB'],
    firstList: ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
    secondList: ["GFF", "GFF", "GFF", "GFF", "GFF", "GFF"],
    active: 0
  }, // 私有数据，可用于模板渲染
  methods: {
    changeTabs: function(e) {
      console.log(e)
      this.setData({
        active: e.currentTarget.dataset.idx
      })
    },
     //swiper切换时会调用
    pagechange: function (e) {
      console.log(e)
      if ("touch" === e.detail.source) {
        let currentPageIndex = this.data.active
        currentPageIndex = (currentPageIndex + 1) % 2
        this.setData({
          active: currentPageIndex
        })
      }
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function(){
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function(newVal, oldVal) {

    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  }
})
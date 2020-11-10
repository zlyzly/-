Component({
  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持
  // },
  // behaviors: [],
  properties: {
    actionSheetHidden: {
      type: Boolean,
      value: true
    }
  },
  data: {
    actionSheetItems: ['item1', 'item2', 'item3', 'item4']
  },
  methods: {
    actionSheetChange: function(e) {
      this.setData({
        actionSheetHidden: !this.properties.actionSheetHidden
      })
    },
    bind: function(item) {
      console.log(item)
    },
    cancel: function () {
      this.triggerEvent('cancel')
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
  ready: function() {
  },

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

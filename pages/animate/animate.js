//获取应用实例
const app = getApp()
Page({
  data: {
    animationData: {}
  },
  onLoad: function () {
  },
  onReady:function () {
  },
  onShow: function(){
    // 1创建一个动画实例 animation
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 1000
    })
   
    // 2调用实例的方法来描述动画。
    this.animation = animation
    animation.opacity(0.2).translate(100, 100).step()
    // 3最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
    this.setData({
      animationData:animation.export()
    })

    setTimeout(function() {
      // 2调用实例的方法来描述动画。
      animation.opacity(1).translate(0, 200).step()
      // 3 
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 2000)
    setTimeout(function() {
      animation.rotate3d(0, 100, 0, 180).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 4000) // 因为有延迟的1000所以要往后推1000 否则和上一个动画同时完成的
    console.log(this.animation)
  },
  // rotateAndScale: function () {
  //   // 旋转同时放大
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.setData({
  //     animationData: this.animation.export()
  //   })
  // },
  // rotateThenScale: function () {
  //   // 先旋转后放大
  //   this.animation.rotate(45).step()
  //   this.animation.scale(2, 2).step()
  //   this.setData({
  //     animationData: this.animation.export()
  //   })
  // },
  // rotateAndScaleThenTranslate: function () {
  //   // 先旋转同时放大，然后平移
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.animation.translate(100, 100).step({ duration: 1000 })
  //   this.setData({
  //     animationData: this.animation.export()
  //   })
  // }
})

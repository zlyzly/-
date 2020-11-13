// const upload = require('../../utils/upload')
const api = require('../../api/upload')
console.log(api)
// import { createUploadFile, uploadToThirdService, informUploadFileSuccess } from '../api/upload'
Page({
  data: {
    text: "This is page me.",
    tempFilePaths: '',  
    imgwidth:0, 
    imgheight:0,
  },
  /**  
   * 上传图片 
   */  // 图片本地路径
  chooseWxImage: function () {  
    var _this = this;  
    wx.chooseImage({  
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths:res.tempFilePaths  
        })
        wx.getImageInfo({ 
          src: res.tempFilePaths[0], 
          success: function (res) { 
            console.log(res)
            _this.setData({ 
              imgwidth:res.width, 
              imgheight:res.height, 
            })
            // 请求后端拿到图片的url
            // const file = {
            //   type: 1,
            //   width: res.width,
            //   height: res.height,
            //   mime_type: 'image/' + res.type
            // }
            // api.createUploadFile(file).then(fileInfo => {
            //   // file_id: "3D0D745A-1573-5B2F-FA75-C573F626BB24"
            //   // file_url: "https://cdn-image.onemicroworld.com/3D0D745A-1573-5B2F-FA75-C573F626BB24?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=gOvndE5Av5mmMcwqWwV3lfwPLUY%3D"
            //   // signature: "UCloud qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P:5gt/Cp6NxwJUjtqcfhqqFBH7szc="
            //   // thumbnail_id: ""
            //   // thumbnail_signature: ""
            //   // thumbnail_url: ""
            //   console.log('createUploadFile success:', fileInfo)
            //   const fileForm = new FormData()
            //   fileForm.append('FileName', fileInfo.file_id)
            //   fileForm.append('Authorization', fileInfo.signature)
            //   fileForm.append('Content-Type', params.file_type)
            //   const nameArr = file.name.split('.')
            //   const fileType = nameArr[nameArr.length - 1]
            //   const newFile = new File([file], fileInfo.file_id + '.' + fileType, { type: file.type })
            //   fileForm.append('file', newFile)
            //   console.log('fileForm:', fileForm)
            //   api.uploadToThirdService(fileForm).then(thirdResp => {
            //     console.log('uploadToThirdService success:', thirdResp)
            //     api.informUploadFileSuccess({
            //       file_id: fileInfo.file_id
            //     }).then(informResp => {
            //       console.log('informUploadFileSuccess success:', informResp)
            //       resolve(Object.assign({}, { fileInfo: fileInfo }, { thirdResp: thirdResp }, { informResp: informResp }, { key: key }, { imgInfo: {
            //         type: file.type,
            //         size: file.size,
            //         name: file.name,
            //         width: createParams.width,
            //         height: createParams.height
            //       }}))
            //     })
            //   })
            // })  
          } 
        })  
      }  
    })  
  },
 
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    console.log('me页面隐藏')
    // Do something when page hide.
  },
  onUnload: function () {
    console.log('me页面被销毁')
  // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  }
})
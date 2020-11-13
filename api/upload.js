export function createUploadFile (params) {
  wx.request({
    url: 'backend/file',
    method: 'post',
    data: params,
    header: {
      'Authorization': 'Bearer ' + '3fd32e2c4af2bef63864c13c8af64e92b7e113ec'
    },
    success: (res) => {
      return res
    },
    fail: (err) => {
      wx.showToast({
        title: '报错了'
      })
    }
  })
}

export function uploadToThirdService () {
  wx.request({
    url: 'https://new-mini-world.cn-bj.ufileos.com',
    method: 'post',
    data: params,
    header: {
      'Authorization': 'Bearer ' + '3fd32e2c4af2bef63864c13c8af64e92b7e113ec',
      'Content-Type': 'multipart/form-data'
    },
    success: (res) => {
      return res
    },
    fail: (err) => {
      wx.showToast({
        title: '报错了'
      })
    }
  })
}
export function informUploadFileSuccess(params) {
  return uploadRequest({
    url: 'backend/file',
    method: 'put',
    headers: { 'Authorization': 'Bearer ' + '3fd32e2c4af2bef63864c13c8af64e92b7e113ec' },
    data: params
  })
}
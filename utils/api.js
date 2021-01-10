var Mock = require('./mockjs')
// console.log(Mock)
function getdata(callback) {
  var res = Mock.mock({
    'total': 100,
    'data|10': [{
      'id|+1': 1,
      'img': "https://cdn-image.onemicroworld.com/496F64F8-4A79-C03B-4EE9-989549D85FE2?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=ge9HKTQQwKTewuZmhfwNoT5zgmA%3D&iopcmd=thumbnail&type=8&width=900&height=1000",
      'title': '景点' + '@integer(0,100)',
      'description': '@cparagraph(1, 2)',
      'stock_num': '@integer(0,100)',//库存数量  
      'date': '@now()',
      'price': '@integer(100,2000)',//现价，单位：分
    }]
  })
  // console.log('api', res)
  callback(res)
  // wx.request({
  //   success: function (res) {
  //     console.log(res)
  //     callback(res)
  //   }
  // })
}
function getfirst(callback) {
  var res = Mock.mock({
    'data|10': [{
      'title': '@cparagraph(1, 2)'
    }]
  })
  callback(res)
}
function getsecond(callback) {
  var res = Mock.mock({
    'data|10': [{
      'name': '@cname(1, 2)',
      'age':'@integer(0,100)'
    }]
  })
  callback(res)
}
function getPullData(callback) {
  var res = Mock.mock({
    'total': 100,
    'list|20': [{
      'name': '@cparagraph(1)'
    }]
  })
  callback(res)
}
module.exports = {
  getdata,
  getfirst,
  getsecond,
  getPullData
}
const Mock = require('./mockjs')
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
// home 数据
function tableList(params, callback) {
  console.log(params)
  const items = ['独卫', '电梯房', '近地铁', '新房源']
  if (params.pageNum < 10) {
    let res = Mock.mock({
      'code': 0,
      'data|10': [{
        'id|+1': 1,
        'img': "https://cdn-image.onemicroworld.com/496F64F8-4A79-C03B-4EE9-989549D85FE2?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=ge9HKTQQwKTewuZmhfwNoT5zgmA%3D&iopcmd=thumbnail&type=8&width=900&height=1000",
        'title': '整租 (' + '@csentence(3, 5)' + ')',
        'address': '@csentence(3, 5)',//库存数量  
        'price': '@integer(1000,10000)',
        'num': '@integer(0,50)',
        'tag': getRandomArrayElements(items, 3)
      }]
    })
    callback(res)
  } else {
    callback({ code: 0, data: [] })
  }
}
module.exports = {
  tableList
}
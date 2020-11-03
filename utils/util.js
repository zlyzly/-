const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getRecommend(callback) {
   const data = {
     silder: [
       {url: 'https://cdn-image.onemicroworld.com/A283D43C-794E-CAF2-E755-A216EF5AC9A4?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=OF4jPaQoEmxxbR%2FCryQvZ0NhJrY%3D&iopcmd=thumbnail&type=8&width=900&height=1000'},{url: 'https://cdn-image.onemicroworld.com/C5E828A1-C607-8D88-01EC-1C0E5EF3D019?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=PfmWzY6Up4loWZaS%2BTuVmIiX7RQ%3D&iopcmd=thumbnail&type=8&width=900&height=1000'},
       {url: 'https://cdn-image.onemicroworld.com/EE1B9F25-59E3-3737-1531-F99061C08D2A?UCloudPublicKey=qgchM9CFzaKL9XWizIjY4EXmtmtDqPoFCr69qE5P&Signature=JOyW3fglkOYeBGqC%2BPA741%2FZC%2Bs%3D&iopcmd=thumbnail&type=8&width=900&height=1000'},
     ]
   }
  callback(data.silder);
}

// 下拉加载数据
function loadData(callback) {
  let res = {}
  const list = []
  for (let index = 0; index < 20; index++) {
    list.push({title: `第${index + 1}条数据`})
    res = {
      list: list,
      allPage: 10
    }
  }
  callback(res)
}
module.exports = {
  formatTime,
  getRecommend,
  loadData
}
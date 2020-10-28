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

module.exports = {
  formatTime: formatTime
}

function getRecommend(callback) {
  const data = {
    slider: [
      {id: '1', url: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1603621030&di=c4b77dddca17d4ac7309c3983ec971d3&src=http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg'},
      {id: '1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603631176464&di=a539650e4c8cea1b297bf68652bad85b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'},
    ]
  }
  // wx.request({
  //   url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  //   data: {
  //     g_tk: 5381,
  //     uin: 0,
  //     format: 'json',
  //     inCharset: 'utf-8',
  //     outCharset: 'utf-8',
  //     notice: 0,
  //     platform: 'h5',
  //     needNewCode: 1,
  //     _: Date.now()
  //   },
  //   method: 'GET',
  //   header: {'content-Type': 'application/json'},
  //   success: function(res){
      // if(data.statusCode == 200)
        callback(data.slider);
      // }
    // }
  // })
}
 
module.exports = {
  getRecommend: getRecommend
}
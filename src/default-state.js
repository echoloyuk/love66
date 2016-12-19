import React from 'react';

export default {
  name: '我们的爱情故事',
  subName: '2014/04/10 - now',
  timmerOn: false, // 用于设置自动timmer
  timeSeed: 0, // 用于计时器种子
  wait: 10, // 用于翻页的时间
  bookOpen: false, 
  page: 0,
  pageContext: [
    {
      code: {
        start: false,
        context: 
`
// 我们的故事留在了国外
we.at('2016-06-02').go('日本', function (go) {
  // 我们去日本吃海鲜
  go.push('心斋桥');
  // 环球影城的狂欢
  go.push('环球影城');
  // 一起去看小鹿
  go.push('奈良');
  // 一起走过京都稻荷大社
  go.push('京都');
  // 一起去看灌篮高手的那个路口
  go.push('镰仓');
  // 感谢你陪我去了两次秋叶原 :-D
  go.push('东京').add('皇居', '秋叶原');
});
`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/images/1.jpg', 
          './assets/images/2.jpg'
        ]
      },
      wait: 50
    }, {
      code: {
        start: false,
        context: 'this is a test'
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/images/3.jpg', 
          './assets/images/4.jpg'
        ]
      },
      wait: 4
    }, {
      code: {
        start: false,
        context: '你好啊！！！'
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/images/5.jpg', 
          './assets/images/2.jpg'
        ]
      },
      wait: 1
    }
  ]
}
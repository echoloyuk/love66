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
// 新的故事发生在那年情人节
var date = new Date('2015-02-14');
we.watchMovie('饥饿游戏');
// 还记得这家西餐厅吗？
i.invite(you).to('FLO福楼餐厅', function () {
  // 那天我们留下了第一张正式的合影
  you.accept(i);
});
// 我会永远记住这一天。
const START = new Date('2015-04-10');
// 那天你同意了我的追求。
i.setGirlFriend(you);
// 我成为了天下最幸福的男人！
i.happiness += 10000000;
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
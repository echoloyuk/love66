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
// 渐渐的发现，我喜欢上了你
i.found(i.like(you));
// 于是，我决定：追你!
i.decide(Chase(you));
i.action.push(function () {
  // 于是我开始减肥
  i.weight -= 50;
  // 尝试了解你
  i.load(you.getInfo('生日','爱好', ...args));
  // 加入你No.1的社团
  i.join(you.getParty(1), function (){
    // 为你而加入我这辈子可能都不会加入的舞蹈团
    i.try(Dance());
    // 只为多看你几眼
    i.see(you);
    // 只为下班多和你走一程
    i.route = you.getWayToHome();
  });
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
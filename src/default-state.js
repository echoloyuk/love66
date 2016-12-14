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
// 功夫不负有心人, 你在那一天开始同意与我接触
var date1 = new Date('2014-08-02');
// 那一天起，开始有了属于我们的故事
var we = new Stroy(you, i);
we.try(function {
  // 我们第一次看电影
  we.watchMovie().at('2014-08-03');
  // 我们第一次约会
  we.goto('首都师范大学', function () {
    // 第一次牵你的手
    i.hand(you.getHand());
  }).at('2014-08-14');
  // 第一次和你呆满一整个白天。
  we.goto('颐和园').at('2014-08-24');
}).catch(function (e) {
  // 虽然你一直在犹豫。
  you.hesitate(i);
}).finally(function () {
  // 但我从未改变过。
  i.ensure(you);
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
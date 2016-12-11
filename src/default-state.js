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
var a = 5;
var love = function (a) {
  a.love(b);
};
`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/images/1.jpg', 
          './assets/images/2.jpg'
        ]
      },
      wait: 9000
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
      wait: 4000
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
      wait: 1000
    }
  ]
}
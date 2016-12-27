import React from 'react';
import Heart from './components/heart/heart.js';

export default {
  name: 'Our Stroy',
  subName: 'Since 2011-07-29',
  others: '这本书送给我亲爱的6宝宝',
  timmerOn: false, // 用于设置自动timmer
  timeSeed: 0, // 用于计时器种子
  wait: 10, // 用于翻页的时间
  bookOpen: false, 
  page: 0,
  rotateStage: false,
  bgMusic: './assets/audio/always_with_me.mp3',
  bgPlay: false,
  init: true,
  pageContext: [
    {
      code: { // 20s
        start: false,
        context: 
`// 这是一个关于马先生和六宝宝的故事。
// date: 2011-07-29
var i = new Boy('马驰');
// 那一年我加入了航信，分到了飞8
i.join('航信素质拓展', '飞8');
// 我认识了你。你说你叫刘柳
var you = new Girl('刘柳');
// 我们第一次缘分在这里开始，重要的是：
i.remember(you);
// 渐渐的发现，我喜欢上了你
i.found(i.like(you));
// 于是，我决定：追你!
i.decide(Chase(you));
// 于是我开始减肥
i.weight -= 50;
// 尝试了解你
i.load(you.getInfo('生日','爱好', ...args));
// 为你而加入我这辈子可能都不会加入的舞蹈团
i.join(you.getParty(1));`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/1/1.jpg',
          './assets/src/1/2.jpg',
          './assets/src/1/5.jpg',
          './assets/src/2/2.jpg',
          './assets/src/2/1.jpg'
        ],
        interval: 3200
      },
      wait: 26
    }, {
      code: {
        start: false,
        context: 
`// 功夫不负有心人, 你在那一天开始同意与我接触
var date1 = new Date('2014-08-02');
// 那一天起，开始有了属于我们的故事
var we = new Stroy(you, i);
we.try(function () {
  // 我们第一次看电影
  we.watchMovie().at('2014-08-03');
  // 第一次牵你的手
  i.hand(you.getHand()).at('2014-08-14');
  // 第一次和你呆满一整个白天。
  we.goto('颐和园').at('2014-08-24');
});
// 那天我们留下了第一张正式的合影
i.invite(you).to('FLO福楼餐厅').at('2015-02-14');
// 我会永远记住这一天。
const START = new Date('2015-04-10');
// 那天你同意了我的追求。
you.setBoyFriend(i);
// 我成为了天下最幸福的男人！
i.happiness += 10000000;`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/3/1.jpg',
          './assets/src/3/2.jpg',
          './assets/src/3/3.jpg',
          './assets/src/3/4.jpg',
          './assets/src/3/5.jpg',
          './assets/src/4/1.jpg'
        ]
      },
      wait: 30
    }, {
      code: {
        start: false,
        context: 
`// 我们第一次携手出行
we.at('2016-05-02').go('天津', function (go) {
  // 第一次带你认识我的学校
  go.push('民航大学');
  // 去起士林餐厅
  go.push('起士林');
  // 我们写下了第一个属于我们的愿望
  we.push(new Wishes());
  // 一起骑着单车
  we.ride('bicycle').go('五大道');
});
// 从那时起，我就决定，bring you to go anywhere.
i.decide(i.goWith(you));`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/5/1.jpg',
          './assets/src/5/2.jpg',
          './assets/src/5/3.jpg',
          './assets/src/5/4.jpg',
          './assets/src/5/5.jpg',
          './assets/src/5/6.jpg',
          './assets/src/5/7.jpg',
          './assets/src/5/8.jpg',
          './assets/src/5/9.jpg',
        ],
        interval: 2600
      },
      wait: 28
    }, {
      code: {
        start: false,
        context: 
`// 第一次去海边
we.at('2015-07-04').go('南戴河', function (go) {
  // 一起踏上旅行的火车
  we.on(new Train('北京', '昌黎'));
  // 我们一起去沙滩
  go.push('沙滩');
  // 一起许愿
  we.do('孔明灯');
  // 一起看日出
  we.do(SUN.rise());
  // 留下属于我们的印记
  we.do('MC ❤️ 66').at('沙滩');
});`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/6/2.jpg',
          './assets/src/6/3.jpg',
          './assets/src/6/4.jpg',
          './assets/src/6/5.jpg',
          './assets/src/6/6.jpg',
          './assets/src/6/7.jpg',
          './assets/src/6/8.jpg',
          './assets/src/6/9.jpg',
        ],
        interval: 2700
      },
      wait: 28
    }, {
      code: {
        start: false,
        context: 
`// 那段时间，你出差去成都。
you.do('出差').go('成都', function () {
  // 你说你从未出北京过过生日
  // 我飞到成都，只为给你一个愉快的周末和不孤单的生日
  i.go('成都').toSee(you);
  // 吃了让我难以忘怀的火锅
  we.go('大宅门').to('火锅');
  we.go('皇城老妈').to('火锅');
  // 牵手走过成都的大街小巷
  we.go('宽窄巷子');
  we.go('武侯祠');
  we.go('锦里');
});`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/7/1.jpg',
          './assets/src/7/2.jpg',
          './assets/src/7/3.jpg',
          './assets/src/7/4.jpg',
          './assets/src/7/5.jpg',
          './assets/src/7/6.jpg',
          './assets/src/7/7.jpg',
          './assets/src/7/9.jpg',
        ],
        interval: 2500
      },
      wait: 27
    }, {
      code: {
        start: false,
        context: 
`// 那一天，我们第一次出国旅行
we.at('2016-06-02').go('日本', function (go) {
  // 陪你去吃吃海鲜
  go.push('心斋桥');
  // 感谢你陪我到环球影城的狂欢
  go.push('环球影城');
  // 我们一起去看小鹿
  go.push('奈良');
  // 一起走过京都稻荷大社
  go.push('京都');
  // 一起去看灌篮高手的那个路口
  go.push('镰仓');
  // 谢谢你陪我去了两次秋叶原 :-D
  go.push('东京').add('皇居', '秋叶原');
});`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/8/1.jpg',
          './assets/src/8/4.jpg',
          './assets/src/8/5.jpg',
          './assets/src/8/7.jpg',
          './assets/src/8/8.jpg',
          './assets/src/8/1.mp4',
          './assets/src/8/9.jpg',
          './assets/src/8/22.jpg',
          './assets/src/8/33.jpg',
          './assets/src/8/44.jpg',
        ],
        interval: 2300
      },
      wait: 27
    }, {
      code: {
        start: false,
        context: 
`// 有暴走，当然也有休闲
we.at('2016-12-17').go('三亚', function (go) {
  // 一起在沙滩度过美好的时光
  we.playIn(new Beach());
  // 水中嬉戏
  we.jump().in(new Pool());
  // 阳光中漫步
  you.love('coconut');
  // 小憩
  you.restIn(Hotel.hall);
});
// 我们一起战胜帝都雾霾
try {
  we.back('北京');
} catch (e) {
  we.go('西安');
} finally {
  we.go('北京').from('西安');
}`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/9/1.mp4',
          './assets/src/9/2.jpg',
          './assets/src/9/2.mp4',
          './assets/src/9/5.jpg',
          './assets/src/9/6.jpg',
          './assets/src/9/7.jpg',
          './assets/src/9/8.jpg',
          './assets/src/9/9.jpg',
        ],
        interval: 2800
      },
      wait: 25
    }, {
      code: {
        start: false,
        context: 
`// 回忆我们的故事，我们一起度过了很多...
Stroy.about(we);
// 我们在一起，过着平凡而又不平淡的日子
// 我们有过一些争吵，但我们发现离不开彼此
// 我们一起去参加朋友的婚礼
// 我们一起参加朋友的聚会
// 我们和彼此的家人在一起
// 我们在节日的时候回给对方小惊喜
// 我们一样爱吃、爱玩
// 我们去过彼此留下回忆的地方
// 未来的故事还有很多
Stroy.toBeContinued();
// 我愿意
i.will(function () {
  // 关心你，照顾你
  CareAbout(you);
  // 陪你去你任何想去的地方
  GoWith(you) && PlayWith(you);
  // 做一个你可以依靠的人
  Support(you);
});`
      }, 
      imgs: {
        start: false,
        urls: [
          './assets/src/10/0.jpg',
          './assets/src/10/1.jpg',
          './assets/src/10/2.jpg',
          './assets/src/10/3.jpg',
          './assets/src/10/4.jpg',
          './assets/src/10/8.jpg',
          './assets/src/10/9.jpg',
          './assets/src/10/12.jpg',
          './assets/src/10/13.jpg',
          './assets/src/10/14.jpg',
          './assets/src/10/15.jpg',
          './assets/src/10/16.jpg',
          './assets/src/10/17.jpg',
          './assets/src/10/18.jpg',
          './assets/src/10/19.jpg',
          './assets/src/10/20.jpg',
        ],
        interval: 2400
      },
      wait: 38
    }, {
      code: {
        start: false,
        speed: 300,
        big: true,
        context: 
`// 66:
i.love(you);
'Marry Me!'`
      }, 
      right: <Heart />,
      wait: 10
    },
  ]
}
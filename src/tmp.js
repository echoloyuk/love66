// ------
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
i.join(you.getParty(1));

// ------
// 功夫不负有心人, 你在那一天开始同意与我接触
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
i.happiness += 10000000;


// ------
// 我们的第一次旅行
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
i.decide(i.goWith(you));


// ------
// 第一次去海边
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
});

// ------
// 那段时间，你出差去成都。
you.do('出差').go('成都', function () {
  // 你说你从未出北京过过生日
  // 于是飞到程度，只为给你一个愉快的周末和不孤单的生日
  i.go('成都').toSee(you);
  // 吃了让我难以忘怀的火锅
  we.go('大宅门').to('火锅');
  we.go('皇城老妈').to('火锅');
  // 牵手走过成都的大街小巷
  we.go('宽窄巷子');
  we.go('武侯祠');
  we.go('锦里');
});

// ------
// 那一天，我们第一次出国旅行
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
});

// ------
// 有暴走，当然也有休闲
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
}

// ------
// 故事还在继续，也会一直继续。
// 回忆我们的故事，我们一起度过了很多...
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


// ------
i.love(you);






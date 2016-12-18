// ------
// date: 2011-07-29
var i = new Boy('马驰');
// 那一年我加入了航信，分到了飞8
i.join('航信素质拓展', '飞8');
// 我认识了你。你说你叫刘柳
var you = new Girl('刘柳');
// 我们第一次缘分在这里开始
you.team = i.team;
// 重要的是：
i.remember(you);
// 从那时起，日复一日
while (i++ < 10000000000000) {
  // 我发现我不能忘记你
  i.not(i.forget(you));
  if (i.see() === you.see()) {
    // 见到你会心跳加速
    i.heartBeat += 50;
    // 和你说话会紧张
    throw {error(i.nervous());};
  }
}

// ------
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

// ------
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

// ------
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






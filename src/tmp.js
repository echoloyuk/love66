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
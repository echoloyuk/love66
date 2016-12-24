import React from 'react';
const {Component, PropTypes} = React;
import classNames from 'classnames';

import css from './heart.less';

class Heart extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      year:0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
    this._o = new Date('2015/04/10');
  }
  componentDidMount() {
    setInterval(() => {
      this.onTime();
    }, 1000);
  }
  onTime() {
    let o = this._o;
    let n = new Date();
    let s = Math.floor((n.getTime() - o.getTime()) / 1000);
    const Y = 3600 * 24 * 365,
      M = 3600 * 24 * 30,
      D = 3600 * 24,
      H = 3600,
      MI = 60;

    let year = Math.floor(s / Y);
    s = s % Y;
    let month = Math.floor(s / M);
    s = s % M;
    let day = Math.floor(s / D);
    s = s % D;
    let hour = Math.floor(s / H);
    s = s % H;
    let minute = Math.floor(s / MI);
    s = s % MI;
    let second = Math.floor(s);

    month = '' + (month > 9 ? month : '0' + month);
    day = '' + (day > 9 ? day : '0' + day);
    hour = '' + (hour > 9 ? hour : '0' + hour);
    minute = '' + (minute > 9 ? minute : '0' + minute);
    second = '' + (second > 9 ? second : '0' + second);

    this.setState({year, month, day, hour, minute, second})
  }
  render() {
    const {
      year,
      month,
      day,
      hour,
      minute,
      second
    } = this.state;
    return (
      <section className="heart-wrap">
        <div className="heart-bg"></div>
        <div className="heart-content">
          <div className="h1">66, 我们在一起已经走过了:</div>
          <div className="counter">
            <span className="num">{year}</span>年
            <span className="num">{month}</span>月
            <span className="num">{day}</span>天
            <span className="num">{hour}</span>时
            <span className="num">{minute}</span>分
            <span className="num">{second}</span>秒
          </div>
          <div className="h2">——爱你的马先生</div>
        </div>
      </section>
    )
  }
}

export default Heart;
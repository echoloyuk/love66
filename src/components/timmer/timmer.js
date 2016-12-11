import React from 'react';
const {Component, PropTypes} = React;

class Timmer extends Component {
  constructor(props) {
    super(props);
    this._timmer = null;

    if (this.props.on) {
      this.doTimmer();
    }
  }
  componentWillReceiveProps(props) {
    const {on: oldOn, timeSeed: oldTimeSeed} = this.props;
    const {on: newOn, timeSeed: newTimeSeed, time} = props;
    if (newOn && oldTimeSeed !== newTimeSeed) {
      this.doTimmer(time);
    }
  }
  doTimmer(time) {
    const {onTime} = this.props;
    clearTimeout(this._timmer);
    this._timmer = setTimeout(() => {
      if (onTime) {
        onTime();
      }
    }, time);
  }
  render() {
    return <div/>;
  }
}

export default Timmer;

import React from 'react';
const {Component, PropTypes} = React;
import classNames from 'classnames';

import css from './typewriter.less';

class Typewriter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panel: [],
      active: ''
    }
    this.line = 0;
    this.col = 0;
    this.timmer = null;
    this.data = null;

    let data = this.props.children;
    if (typeof data === 'string') {
      this.data = data.split(/\r|\n/);
    }
  }

  doAni() {
    let data = this.data || this.props.data;
    let {line, col} = this;
    let {panel, active} = this.state;

    if (!data) {
      return;
    }

    let flag = false;
    if (line < data.length) {
      if (col < data[line].length) {
        active = active + data[line].charAt(col);
        col++;
        flag = true;
      } else { //换行或者最后一行
        if (line < data.length - 1) { // 换行
          panel.push(active);
          active = '';
          col = 0;
          line++;
          flag = true;
        } else {
          flag = false;
        }
      }
    }
    if (flag) {
      this.setState({
        active: active,
        panel: panel,
      });
      this.line = line;
      this.col = col;
    } else {
      this.props.onFinished && this.props.onFinished();
    }
    console.log('frame rendered');
  }

  componentWillReceiveProps(next) {
    if (!this.props.start && next.start) {
      this.setState({
        panel: [],
        active: ''
      });
      this.line = 0;
      this.col = 0;
    }
  }

  render() {
    const {panel, active} = this.state;
    const {start} = this.props;

    if (start) {
      clearTimeout(this.timmer);
      this.timmer = setTimeout(this.doAni.bind(this), 72);
    }

    const comReg = /^([\s]{0,}\/\/)/;
    const actCls = classNames({
      't-active': true,
      'comment': comReg.test(active)
    });

    return (
      <div className="typewriter-panel">
        {panel.map((item, index) => {
          const cls = classNames({
            't-code-panel': true,
            'comment': comReg.test(item)
          });
          return <pre className={cls} key={index}>{item}</pre>;
        })}
        <pre className={actCls}>{active}<span className="pointer"></span></pre>
      </div>
    )
  }
}

export default Typewriter;
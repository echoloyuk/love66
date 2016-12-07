import React from 'react';
const {Component, PropTypes} = React;
import classNames from 'classnames';

import css from './photos.less';

const IMG_INTERVAL = 3000;
const DIRECTION = ['top', 'right', 'bottom', 'left'];

class Photos extends Component {
	constructor(props) {
    super(props);
    this.state = {
      inIndex: null,
      outIndex: null,
      dir: []
    };

    this.timmer = null;
    this.flag = 0; // 记录是否都被遍历了。
  }

  componentDidMount() {

  }

  componentWillReceiveProps(next) {
    if (!this.props.start && next.start) {
      this.flag = 0;
    }
  }

  doAni() {
    let {inIndex, outIndex} = this.state;
    let {urls, onFinish} = this.props;

    const count = urls.length;

    if (null === inIndex) {
      inIndex = 0;
    } else {
      outIndex = inIndex;
      inIndex = (inIndex + 1) % count;
    }

    this.setState({
      inIndex, outIndex,
      dir: this.getDir()
    });

    if (this.flag < outIndex) {
      this.flag = outIndex;
    }
    if (this.flag === count - 1) {
      this.flag = count;
      if (typeof onFinish === 'function') {
        onFinish.call();
      }
    }
    console.log('frame action');
  }

  getDir() {
    let count = DIRECTION.length;
    let i = Math.floor(Math.random() * count);
    let _i = (i + 2) % count;
    return [
      DIRECTION[i],
      DIRECTION[_i]
    ];
  }

  render() {
    const {start, urls, interval} = this.props;
    const {inIndex, outIndex, dir} = this.state;
    let self = this;

    if (start) {
      clearTimeout(this.timmer);
      this.timmer = setTimeout(this.doAni.bind(this), interval || IMG_INTERVAL);
    }

  	return (
  		<div className="photos-panel">
        {
          urls.map((item, index) => {
            let cls = {'photos-img': true};
            let zIndex = 1;
            if (index === inIndex) {
              cls[dir[0] + '-in'] = true;
              zIndex = 3;
            }
            if (index === outIndex) {
              cls[dir[1] + '-out'] = true;
              zIndex = 2;
            }
            cls = classNames(cls);

            return (<div 
              key={index} 
              className={cls} 
              style={{backgroundImage: 'url("' + item + '")', zIndex: zIndex}}
              ></div>);
          })
        }
  		</div>
  	)
  }
}

export default Photos;
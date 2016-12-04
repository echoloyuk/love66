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
  }

  componentDidMount() {

  }

  componentWillReceiveProps(next) {
    if (!this.props.start && next.start) {

    }
  }

  doAni() {
    let {inIndex, outIndex} = this.state;
    let urls = this.props.urls;

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
    const {start, urls} = this.props;
    const {inIndex, outIndex, dir} = this.state;
    let self = this;

    if (start) {
      clearTimeout(this.timmer);
      this.timmer = setTimeout(this.doAni.bind(this), IMG_INTERVAL);
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
import React from 'react';
import classnames from 'classnames';

import css from './stage.less'

import Typewriter from './components/typewriter/typewriter.js';
import Photos from './components/photos/photos.js';
import Book from './components/book/book.js';

const {Component} = React;
const cx = classnames.bind(css);

let _p = 0;

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      page: 0,
      p1: false,
      p2: false,
      p3: false,
      p4: false
    }
  }
  render() {
    const {open, page, p1, p2, p3, p4} = this.state;
    return (
      <section className="stage-wrap">
        <Book open={open} page={page}>{[
          {
            left: <div>l-1</div>,
            right: <Photos urls={['./assets/images/1.jpg', './assets/images/2.jpg']} start={p1} onFinish={this.onPage(0)} />
          }, {
            left: <div>l-2</div>,
            right: <Photos urls={['./assets/images/3.jpg', './assets/images/4.jpg']} start={p2} onFinish={this.onPage(1)} />
          }, {
            left: <div>l-3</div>,
            right: <Photos urls={['./assets/images/5.jpg', './assets/images/1.jpg']} start={p3} onFinish={this.onPage(2)} />
          }, {
            left: <div>l-4</div>,
            right: <Photos urls={['./assets/images/3.jpg', './assets/images/4.jpg']} start={p4} />
          },
        ]}</Book>
        <div style={{position:'absolute',zIndex:'100',left:0,top:0,background:'#ff0'}} onClick={this.open.bind(this)}>ok</div>
      </section>
    );
  }
  open() {
    this.setState({
      open: true,
      p1: true
    });
  }
  onPage(p) {
    return () => {
      console.log(p);
      let tmp = {
        page: p + 1
      }
      tmp['p' + (p + 2)] = true;
      this.setState(tmp);
    }
  }
}

export default Stage;
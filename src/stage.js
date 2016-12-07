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
      page: 0,
      p1: true,
      p2: false,
      p3: false,
      p4: false
    }
  }
  render() {
    const {page, p1, p2, p3, p4} = this.state;
    return (
      <section className="stage-wrap">
        <Book page={page}>{[
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
      </section>
    );
  }
  onPage(p) {
    return () => {
      console.log(p);
      let tmp = {
        page: p + 1
      }
      tmp['p' + (p + 2)] = true;
      console.log(tmp);
      this.setState(tmp);
    }
  }
}

export default Stage;
import React from 'react';
import classnames from 'classnames';

import css from './stage.less'

import Typewriter from './components/typewriter/typewriter.js';
import Photos from './components/photos/photos.js';
import Book from './components/book/book.js';

const {Component} = React;
const cx = classnames.bind(css);

const tmpData = [
  './assets/images/1.jpg',
  './assets/images/2.jpg',
  './assets/images/3.jpg',
  './assets/images/4.jpg',
  './assets/images/5.jpg',
];

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aniStart: false
    }
  }
  render() {
    return (
      <section className="stage-wrap">
        <Book>
          
        </Book>
      </section>
    );
  }
  onClick() {
    this.setState({
      aniStart: true
    });
  }
}

export default Stage;
import React from 'react';
import classnames from 'classnames';

import css from './stage.less'

import Typewriter from './components/typewriter/typewriter.js';

const {Component} = React;
const cx = classnames.bind(css);

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
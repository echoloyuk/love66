import React from 'react';
const {Component, PropTypes} = React;
import classNames from 'classnames';

import css from './cover.less';

class Cover extends Component {
  constructor(prop) {
    super(prop);
  }
  render() {
    const {show} = this.props;
    if (show) {
      return (
        <section className="cover">
          {this.props.children}
        </section>
      )
    } else {
      return null;
    }
  }
}

export default Cover;

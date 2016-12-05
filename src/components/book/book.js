import React from 'react';
const {Component, PropTypes} = React;
import classNames from 'classnames';

import css from './book.less';

class Book extends Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <div className="book">
        <div className="page" style={{zIndex:3}}>
          <div className="left">Left1</div>
          <div className="right">Right1</div>
        </div>
        <div className="page" style={{zIndex:2}}>
          <div className="left">Left2</div>
          <div className="right">Right2</div>
        </div>
        <div className="page" style={{zIndex:1}}>
          <div className="left">Left3</div>
          <div className="right">Right3</div>
        </div>
      </div>
    )
  }
}

export default Book;
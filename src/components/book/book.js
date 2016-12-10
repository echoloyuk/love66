import React from 'react';
const {Component, PropTypes} = React;
import classNames from 'classnames';

import css from './book.less';

class Book extends Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    let childs = this.props.children;
    let {page, open, name, subName} = this.props;
    if (!Array.isArray(childs)) {
      childs = [childs];
    }
    let count = childs.length;
    let curPage, prevPage;

    if (!page) {
      page = 0;
    }
    curPage = page;
    prevPage = page ? page - 1 : null;

    let cls = classNames('book', {
      open: open
    });
    return (
      <div className={cls}>
        <div className="surface">
          {name}<br/>
          {subName}
        </div>
        <div className="left-surface"></div>
        <div className="right-surface"></div>
        <div className="spine"></div>
        <div></div>
        {
          childs.map((item, index) => {
            let cls;
            if (open) {
              cls = classNames('page', {
                open: (index === curPage),
                close: (index < curPage) 
              });
            } else {
              cls = classNames('page');
            }
            return (
              <div className={cls} style={{zIndex: (index === curPage ? 3 : 2)}} key={index}>
                <div className="left">{item.left}</div>
                <div className="right">{item.right}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Book;
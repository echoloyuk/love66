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
    let {page, open, name, subName, others} = this.props;
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
          <div className="title-icon"><i/></div>
          <div className="title">{name}</div>
          <div className="sub-title">{subName}</div>
          <div className="others">{others}</div>
        </div>
        {
          childs.map((item, index) => {
            let cls;
            if (open) {
              cls = classNames('page', {
                open: (index === curPage),
                close: (index < curPage),
                hide: (index < curPage - 1 || index > curPage + 1) 
              });
            } else {
              cls = classNames('page');
            }
            return (
              <div className={cls} style={{zIndex: (index <= curPage ? 3 : 2)}} key={index}>
                <div className="left">{item.left}</div>
                <div className="right">{item.right}</div>
              </div>
            );
          })
        }
        <div className="backend"></div>
      </div>
    );
  }
}

export default Book;
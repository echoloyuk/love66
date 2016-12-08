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
    let {page} = this.props;
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

    return (
      <div className="book">
        <div className="spine"></div>
        {
          childs.map((item, index) => {
            let cls = classNames('page', {
              open: (index === curPage),
              close: (index < curPage) 
            });
            return (
              <div className={cls} style={{zIndex: (index === curPage ? 2 : 1)}} key={index}>
                <div className="left">{item.left}</div>
                <div className="right">{item.right}</div>
              </div>
            );
          })
        }
      </div>
    );

    // return (
    //   <div className="book">
    //     <div className="page" style={{zIndex:3}}>
    //       <div className="left">Left1</div>
    //       <div className="right">Right1</div>
    //     </div>
    //   </div>
    // )
  }
}

export default Book;
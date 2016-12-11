import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import css from './stage.less'
import Book from './components/book/book.js';
import Typewriter from './components/typewriter/typewriter.js';
import Photos from './components/photos/photos.js';
import Timmer from './components/timmer/timmer.js';

import dispatch from './action/action.js';
import DEFAULT from './default-state.js';

const {Component} = React;
const cx = classnames.bind(css);

class Stage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name, 
      subName, 
      bookOpen, 
      page,
      pageContext,
      wait,
      timmerOn,
      timeSeed,

      doOpenBook,
      doNextPage
    } = this.props;
    return (
      <section className="stage-wrap">
        <Timmer on={timmerOn} time={wait} timeSeed={timeSeed} onTime={doNextPage} />
        <Book name={name} subName={subName} open={bookOpen} page={page}>
        {
          pageContext.map((item, i) => {
            return {
              left: <Typewriter start={item.code.start}>{item.code.context}</Typewriter>,
              right: <Photos start={item.imgs.start} urls={item.imgs.urls} />
            }
          })
        }
        </Book>
        <div style={{position:'absolute',zIndex:'100',left:-100,top:-100,background:'#ff0'}}>
          <div onClick={doOpenBook}>open{wait}</div>
          <div onClick={doNextPage}>next</div>
        </div>
      </section>
    );
  }
}

const props = (state) => {
  return Object.assign({}, state);
}


export default connect(props, dispatch)(Stage);
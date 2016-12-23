import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import css from './stage.less'
import Book from './components/book/book.js';
import Typewriter from './components/typewriter/typewriter.js';
import Photos from './components/photos/photos.js';
import Timmer from './components/timmer/timmer.js';
import classNames from 'classnames';

import dispatch from './action/action.js';

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
      others,
      bookOpen, 
      page,
      pageContext,
      wait,
      timmerOn,
      timeSeed,
      rotateStage,

      doOpenBook,
      doNextPage,
      playStage
    } = this.props;
    let cls = classNames('stage-wrap', {
      active: rotateStage
    });
    return (
      <section className={cls}>
        <Timmer on={timmerOn} time={wait * 1000} timeSeed={timeSeed} onTime={doNextPage} />
        <Book name={name} subName={subName} open={bookOpen} page={page} others={others}>
        {
          pageContext.map((item, i) => {
            if (item.custom) {

            } else {
              return {
                left: <Typewriter start={item.code.start}>{item.code.context}</Typewriter>,
                right: <Photos start={item.imgs.start} urls={item.imgs.urls} />
              }
            }
          })
        }
        </Book>
        <div style={{position:'absolute',zIndex:'100',left:0,top:0,background:'#ff0'}}>
          <div onClick={playStage}>play{wait}</div>
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
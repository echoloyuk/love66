import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import css from './stage.less'
import Book from './components/book/book.js';
import Typewriter from './components/typewriter/typewriter.js';

import action from './action/action.js';
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
      code,

      doOpenBook,
      doNextPage
    } = this.props;
    return (
      <section className="stage-wrap">
        <Book name={name} subName={subName} open={bookOpen} page={page}>{[
          {
            left: <Typewriter start={code[0].start}>{code[0].context}</Typewriter>,
            right: <div>r-1</div>
          }, {
            left: <div>l-2</div>,
            right: <div>r-2</div>
          }
        ]}</Book>
        <div style={{position:'absolute',zIndex:'100',left:-100,top:-100,background:'#ff0'}}>
          <div onClick={doOpenBook}>open</div>
          <div onClick={doNextPage}>next</div>
        </div>
      </section>
    );
  }
}

const props = (state) => {
  return Object.assign({}, state);
}
const dispatch = (dispatch, o) => {
  return {
    doOpenBook: (...args) => dispatch(action.openBook(...args)),
    doNextPage: (...args) => dispatch(action.nextPage(...args))
  }
}

export default connect(props, dispatch)(Stage);
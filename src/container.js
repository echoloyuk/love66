import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import css from './container.less';
import Book from './components/book/book.js';
import Typewriter from './components/typewriter/typewriter.js';
import Photos from './components/photos/photos.js';
import Timmer from './components/timmer/timmer.js';
import classNames from 'classnames';
import Stage from './components/stage/stage.js';

import dispatch from './action/action.js';

const {Component} = React;
const cx = classnames.bind(css);

class Contanier extends Component {
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

    return (
      <div className="container">
        <Stage name={name}
          subName={subName}
          others={others}
          bookOpen={bookOpen}
          page={page}
          pageContext={pageContext}
          wait={wait}
          timmerOn={timmerOn}
          timeSeed={timeSeed}
          rotateStage={rotateStage}
          doOpenBook={doOpenBook}
          doNextPage={doNextPage}
          playStage={playStage}
          />
        <div style={{position:'absolute',zIndex:'100',left:0,top:0,background:'#ff0'}}>
          <div onClick={playStage}>play{wait}</div>
          <div onClick={doNextPage}>next</div>
        </div>
      </div>
    )
  }
}

const props = (state) => {
  return Object.assign({}, state);
}


export default connect(props, dispatch)(Contanier);


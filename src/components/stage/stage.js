import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import css from './stage.less'
import Book from '../book/book.js';
import Typewriter from '../typewriter/typewriter.js';
import Photos from '../photos/photos.js';
import Timmer from '../timmer/timmer.js';
import classNames from 'classnames';

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
      <section className="stage">
        <div className={cls}>
          <Timmer on={timmerOn} time={wait * 1000} timeSeed={timeSeed} onTime={doNextPage} />
          <Book name={name} subName={subName} open={bookOpen} page={page} others={others}>
          {
            pageContext.map((item, i) => {
              let left, right;
              left = (item.code ? <Typewriter start={item.code.start}>{item.code.context}</Typewriter> : item.left);
              right = (item.imgs ? <Photos start={item.imgs.start} urls={item.imgs.urls} /> : item.right);
              return {left, right};
            })
          }
          </Book>
        </div>
      </section>
    );
  }
}


export default Stage;
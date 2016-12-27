import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import css from './container.less';
import Stage from './components/stage/stage.js';
import Audio from './components/audio/audio.js';
import Cover from './components/cover/cover.js';

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
      bgMusic,
      bgPlay,
      init,

      doOpenBook,
      doNextPage,
      playStage
    } = this.props;
    const debugCls = {
      position: 'absolute',
      right: 0,
      top: 0,
      fontSize: 10,
      zIndex: 1000,
      backgroundColor: '#666',
      color: '#ccc'
    }

    let cls = classnames('container', {
      init: !!init
    });

    return (
      <div className={cls}>
        <Cover show={init}>
          <div className="start-btn" onClick={playStage}></div>
        </Cover>
        <Audio url={bgMusic} play={bgPlay} />
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
        <div style={debugCls}>
          <div onClick={doNextPage}>[next]</div>
          <div>wait: {wait}</div>
        </div>
      </div>
    )
  }
}

const props = (state) => {
  return Object.assign({}, state);
}


export default connect(props, dispatch)(Contanier);


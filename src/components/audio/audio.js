import React from 'react';
const {Component, PropTypes} = React;

import css from './audio.less';

class Audio extends Component {
  constructor(prop) {
    super(prop);
  }
  play() {
    let audio = this.refs.audioDOM;
    audio.play();
  }
  pause() {
    let audio = this.refs.audioDOM;
    audio.pause();
  }
  componentWillReceiveProps(next) {
    if (!this.props.play && next.play) {
      this.play();
    } else if (this.props.play && !next.play) {
      this.pause();
    }
  }

  render() {
    const {url} = this.props;
    return (
      <section className="bg-audio">
        <audio src={url} preload ref="audioDOM" />
      </section>
    )
  }
}

export default Audio;
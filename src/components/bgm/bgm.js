import React from 'react';
const {Component, PropTypes} = React;

class Bgm extends Component {
  play() {
    let audio = this.refs.audioDOM;
    audio.volume = 0.3;
    audio.play();
  }
  pause() {
    let audio = this.refs.audioDOM;
    audio.pause();
  }
  componentDidMount () {
    if (this.props.play) {
      this.play();
    }
  }
  componentWillReceiveProps(next) {
    if (!this.props.play && next.play) {
      this.play();
    } else if (this.props.play && !next.play) {
      this.pause();
    }
  }
  render() {
    const {urls} = this.props;
    return (
      <audio ref="audioDOM" loop>
        {urls.map((item, index) => {
          return <source key={index} src={item} type="audio/mpeg" />
        })}
      </audio>
    )
  }
}

export default Bgm;
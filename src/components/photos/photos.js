import React from 'react';
const {Component, PropTypes} = React;
import classNames from 'classnames';

import css from './photos.less';

class Photos extends Component {
	constructor(props) {
    super(props);
    this.state = {
      inIndex: null,
      outIndex: null
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(next) {

  }

  render() {
    const urls = this.props.urls;

  	return (
  		<div className="photos-panel">
        {
          urls.map((item, index) => {
            return <div key={index} className="photos-img" style={{backgroundImage: 'url("' + item + '")'}}></div>;
          })
        }
  		</div>
  	)
  }
}

export default Photos;
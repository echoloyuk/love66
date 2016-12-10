import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Stage from './src/stage';
import reducer from './src/reducers/reducers.js';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
	  <Stage />
  </Provider>,
	document.getElementById('stage')
)

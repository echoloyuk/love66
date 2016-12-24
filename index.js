import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Container from './src/container.js';
import reducer from './src/reducers/reducers.js';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app')
)

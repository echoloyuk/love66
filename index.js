import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Loader from './src/mods/loader.js';

import Container from './src/container.js';
import reducer from './src/reducers/reducers.js';

const store = createStore(reducer);

const perDom = document.getElementById('per');

Loader(store.getState(), (per) => {
  perDom.style.width = per + '%';
}, () => {
  document.getElementById('lazy').style.display = 'none';
});

ReactDom.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app')
)


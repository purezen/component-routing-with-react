import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import AppContainer from './containers/AppContainer'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
  </Provider>,
  rootElement
);

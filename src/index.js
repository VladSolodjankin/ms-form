import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Doc from './doc/index'
import reducer from '../src/doc/reducer'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(
  reducer,
  applyMiddleware(
    createLogger({collapsed: true, diff: true})
  ),
)

const Root = <Provider store={store}>
  <Doc />
</Provider>

ReactDOM.render(Root, document.getElementById('root'));

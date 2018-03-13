import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// action 处理是异步的 action => reducer(oldState, data) => 返回一个新的状态
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// 造热力图的工具
import { createLogger } from 'redux-logger';
import App from './App';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];
middleware.push(createLogger());
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import actions from './actions';

const { newBoard, swipeUp, swipeDown, swipeLeft, swipeRight } = actions;

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

document.onkeydown = (event) => {
  switch (event.keyCode) {
    case 38:
      store.dispatch(swipeUp());
      break;
    case 40:
      store.dispatch(swipeDown());
      break;
    case 37:
      store.dispatch(swipeLeft());
      break;
    case 39:
      store.dispatch(swipeRight());
      break;
  }
};

store.dispatch(newBoard());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

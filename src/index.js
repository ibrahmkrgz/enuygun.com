import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.scss';
import thunk from 'redux-thunk';
import ApplicationContainer from './pages/application/container/applicationContainer';
import rootReducer from './redux/reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ApplicationContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

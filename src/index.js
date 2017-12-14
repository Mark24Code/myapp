import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route , browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './pages/App';
import CounterPage from './pages/CounterPage';
import reducers from './redux/reducers/index';

const store = createStore(reducers);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/counter" component={CounterPage}></Route>
    </Router>
  </Provider>
), document.getElementById('root'))



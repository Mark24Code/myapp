import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route , browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducers from './redux/reducers';
import App from './pages/App';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';

// const store = createStore(reducers);

ReactDOM.render((
  // <Provider store={store}>
  <Provider store={'{}'}>
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/counter" component={CounterPage}></Route>
      <Route path="/todo" component={TodoPage}></Route>
    </Router>
  </Provider>
), document.getElementById('root'))



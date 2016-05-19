import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import {
  syncHistory,
  routeReducer
} from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import reducers     from './reducers';

import App          from './components/app';
import requireAuth  from './components/HOC/require_auth';
import SignIn       from './components/signin';
import SignUp       from './components/signup';
import Query        from './components/query';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={requireAuth(App)} >
        <Route path="/query" component={requireAuth(Query)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

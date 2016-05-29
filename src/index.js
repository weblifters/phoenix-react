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
import reduxThunk   from 'redux-thunk';

import App          from './components/app';
import requireAuth  from './components/HOC/require_auth';
import Signin       from './components/signin';
import Signup       from './components/signup';
import Signout      from './components/signout';
import Query        from './components/query';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="query" component={requireAuth(Query)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

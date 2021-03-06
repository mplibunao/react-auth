import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from "./components/auth/signup";
import Feature from "./components/feature";
import Welcome from "./components/welcome";
import RequireAuth from "./components/auth/require_auth";
import reducers from './reducers';
import { AUTH_USER } from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem("token");
if (token) {
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/feature" component={RequireAuth(Feature)} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Welcome} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
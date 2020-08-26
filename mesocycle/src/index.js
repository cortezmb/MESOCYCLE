import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"; 
import { Provider } from "react-redux"; //this connects the Store with the Components via Provider
import Counter from './Counter';
import CounterHook from './components/CounterHook'
import reducer from "./reducers/reducer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from './components/layout/BaseLayout'

//this createStore function will create the store in Redux in order to have a global state to put things in
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //reducer function goes in this function

ReactDOM.render(
  //the Provider provides access to the global state in Redux to the React application. Any component will have access to global state
  <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
    <Switch>
        <Route exact path='/' component={Counter}/>
        <Route path='/hooks' component={CounterHook}/>
      </Switch>
    </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

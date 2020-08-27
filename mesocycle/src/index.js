import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"; 
import { Provider } from "react-redux"; //this connects the Store with the Components via Provider
import RepCounter from './components/RepCounter';
import RepMaxInput from './components/RepMaxInput';
// import CounterHook from './components/CounterHook'
import reducer from "./reducers/reducer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from './components/layout/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/css/fontawesome-free-5.13.1-web';

//this createStore function will create the store in Redux in order to have a global state to put things in
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //reducer function goes in this function

ReactDOM.render(
  //the Provider provides access to the global state in Redux to the React application. Any component will have access to global state
  <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
    <Switch>
        {/* This view is the Homepage */}
        {/* <Route exact path='/' component={}/> */}
        {/* This view has the workout of the day with rep counter */}
        <Route path='/RepCount' component={RepCounter}/>
        {/* This view has has the movement descriptions and 10RM input forms */}
        <Route path='/RepMax' component={RepMaxInput}/> 

        {/* <Route path='/hooks' component={CounterHook}/> */}
      </Switch>
    </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

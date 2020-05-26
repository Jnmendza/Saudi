import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 1.a import createStore
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

//devtools for redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//1.b create a const for the store
//1.c invoke the createStore function
//2.a rootReducer is being imported. Represents the state tree
const store = createStore(
    reducer,
    // middleware intercepts every action that is dispatched before it gets to reducer
    // Stop actions, forward an action untouched, dispatch a different action //in between action and reducer
    // Logger stays to the right. - is going to console.log any action that happens
    // thunk - gives Redux the ability to run asynchronous operation
    // async - It never waits for each operation to complete, rather it executes all operations in the first GO only
    composeEnhancers(applyMiddleware(thunk, logger))
);

const rootElement = document.getElementById('root');
ReactDOM.render(
    // prop store gets pass in and will make store obj accessible by everythin in App
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

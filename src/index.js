import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
/*
    The Provider component uses something called React Context 
    which allows you to pass the store object to any components
    that needs to access it without the need to pass props
*/
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

/*
    Here we are wrapping the App component which is our 
    parent component with the Provider component so 
    that all the child components in our app can get access to the store. 
    The Provider component takes the store as a prop.
*/
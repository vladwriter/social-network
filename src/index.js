import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const rerenderEntireTree = (state) => {
    ReactDOM.render( <
        React.StrictMode >
        <
        Provider store = { store } >
        <
        App state = { state }
        dispatch = { store.dispatch.bind(store) }
        store = { store }
        />  < /
        Provider > <
        /
        React.StrictMode > ,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
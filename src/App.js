import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
        return ( <
                BrowserRouter >
                <
                div className = 'app-wrapper' >
                <
                HeaderContainer / >
                <
                Navbar sidebar = { props.state.sidebar }
                / > <
                div className = 'app-wrapper-content' >
                <
                Route path = '/dialogs'
                render = {
                    () => < DialogsContainer
                    store = { props.store }
                    /> } / >
                    <
                    Route path = '/profile/:userId?'
                    render = {
                        () => < ProfileContainer store = { props.store }
                        /> } / >
                        <
                        Route path = '/users'
                        render = {
                            () => < UsersContainer / >
                        }
                        />  <
                        Route path = '/login'
                        render = {
                            () => < Login / >
                        }
                        />  <
                        Route path = '/news'
                        render = {
                            () => < News / >
                        }
                        /> <
                        Route path = '/music'
                        render = {
                            () => < Music / >
                        }
                        /> <
                        Route path = '/settings'
                        render = {
                            () => < Settings / >
                        }
                        /> < /
                        div > <
                        /div> < /
                        BrowserRouter >
                    );
                }

                export default App;
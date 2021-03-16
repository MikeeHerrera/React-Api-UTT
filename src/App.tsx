import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './secure/components/Nav';
import Main from './secure/Main';
import Menu from './secure/components/Menu';
import Users from './secure/Users';
// import Register from './public/Register';

import {BrowserRouter, Route } from 'react-router-dom';
import Login from './public/Login';
import Registerr from './public/Registerr';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
                                <Route path="/" exact component={Main}></Route>
                                <Route path="/users" component={Users}></Route>
                                <Route path="/login" component={Login}></Route>
                                <Route path="/register" component={Registerr}></Route>

                            </BrowserRouter>
    </div>
  );
}

export default App;

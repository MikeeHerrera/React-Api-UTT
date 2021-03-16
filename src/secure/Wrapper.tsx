import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../public/Login';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Main from './Main';
import Users from './Users';

export default class Wrapper extends Component{
    render() {
        return (
            <div>
                <Nav></Nav>


                <div className="container-fluid">
                    <div className="row">
                        <Menu></Menu>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                           {this.props.children}

                        </main>
                    </div>
                </div>
            </div>
        );
    }
}


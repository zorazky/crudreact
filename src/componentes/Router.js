import React, { Component } from 'react';
import { BrowserRouter, route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />
                        <Navegacion />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;
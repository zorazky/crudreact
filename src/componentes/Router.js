import React, { Component } from 'react';
import { BrowserRouter, route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';

class Router extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.obtenerPost();
    }

    obtenerPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }
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
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';

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
                        <Switch>
                            <Route exact path="/" render={ () => {
                                return (
                                    <Posts 
                                        posts={this.state.posts}
                                    />
                                )
                            }}
                            
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;
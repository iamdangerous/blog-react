import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import PostDetail from "./components/postDetail/PostDetail";


class App extends Component {

    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/p" component={PostDetail} />
                </Switch>

            </div>
        </Router>

    );
  }
}

export default App;

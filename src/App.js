import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";


class App extends Component {

    state = {
        count:10
    };

    componentWillMount() {
        this.setState({count:2});
        console.log(this.state.count)
    }

    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>

            </div>
        </Router>

    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {

  render() {
    return (
        <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Users} />
                </Switch>

            </div>
        </Router>

    );
  }
}
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export default App;

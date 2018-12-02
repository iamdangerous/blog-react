import React from 'react';
import classes from "./header.css"
import {Link} from "react-router-dom";

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className={classes.Header}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li ><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}
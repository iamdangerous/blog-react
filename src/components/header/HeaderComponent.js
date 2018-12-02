import React from 'react';
import classes from "./header.css"
import {Link} from "react-router-dom";

export default class HeaderComponent extends React.Component {
    render() {

        const ulStyle = {
            listStyleType: 'none',
            margin: '0px',
            padding: '0px',
            overflow: 'hidden',
            backgroundColor: '#333'
        };

        const liStyle = {
            float:'left'
        };
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
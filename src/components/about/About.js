import React from "react";
import classes from './About.css';

const About = (props)=>{
    const spanStyle = {
        color: '#53f6c7'
      };
    return (
        <div className = {classes.About}>
            
            <div className = {classes.AboutNameContainer}>
                <p className = {classes.title}>Hello!</p>
                <p className = {classes.name}><span style={spanStyle}>I'm Rahul</span> Lohra!</p>
                <ul>
                    <li>Android Developer</li>
                    <li>Ios Developer</li>
                    <li>Backend Developer</li>
                </ul>
            </div>
            
        </div>
        
    )
};

export default About
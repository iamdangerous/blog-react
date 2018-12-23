import React from "react";
import classes from './About.css';
import { SocialIcon } from 'react-social-icons';

const About = (props)=>{
    const spanStyle = {
        color: '#53f6c7'
      };

      const aStyle = {
        color: '#EEEEEE'
      }

      const socialIconStyle = {
        height: 40,
        width: 40,
        marginRight:10
      }

      const RESUME_URL = "https://drive.google.com/open?id=1_O-d5Pwmo_mtqzvp-BEi_Pb-T_zFfprO"

    return (
        <div className = {classes.About}>
            
            <div className = {classes.AboutNameContainer}>
                <p className = {classes.title}>Hi!</p>
                <p className = {classes.name}><span style={spanStyle}>I'm Rahul</span> Lohra!</p>
                <ul>
                    <li>Android Developer</li>
                    <li>Ios Developer</li>
                    <li>Backend Developer</li>
                </ul>

                <div>
                    <SocialIcon url="http://twitter.com/rahul_lohra"  color="#38A1F3" style={socialIconStyle} />
                    <SocialIcon url="https://www.linkedin.com/in/rahullohra/"  style={socialIconStyle} />
                    <SocialIcon url="https://github.com/iamdangerous" color="#A93226" style={socialIconStyle} />                            
                </div>

                <div>                    
                    <a style = {classes.resumeStyle} href={RESUME_URL} target="_" ><button>Download CV</button></a>                                
                </div>
            </div>
                    
        </div>
        
    )
};

export default About
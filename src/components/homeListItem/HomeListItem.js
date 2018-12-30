import React from 'react';
import classes from './HomeListItem.css';
import {Link} from "react-router-dom";
import {monthNames} from "../../util/Constants";

export default class HomeListItem extends React.Component {
    
    render() {

        function getFormattedText(post){
            const formattedDate = new Date(post.createdAt)
            const monthText = monthNames[formattedDate.getMonth()]
            const dateText = formattedDate.getDate()
            const yearText = formattedDate.getFullYear().toString().slice(2)
            var displayText = monthText+" " + dateText
            if(new Date().getFullYear()!==formattedDate.getFullYear()){
                displayText = monthText+" " + dateText+", "+ yearText
            }
            return displayText
        }

        const subTitleStyle = {
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 'normal',
            fontSize: '15px',
            color: '#7C7272',
            marginTop: '10px'
        }
        var displayText = getFormattedText(this.props.post);
        
        return (
            
                <div className={classes.HomeListItem}>
                    
                    <Link style={{ textDecoration: 'none' }}
                        to = {{
                            pathname:`/p/${this.props.post._id}`,
                            state:{post:this.props.post}
                        }}>
                        <h3>{this.props.post.title}</h3>
                        <p style={subTitleStyle}>{this.props.post.subTitle}</p>
                        
                        </Link>
                        <p>{displayText}</p>
                </div>
        )
    }
}
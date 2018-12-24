import React from 'react';
import classes from './HomeListItem.css';
import {Link} from "react-router-dom";

export default class HomeListItem extends React.Component {
    componentDidMount() {
        const id = this.props.post._id;
        console.log(id)
    }

    render() {

        const subTitleStyle = {
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 'normal',
            fontSize: '14px',
            color: '#7C7272',
            marginTop: '10px'
        }
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
                        <p>{this.props.post.createdAt}</p>
                </div>
        )
    }
}
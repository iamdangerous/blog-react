import React from 'react';
import classes from './HomeListItem.css';
import {Link} from "react-router-dom";
// import PostDetail from "../postDetail/PostDetail";

export default class HomeListItem extends React.Component {
    componentDidMount() {
        const id = this.props.post._id;
        console.log(id)
    }

    render() {
        return (
                <div className={classes.HomeListItem}>
                    <h3>{this.props.post.title}</h3>
                    <Link
                        to = {{
                            pathname:`/p/${this.props.post._id}`,
                            state:{post:this.props.post}
                        }}>
                        {this.props.post.subTitle}
                        </Link>
                    <p>{this.props.post.createdAt}</p>
                </div>
        )
    }
}
import classes from './HomeBody.css';
import React, {Component} from 'react';
import HomeListItem from "../homeListItem/HomeListItem";
import axios from 'axios';
import {GET_POSTS_URL} from "../../util/Constants";

class HomeBody extends Component {

    state = {
        posts: [],
        showPosts: false
    };


    componentDidMount() {
        console.log(this);
        axios.get(GET_POSTS_URL)
            .then( (response)=> {
                this.setState({
                    posts: response.data,
                    showPosts: true
                })
            }).catch((err)=> {
            console.log(err);
        })
    }

    render() {

        let posts = null;
        if (this.state.showPosts) {
            posts = (
                 <div>
                    {
                        this.state.posts.map((post, index) => {
                             return <HomeListItem post={post} key={index}/>
                        })
                    }
                </div>
            );
        }

        return (
            <div >
                {posts}
                {/*<ul>*/}
                {
                    // props.posts.map((post) => (
                    //     <li key={post._id} style={{listStyleType: 'none'}}>
                    //         <HomeListItem post = {post}/>
                    //     </li>
                    // ))
                }
                {/*</ul>*/}
            </div>
        )
    }
}

export default HomeBody

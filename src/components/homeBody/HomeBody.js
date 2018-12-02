import classes from './HomeBody.scss';
import React from 'react';
import HomeListItem from "../homeListItem/HomeListItem";
// import {GET_POSTS_URL} from "../../../Constants";

const HomeBody = (props) => (
    <div className={classes.HomeBody}>
        <ul>
            {
                // props.posts.map((post) => (
                //     <li key={post._id} style={{listStyleType: 'none'}}>
                //         <HomeListItem post = {post}/>
                //     </li>
                // ))
            }
        </ul>
    </div>
)
export default HomeBody

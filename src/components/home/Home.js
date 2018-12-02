import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";
import HomeBody from "../homeBody/HomeBody";

const Home = (props)=>{
    return (
        <div>
            {/*<ul>*/}
                {/*<li><Link to="/">Home</Link></li>*/}
                {/*<li><Link to="/about">About</Link></li>*/}
                {/*<li><Link to="/contact">Contact</Link></li>*/}
            {/*</ul>*/}
            <div>
                <HeaderComponent/>
                <HomeBody posts = {props.posts}/>
                </div>
        </div>

    )
};

export default Home
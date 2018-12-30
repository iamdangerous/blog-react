import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import HomeBody from "../homeBody/HomeBody";

const Home = (props) => {
    return (
        <div>
            <HeaderComponent/>
            <HomeBody posts={props.posts}/>
        </div>

    )
};

export default Home
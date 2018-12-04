import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import ReactMd from 'react-md-file';
import HeaderComponent from "../header/HeaderComponent";
import classes from "./PostDetail.css"


export default class PostDetail extends React.Component {

    state = {
        mdText:"",
        showMdText:false
    };

    componentDidMount() {
        console.log(this.props.location);
        var fileUrl = this.props.location.state.post.filePath;
        axios.get(fileUrl)
            .then(res =>{
                this.setState({
                    mdText : res.data,
                    showMdText:true
                })
            }).catch(err =>{

        })
    }

    render() {
        let mdPost = null;
        if(this.state.showMdText){
            mdPost = (
                <div>
                    {
                        <ReactMarkdown source={this.state.mdText}/>
                    }
                </div>
            )
        }
        const inlineStyle = {
            font:'inherit',
            paddingLeft:'100px',
            paddingRight:'100px',
        };


        return(
            <div>
                <HeaderComponent/>
                <div  className={classes.PostDetail}>
                    {mdPost}
                </div>
            </div>

        )
    }
}
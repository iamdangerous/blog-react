import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import HeaderComponent from "../header/HeaderComponent";
import classes from "./PostDetail.css"
import Disqus from 'disqus-react';


import {CopyToClipboard} from 'react-copy-to-clipboard';
import {GET_POSTS_URL} from "../../util/Constants";
import {BASE_URL} from "../../util/Constants";

export default class PostDetail extends React.Component {

    state = {
        mdText:"",
        showMdText:false
    };
    
    postItem = null

    getMdText(fileUrl){
        console.log("getMdText url:"+fileUrl)
        axios.get(fileUrl)
        .then(res => { 
            this.setState({
                mdText : res.data,
                showMdText:true
          })
        }).catch(err =>{
            console.log(err)
        })
    }

    componentDidMount() {
        const pathName = (this.props.location.pathname);
        const url = GET_POSTS_URL+"/"+pathName.slice(3) 
        var mState = this.props.location.state;
        if(mState == null){
            
            axios.get(url)
                .then(res =>{
                    console.log(res.data[0])
                    this.postItem = res.data[0]
                    this.getMdText(res.data[0].filePath)
                }).catch(ex=>{
                    console.log(ex)
                })
        }else {
            var fileUrl = mState.post.filePath;
            this.postItem = mState.post            
            this.getMdText(fileUrl)
        }
    }

    handleNewComment() {
        console.log("new comment")
    }


    render() {

        let disqusShortname = 'rahullohra';
        let disqusConfig = null

        let mdPost = null;
        let disqusComment = null
        if(this.state.showMdText){
            mdPost = (
                <div>
                    {
                        <ReactMarkdown source={this.state.mdText}/>
                    }
                </div>
            )

            const pathName = (this.props.location.pathname);
            const disqusUrl = BASE_URL+"/p/"+pathName.slice(3) 
            console.log(this.postItem)
            console.log(disqusUrl)

            
            disqusConfig = {
                url: disqusUrl,
                identifier: this.postItem._id,
                title: this.postItem.title
            };

            disqusComment = (
                <div className={classes.Comments}>
                    {<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />}
                </div>
            )
        }

        return(
            <div>
                <HeaderComponent/>
                <div  className={classes.PostDetail}>
                    {mdPost}
                    {disqusComment}
                </div>
            </div>
        )

        
    }
}
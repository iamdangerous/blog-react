import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import ReactMd from 'react-md-file';
import HeaderComponent from "../header/HeaderComponent";
import classes from "./PostDetail.css"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {GET_POSTS_URL} from "../../util/Constants";

export default class PostDetail extends React.Component {

    state = {
        mdText:"",
        showMdText:false
    };

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
        var mState = this.props.location.state;
        if(mState == null){
            const url = GET_POSTS_URL+"/"+pathName.slice(3) 
            axios.get(url)
                .then(res =>{
                    console.log(res.data[0])
                    this.getMdText(res.data[0].filePath)
                }).catch(ex=>{
                    console.log(ex)
                })
        }else {
            var fileUrl = mState.post.filePath;            
            this.getMdText(fileUrl)
        }
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

        const code_1 = "<uses-permission android:name=\"android.permission.BLUETOOTH\">"
        +"\n<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\">"
        +"\n<uses-feature android:name=\"android.hardware.bluetooth_le\" android:required=\"true>"

        const detail = (
            <div>
                <h1>Bluetooth Low energy Chat Application Series</h1>
                <h3>Overview of Chat application :</h3>
                <ol>
                    <li>How Bluetooth Low energy device works</li>
                    <li>Setting up Gatt Server</li>
                    <li>Setting up Gatt Client</li>
                    <li>Sending Data over Bluetooth Low energy network</li>
                </ol>
                <h4>Post 2 - Setting up Gatt Server</h4>
                <p>Things to do </p>
                <ol>
                    <li>Add permissions</li>
                    <li>Setup UUIDs for your service, Characteristics and meta-data</li>
                    <li>Setup Gatt Server</li>
                </ol>
                <h3>Add permissions</h3>
                
                <div className={classes.Clipboard}>
                    <CopyToClipboard text={code_1}>
                        <button>Copy</button>
                    </CopyToClipboard>        
                </div>
            
                <div className={classes.MyCode}>    
                    <pre>
                        <code>
                            &lt;uses-permission android:name="android.permission.BLUETOOTH"/&gt; <br></br>
                            &lt;uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/&gt; <br></br>
                            &lt;uses-feature android:name="android.hardware.bluetooth_le" android:required="true"/&gt;
                        </code>
                    </pre>                
                </div>
                
                
            </div>
        )

        return(
            <div>
                <HeaderComponent/>
                <div  className={classes.PostDetail}>
                    {/* {detail} */}
                    {mdPost}
                </div>
            </div>
        )

        
    }
}
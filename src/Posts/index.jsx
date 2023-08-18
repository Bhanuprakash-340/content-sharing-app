import React, {useState} from "react";
import {v4} from 'uuid'
import './index.css'


function Posts({ user, onCreatePost }) {
    const [title, setTitle] = useState('')
    const [postContent, setPostContent] = useState('');
    const [titleErr, setTitleErr] = useState(false)
    const [contentErr , setContentErr] = useState(false)

    const handleCreatePost = () =>{
      if(!title){
        setTitleErr(true)
      }
      else{
        const newPost = {
          id:v4(),
          title:title,
          content:postContent,
          likes:0,
          isLiked:false,
        }
        onCreatePost(newPost);
        setTitle("");
        setPostContent("");
        setTitleErr(false)
        setContentErr(false)
      }
    }
  
    return (
      <div className="posts-container">
        <div className="fields-container">
          <h2 className="content-heading">Create Content</h2>
          <input type="text" className="title-field" placeholder="Title...." onChange={(e) => setTitle(e.target.value)} value={title} />
          {titleErr === true ? (<p  className="error-mesg" > Title is required*.</p>):(<p></p>)}
          <textarea
            placeholder="Enter your context here..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="content-area"
          />
          {contentErr === true ? (<p  className="error-mesg" > Content is required*.</p>):(<p></p>)}
          <button className="content-button" onClick={() =>handleCreatePost()}>Create Context</button>
        </div>
        <div className="content-image-container">
          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="content" className="content-image"/>
        </div>
      </div>
    );
  }
  
export default Posts
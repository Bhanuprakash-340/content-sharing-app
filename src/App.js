import React, { useState } from "react";
import Register from "./Register";
import Posts from "./Posts";
import EditPopUp from "./EditPopUp";
// import { BiSolidEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import './App.css'


function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [search , setSearchInput] = useState("")
  const [edit, setEdit] = useState()


  const handleRegister = (newUser) => {
    setUser(newUser);
  };

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deleteContent = (id) =>{
    console.log(id)
    const deletedArray = posts.filter(each => each.id !== id)
    setPosts(deletedArray)
  }

  const getClicked = (id) =>{
    setPosts((prevItems) =>prevItems.map((item) =>item.id === id ? {...item, isLiked: !item.isLiked} : item))
  }

  const gettingPopupData = (data) =>{
    setEdit(data)
    console.log(edit)
  }

  const filteredArray = posts.filter(eachPost => eachPost.title.toLowerCase().includes(search))

  return (
    <>
    <div>
      {user ? (
        <div>
            <h2 className="heading">Welcome, Content Sharing</h2>
            <Posts user={user} onCreatePost={handleCreatePost} />
            <input type="search" className="search-bar" placeholder="Search..." onChange={(e) =>setSearchInput(e.target.value)}/>
            <ul className="content-lists">
              {filteredArray.map((post) => (
                <li key={post.id} className="post">
                  <div className="content-display">
                    <p className="title">{post.title}</p>
                    <p className="content">{post.content}</p>
                  </div>
                  <div className="action-buttons">
                    {post.isLiked === false ? (<button className="icon-button unlike" onClick={() =>getClicked(post.id)}><AiFillLike className="icons"/></button> ) : (<button className="icon-button like" onClick={() =>getClicked(post.id)}><AiFillLike className="icons liked"/></button>)}
                    <EditPopUp editData = {gettingPopupData}/>
                    <button className="icon-button delete" id={post.id} onClick={() =>deleteContent(post.id)}><MdDeleteOutline className="icons"/></button>
                   
                  </div>
                </li>
                ))}
            </ul>
        </div>
      ) : (
        <Register onRegister={handleRegister} />
      )} 
    </div>
    </>
  );
}

export default App;


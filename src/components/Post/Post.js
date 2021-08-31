import React from 'react'
import "./Post.css";

import {useState} from 'react'

  function Post({post, com, clave}) {

    const [open, setOpen] = useState(false)

   function togglePanel(e) {
     setOpen(!open)

   }
  
      return (
       <div className="card">
           <div className="header">
           <img className="img" src={`https://i.pravatar.cc/150?img=${post.userId}`} alt="User" ></img>
           <div className="title">{post.title} </div> 
           </div>
           <div className="body">{post.body}  </div> 
           <div className="comment-header">
               <button id={post.id} className="btn" onClick={togglePanel}>Comments</button></div>
            {open?      
               
                com.comments.filter(f => f.postId=== clave+1).map(e => (
                   <div className="comments">
                   <div className="contact-info">
                   <div className="name">  {e.name}</div>
                   <div className="email"> {e.email}</div>
                   </div>
                   <div className="bodycom"><span> {e.body}</span></div>
               </div>
                )             
                ): null}   
          </div>
    )
}

export default Post



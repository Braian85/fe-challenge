import React from 'react'
import { useEffect } from 'react';
import "./Post.css";
import { useDispatch} from 'react-redux';
import {addComment, setPostsLoading} from '../../../src/redux/slices/chatSlices'
import axios from 'axios'

import {useState} from 'react'

function Post({post, com, clave}) {
  const dispatch = useDispatch();
  const [activatedComments, setActivatedComments] = useState(false)
  console.log("activatedComments", activatedComments);
  
  useEffect(() => {
    if(activatedComments)  {
      console.log("Entró a useEffect")
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then( res => {
        console.log(res.data);

        res.data.forEach((fe) => 
        dispatch(addComment({
          postId: post.id,
          comment: {
            name: fe.name, 
            email: fe.email,
            body: fe.body
          }
        }))  
        )
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
      //I would disable the loading comments spinner here. 
      })

    }
  }, [activatedComments])

  function togglePanel(e) {
    e.preventDefault()
    setActivatedComments(!activatedComments)
    console.log("toggle open:", activatedComments);  
  }
  
  function handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      console.log("Comment", e.target.value)
      console.log("post ID on Enter: ", post.id); 
      dispatch(addComment({
        postId: post.id,
        comment: {
          name: "Braian", 
          email: "braian@gmail.com",
          body: e.target.value
        }
      })); 
      e.target.value = "";
    }
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
        {activatedComments?    
            
          post.comments.map(e => 
            <div className="comments">
              <div className="contact-info">
              <div className="name">  {e.name}</div>
              <div className="email"> {e.email}</div>
              </div>
              <div className="body-com"><span> {e.body}</span></div>
            </div>       
          ): null}   
          {activatedComments? 
            <div className="comments">
              <div className="contact-info">
                <div className="name"> name</div>
                <div className="email"> email</div>
              </div>
                
              <input id="editable"  placeholder="Add Comments Here..." className="body-com" onKeyPress ={(e)=> handleEnter(e)} />
            </div>: null}
      </div>
  )
}

export default Post
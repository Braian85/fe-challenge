import React from 'react'
import "./Users.css";

import {useState} from 'react'

  function Users(props) {

    const [state, setState] = useState({
        open: false 
    })

   function togglePanel(e) {
     setState({open: !state.open})

   }

   function handleClick(e) {
        const id = e.target.id;
        console.log(id);
      }
   
      return (
       <div className="card">
           <div className="header">
           <img className="img" src={`https://i.pravatar.cc/150?img=${props.data.userId}`} alt="User" ></img>
           <div className="title">{props.data.title} </div> 
           </div>
           <div className="body">{props.data.body}  </div> 
           <div className="comment-header">
               <button id={props.data.id} className="btn" onClick={togglePanel}>Comments</button></div>
            {state.open?      
                
                props.com.comments.filter(f => f.postId=== props.clave+1).map(e => (
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

export default Users 



import React from 'react'
import "./Users.css";

  function Users(props) {

   
      return (
       <div className="card">
           
         
           <div className="header">
           <img className="img" src={`https://i.pravatar.cc/150?img=${props.data.userId}`} alt="User" ></img>
           <div className="title">{props.data.title} </div> 
           </div>
             
           <div className="body">{props.data.body}  </div> 
           <div className="comment-header">
               <button>Comments</button></div>
            {props.com.comments.filter(f => f.postId=== props.clave+1).map(e => (

                <div className="comments">
                
               <div className="contact-info">
                    <div className="name"><span> {e.name}</span></div>
                    <div className="email"><span> {e.email}</span></div>
               </div>
                    <div className="bodycom"><span> {e.body}</span></div>
           </div>


                 



            ))}
           
          

        
         
       </div>
    )
}

export default Users 



import React from 'react'
import "./Users.css";

  function Users(props) {

   
      return (
       <div className="card">
           
         
           <div className="header">
           <img className="img" src={`https://i.pravatar.cc/150?img=${props.data.userId}`} alt="User" ></img>
           <div className="title">{props.data.title} </div> 
           </div>
             
           <div className="body">{props.data.body} </div> 
            {console.log("Log:",props.clave+1,props.com.comments.filter(f => f.postId=== props.clave+1).map(e => e.id))}
           <div>{props.clave+1}</div>
         {/*   {let a = props.com.comments.filter(f => (f.postId=== props.clave+1))} */}
         
          
      
        <div>{props.com.comments.filter(f => f.postId=== props.clave+1).map(e => e.id)}</div>
      


      
         
       </div>
    )
}

export default Users 



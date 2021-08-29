import React from 'react'
import "./Users.css";






  function Users(props) {
      return (
       <div className="card">

           <div>{console.log(props)}</div>
           <div className="header">
           <img className="img" src={`https://i.pravatar.cc/150?img=${props.data.userId}`}></img>
           <div className="title">{props.data.title} </div> 
           </div>
             
           <div className="body">{props.data.body} </div> 
         
       </div>
    )
}

export default Users 



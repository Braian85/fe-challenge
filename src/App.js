import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './components/users/Users'

function App() {
  const [posts, setPosts] = useState({
    dataReady: false,
    posts: []

  })

  const [comments, setComments] = useState(
    {
      dataReady: false,
      comments: []

    }

  );

  // Hook para cargar Users. 
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then( res => {
        //console.log(res)
        
        setPosts({posts: res.data, dataReady: true})
        //console.log("POSTS")
        
    })
    .catch(err => {
      console.log(err)
    })
  }, [/* posts.dataReady */])

  //Hook para cargar Comments.
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then( res => {
        //console.log(res)
        
        setComments({comments: res.data, dataReady: true})
      /*   console.log("Trajo Comments.") */
        
    })
    .catch(err => {
      console.log(err)
    })
  }, [/* comments.dataReady */]) 

  return (

    
    <div className="App">
      
    {console.log("Render")}

{/* <div>{console.log("Comments:", comments)}</div> */}
     
    {/*  {console.log("FAFAFA:", comments.comments.filter(f =>f.postId == 1))} */}

      <nav className="nav"><span><strong>COMPANY </strong>SOCIAL NETWORK</span></nav>
      {posts.dataReady && comments.dataReady  ? posts.posts.map((data, i) =>
       (<Users key={i} clave={i} data={data} com= {comments} />)) 
       :(<h1>Loading ...{console.log("Cargando...")}</h1>)}
 
    </div>
  );
}

export default App;

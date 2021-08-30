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
       setPosts({posts: res.data, dataReady: true})
      
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  //Hook to load Comments.
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then( res => {
               setComments({comments: res.data, dataReady: true})
             
    })
    .catch(err => {
      console.log(err)
    })
  }, []) 

  return (
      <div className="App">
      <nav className="nav"><span><strong className="str">COMPANY </strong>SOCIAL NETWORK</span></nav>
      {posts.dataReady && comments.dataReady  ? posts.posts.map((data, i) =>
       (<Users key={i} clave={i} data={data} com= {comments} />)) 
       :(<h1>Loading ...{console.log("Cargando...")}</h1>)}
     </div>
  );
}
export default App;

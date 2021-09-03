import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Post from './components/Post/Post'
import './spinner.css'

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

  // Hook to load Users.
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
      console.error(err)
    })
  }, []) 

  return (
    <div className="App">
      <nav className="nav"><span><strong className="str">COMPANY </strong>SOCIAL NETWORK</span></nav>
      {posts.dataReady && comments.dataReady  ? posts.posts.map((data, i) =>
      (<Post key={i} clave={i} post={data} com= {comments} />)) 
      :<div class="lds-ring"><div></div><div></div><div></div><div></div></div>}
    </div>
  );
}
export default App;

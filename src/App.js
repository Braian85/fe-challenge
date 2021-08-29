import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './components/users/Users'

function App() {
  const [posts, setPosts] = useState({
    dataReady: false,
    posts: []

  })

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then( res => {
        //console.log(res)
        
        setPosts({posts: res.data, dataReady: true})
        console.log("Setea")
        
    })
    .catch(err => {
      console.log(err)
    })
  }, [posts.dataReady])

  return (

    
    <div className="App">
     

      <nav className="nav">JSON PLACEHOLDER BLOG</nav>
      {posts.dataReady ? posts.posts.map((data, i) => (<Users key={i} data={data}/>)) : (
         <h1>Loading ...</h1>)}

   
    </div>
  );
}

export default App;

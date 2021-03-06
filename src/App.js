import "../src/styles/spinner.css";
import "./styles/App.css";
import { useEffect } from "react";
import axios from "axios";
import PostContainer from "./components/Post/PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, setPostsLoading } from "./redux/slices/postSlices";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.post.posts);
  var postsLoading = useSelector((state) => state?.post.postsLoading);

  // Hook to load Users.
  useEffect(() => {
    dispatch(setPostsLoading(true));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch(addPosts(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setPostsLoading(false));
      });
  }, [dispatch]);

  return (
    <div className="App">
      <nav className="nav">
        <span>
          <strong className="str">Auto</strong>Feed
        </span>
      </nav>

      {!postsLoading ? (
        posts.map((data, i) => <PostContainer key={i} post={data} />)
      ) : (
        <div class="lds-dual-ring"></div>
      )}
    </div>
  );
}
export default App;

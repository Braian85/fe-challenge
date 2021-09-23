// import "./Post.css";
import "./../../../src/styles/Post.css";

function Post({
  post,
  setActivatedComments,
  activatedComments,
  internalAddComment,
}) {
  function togglePanel(e) {
    e.preventDefault();
    setActivatedComments(!activatedComments);
  }

  return (
    <div className="card">
      <div className="header">
        <img
          className="img"
          src={`https://i.pravatar.cc/150?img=${post.userId}`}
          alt="User"
        ></img>
        <div className="title">{post.title} </div>
      </div>
      <div className="body">{post.body} </div>
      <div className="comment-header">
        <button id={post.id} className="btn" onClick={togglePanel}>
          Comments
        </button>
      </div>
      {activatedComments
        ? post.comments.map((e) => (
            <div className="comments">
              <div className="contact-info">
                <div className="name"> {e.name}</div>
                <div className="email"> {e.email}</div>
              </div>
              <div className="body-com">
                <span> {e.body}</span>
              </div>
            </div>
          ))
        : null}
      {activatedComments ? (
        <div className="comments">
          <div className="contact-info">
            <div className="name"> name</div>
            <div className="email"> email</div>
          </div>

          <input
            id="editable"
            placeholder="Add Comments Here..."
            className="body-new-com"
            onKeyPress={internalAddComment}
            commentId={post.id}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Post;

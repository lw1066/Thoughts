export function Comments({ comments }) {
  return (
    <ul id="commentsGrid">
      {comments.map((comment, index) => (
        <li key={index} id="comment">
          <p>{comment.body}</p>
          <p>Comment by : {comment.author}</p>
          <div id="commentActions">
            <p id="votes">{comment.votes} Likes</p>
            <button>+</button>
            <button>-</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

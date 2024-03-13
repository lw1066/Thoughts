import { Comment } from "./Comment";

export function Comments({ comments, setComments, handleError }) {
  return (
    <ul id="commentsGrid">
      {comments.map((comment) => (
        <Comment
          comment={comment}
          setComments={setComments}
          handleError={handleError}
          key={comment.comment_id}
        />
      ))}
    </ul>
  );
}

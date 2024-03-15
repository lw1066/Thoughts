import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment, getComments } from "../utils/api-requests";

export function Comment({
  comment: { comment_id, body, votes, author, created_at, article_id },
  setComments,
  handleError,
}) {
  const [showDelete, setShowDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { user } = useContext(UserContext);
  const options = { day: "numeric", month: "short", year: "numeric" };

  async function deleteHandler(comment_id) {
    setIsDeleting(true);
    let rollBackComments = [];
    try {
      setComments((curr) => {
        rollBackComments = [...curr];
        const updatedComments = curr.filter(
          (comment) => comment.comment_id != comment_id
        );
        return updatedComments;
      });
      await deleteComment(comment_id);
    } catch (error) {
      setComments((curr) => rollBackComments);
      handleError("Could not delete - try again later");
    }
  }

  return (
    <>
      {showDelete && (
        <div className="deleteCheck">
          <p>Are you sure you want to delete your comment below?</p>
          <div>
            <button
              onClick={() => deleteHandler(comment_id)}
              disabled={isDeleting}
            >
              {isDeleting ? "DELETING" : "Delete"}
            </button>
            <button onClick={() => setShowDelete(false)} disabled={isDeleting}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <li className="comment">
        {user.username === author && (
          <div id="commentHeader">
            <button id="delete" onClick={() => setShowDelete(true)}>
              X
            </button>
          </div>
        )}

        <p>{body}</p>
        <p>Comment by : {author}</p>
        <p id="commentDate">
          {new Date(created_at).toLocaleString("en-GB", options)}
        </p>
        {/* comment votes to be implemented 
          <div id="commentActions">
          <button>+</button>
          <p id="votes">{votes} Likes</p>
          <button>-</button>
        </div> */}
      </li>
    </>
  );
}

import { useState } from "react";
import { addCommentHandler, getComments } from "../utils/api-requests";

export function AddComment({
  toggleAddCommentModal,
  article_id,
  username,
  setComments,
  handleError,
}) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function newCommentHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    let rollBackComments = [];
    setComments((curr) => {
      rollBackComments = [...curr];
      const updatedComments = [
        {
          body: newComment,
          votes: 0,
          author: username,
          article_id: article_id,
          created_at: new Date().toUTCString(),
        },
        ...curr,
      ];
      return updatedComments;
    });
    setNewComment("");
    try {
      await addCommentHandler(article_id, newComment, username);
    } catch (err) {
      setComments(rollBackComments);
      handleError("Could not add comment - try again later");
    } finally {
      setIsLoading(false);
      toggleAddCommentModal();
    }
  }

  return (
    <div>
      <form id="commentForm" onSubmit={newCommentHandler}>
        <label id="commentLabel">{`Commenting as ${username}`}</label>
        <textarea
          name="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={5}
          cols={25}
          style={{ fontSize: "14px" }}
          required
        />
        <div className="addCommentButtons">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "SUBMITTING" : "Submit"}
          </button>
          <button onClick={toggleAddCommentModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

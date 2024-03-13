import { useState } from "react";
import { addCommentHandler, getComments } from "../utils/api-requests";

export function AddComment({
  toggleAddCommentModal,
  article_id,
  username,
  setComments,
}) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function newCommentHandler(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addCommentHandler(article_id, newComment, username);
      const updatedComments = await getComments(article_id);
      setComments(updatedComments);
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment: ", err);
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? "SUBMITTING" : "Submit"}
        </button>
      </form>
    </div>
  );
}

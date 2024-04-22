import { useContext, useState } from "react";
import { Link, useParams, useLoaderData, useNavigate } from "react-router-dom";
import { getComments } from "../utils/api-requests";
import { VoteButtons } from "../components/VoteButtons";
import { Comments } from "../components/Comments";
import { UserContext } from "../contexts/UserContext";
import { AddComment } from "../components/AddComment";
import ErrorModal from "../components/ErrorModal";

export default function FullArticle() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  const article = useLoaderData();

  const {
    title,
    article_img_url,
    topic,
    author,
    created_at,
    body,
    votes,
    comment_count,
  } = article;

  const date = new Date(created_at).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const commentHandler = async (id) => {
    if (!showComments) {
      const comments = await getComments(id);
      setShowComments((curr) => !curr);
      setComments(comments);

      if (comments.length === 0) {
        setComments([{ body: "No comments to display" }]);
      }
    } else {
      setShowComments((curr) => !curr);
      if (showAddCommentModal) toggleAddCommentModal();
    }
  };

  const toggleAddCommentModal = () => {
    setShowAddCommentModal(!showAddCommentModal);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  const handleBackNav = () => {
    navigate(-1);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="fullArticle">
      <div className="title">
        <h1>{title}</h1>
        <p id="author">
          By {author} on {date}
        </p>
      </div>
      <div className="image">
        <img src={article_img_url} alt={title} />
      </div>

      <p className="bodyText">{body}</p>
      <div className="info">
        <VoteButtons votes={votes} article_id={article_id} />
        <button onClick={handleBackNav}>Back to articles</button>
        <button id="commentsButton" onClick={() => commentHandler(article_id)}>
          {showComments ? "Hide comments" : `Show ${comment_count} Comments`}
        </button>
      </div>
      <div className="comments">
        {showAddCommentModal && (
          <AddComment
            toggleAddCommentModal={toggleAddCommentModal}
            article_id={article_id}
            username={user.username}
            setComments={setComments}
            handleError={handleError}
          />
        )}
        {showComments && user.username && !showAddCommentModal && (
          <button id="commentsButton" onClick={toggleAddCommentModal}>
            Add comment
          </button>
        )}
        {showComments && (
          <Comments
            comments={comments}
            setComments={setComments}
            handleError={handleError}
          />
        )}
      </div>
      {error && <ErrorModal error={error} clearError={clearError} />}
    </div>
  );
}

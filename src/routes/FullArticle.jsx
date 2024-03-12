import { useState } from "react";
import { Link, useParams, useLoaderData, Outlet } from "react-router-dom";
import { getComments } from "../utils/api-requests";

export default function FullArticle() {
  const [comments, setComments] = useState(null);
  const [showComments, setShowComments] = useState(false);
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
    }
  };

  return (
    <div className="fullArticle">
      <div className="img">
        <img src={article_img_url} alt={title} />
      </div>
      <h1>{title}</h1>
      <p id="author">
        Author: {author} - {date}
      </p>
      <p className="bodyText">{body}</p>
      <Link to="/articles">
        <button>Back to articles</button>
      </Link>
      <p>UpVotes: {votes}</p>
      <div id="voting">
        <p>Like it?</p>
        <div id="buttonGroup">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <p>Comments: {comment_count}</p>
      <button id="commentsButton" onClick={() => commentHandler(article_id)}>
        {showComments ? "Hide comments" : "Show Comments"}
      </button>

      {showComments && (
        <ul id="commentsGrid">
          {comments.map((comment, index) => (
            <li key={index} id="comment">
              <p>{comment.body}</p>
              <p>Comment by : {comment.author}</p>
              <div id="commentActions">
                <p id="votes">{comment.votes} Votes</p>
                <button id="comButUp">+</button>
                <button id="comButDown">-</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";
import { patchVote } from "../utils/api-requests";
import { useEffect, useState } from "react";
import { VoteButtons } from "./VoteButtons";

export function Article({
  article_id,
  title,
  topic,
  votes,
  article_img_url,
  comment_count,
}) {
  const linkPointer = `/articles/${article_id}`;

  return (
    <li className="articleCard">
      <img className="articleImg" src={article_img_url} alt={title} />
      <div className="titles">
        <Link className="title" to={linkPointer}>
          <h2>{title}</h2>
        </Link>
      </div>
      <div className="info">
        <p className="topic">topic: {topic}</p>
        <p className="comments">comments: {comment_count}</p>
      </div>

      <VoteButtons votes={votes} article_id={article_id} />
    </li>
  );
}

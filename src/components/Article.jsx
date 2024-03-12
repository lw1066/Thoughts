import { Link } from "react-router-dom";

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
        <p className="topic">topic: {topic}</p>
      </div>
      <div className="info">
        <p className="comments">comments: {comment_count}</p>
        <p className="votes">Upvotes: {votes}</p>
      </div>
      <div className="likeIt">
        <p>Like it?</p>

        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
}

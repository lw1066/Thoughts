import { Article } from "../components/Article";
import { useLoaderData } from "react-router-dom";

export default function Articles() {
  const articles = useLoaderData();

  return (
    <ul id="articlesList">
      {articles.map((article) => {
        return <Article key={article.article_id} {...article} />;
      })}
    </ul>
  );
}

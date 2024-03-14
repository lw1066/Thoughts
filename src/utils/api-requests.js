import axios from "axios";

const url = "https://news-api-demo.onrender.com";

export async function articlesLoader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const requestUrl = url + "/api/articles?" + searchParams;

  try {
    const articles = await axios.get(requestUrl);
    return articles.data.articles;
  } catch (err) {
    console.error("error loading articles", err);
    throw err;
  }
}

export async function articleLoader({ params }) {
  const requestUrl = url + `/api/articles/${params.article_id}`;

  try {
    const article = await axios.get(requestUrl);
    return article.data;
  } catch (err) {
    console.error("error loading articles", err);
    throw err;
  }
}

export async function topicsLoader() {
  const requestUrl = url + "/api/topics";

  try {
    const topics = await axios.get(requestUrl);
    return topics.data;
  } catch (err) {
    console.error("error loading topics", err);
    throw err;
  }
}

export async function getComments(id) {
  const requestUrl = url + `/api/articles/${id}/comments`;

  try {
    const comments = await axios.get(requestUrl);
    return comments.data.comments;
  } catch (err) {
    console.error("error loading articles", err);
    throw err;
  }
}

export async function patchVote(vote, article_id) {
  const requestUrl = url + `/api/articles/${article_id}`;
  const body = { inc_votes: vote };

  try {
    const updatedArticle = await axios.patch(requestUrl, body);
    return updatedArticle;
  } catch (err) {
    console.error("error loading articles", err);
    throw err;
  }
}

export async function addCommentHandler(article_id, newComment, username) {
  const requestUrl = url + `/api/articles/${article_id}/comments`;
  const body = { userName: username, body: newComment };

  try {
    const newCommentResponse = await axios.post(requestUrl, body);
    return newCommentResponse;
  } catch (err) {
    console.error("error adding comment", err);
    throw err;
  }
}

export async function deleteComment(comment_id) {
  const requestUrl = url + `/api/comments/${comment_id}`;

  try {
    await axios.delete(requestUrl);
    return `comment id: ${comment_id} deleted`;
  } catch (err) {
    console.error("error deleting comment", err);
    throw err;
  }
}

import React, { useEffect, useState } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export function Filter() {
  const [showFilters, setShowFilters] = useState(false);
  const [topic, setTopic] = useState("");
  const [sort, setSort] = useState({ topic: "", sortBy: "", sortOrder: "" });
  const topics = useLoaderData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const topicInUrl = searchParams.get("topic");

  useEffect(() => {
    if (topicInUrl) setTopic(topicInUrl);
  }, []);

  const toggleShow = (e) => {
    setShowFilters(!showFilters);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toggleShow();
    setTopic(sort.topic);
    let url = `/articles?topic=${sort.topic}`;
    if (sort.sortBy) url = url + `&sort_by=${sort.sortBy}`;
    if (sort.sortOrder === "ASC") url = url + "&order=ASC";
    navigate(url);
  };

  const handleChange = (e) => {
    setSort((curr) => {
      return { ...curr, [e.target.id]: e.target.value };
    });
  };

  return (
    <>
      <p className="headerText">Filter Articles</p>
      <button className="headerButton" onClick={toggleShow}>
        {topic ? `${topic} articles` : "All articles"}
      </button>

      {showFilters && (
        <div className="modal">
          <form
            onSubmit={submitHandler}
            id="filterNav"
            className="modal-content"
          >
            <label htmlFor="topic">Topic</label>
            <select id="topic" value={sort.topic} onChange={handleChange}>
              <option value="">All articles</option>
              {topics.map((topic) => (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              ))}
            </select>

            <label htmlFor="sortBy">Sort</label>
            <select id="sortBy" value={sort.sortBy} onChange={handleChange}>
              <option value="created_at">Date</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>

            <fieldset>
              <legend>Order</legend>
              <label>
                <input
                  id="sortOrder"
                  type="radio"
                  value="ASC"
                  checked={sort.sortOrder === "ASC"}
                  onChange={handleChange}
                />
                {sort.sortBy === "created_at" ? "Oldest first" : "Lowest first"}
              </label>
              <label>
                <input
                  id="sortOrder"
                  type="radio"
                  value="DESC"
                  checked={sort.sortOrder === "DESC"}
                  onChange={handleChange}
                />
                {sort.sortBy === "created_at"
                  ? "Newest first"
                  : "Highest first"}
              </label>
            </fieldset>

            <div>
              <button onClick={toggleShow}>Forget It</button>
              <button>Let's Go!</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

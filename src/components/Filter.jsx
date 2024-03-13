import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export function Filter() {
  const [showFilters, setShowFilters] = useState(false);
  const [topic, setTopic] = useState("");
  const topics = useLoaderData();

  const toggleShow = (e) => {
    setTopic(e.target.id);
    setShowFilters(!showFilters);
  };

  return (
    <>
      <button id="filter" onClick={toggleShow}>
        {topic ? `Showing ${topic} articles` : "Choose articles to view"}
      </button>

      {showFilters && (
        <div className="modal">
          <nav id="filterNav" className="modal-content">
            <Link id="all" to="/articles" onClick={toggleShow}>
              All articles
            </Link>
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                id={topic.slug}
                to={`/articles?topic=${topic.slug}`}
                onClick={toggleShow}
              >
                {topic.slug}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

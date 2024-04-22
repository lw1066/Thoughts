import { useEffect, useState } from "react";
import { patchVote } from "../utils/api-requests";

export function VoteButtons({ votes, article_id }) {
  const [error, setError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [votesCount, setVotesCount] = useState(votes);

  useEffect(() => {
    let errorTimeout;
    if (error) {
      errorTimeout = setTimeout(() => {
        setError(null);
      }, 3000);
    }
    return () => clearTimeout(errorTimeout);
  }, [error]);

  const voteHandler = async (vote, article_id) => {
    if (!hasVoted) {
      setHasVoted(true);
      setVotesCount((curr) => curr + vote);
      try {
        await patchVote(vote, article_id);
      } catch (err) {
        setVotesCount((prevVote) => prevVote - vote);
        setError("Failed to register vote. Please try again later, sorry");
        setHasVoted(false);
        console.error("vote failed: ", err);
      }
    } else {
      setError("You already voted!");
    }
  };

  return (
    <>
      <div className="likeIt">
        <p className="votes">{error ? error : "Upvotes"}</p>
        <div id="votebuttons">
          <button onClick={() => voteHandler(1, article_id)}>+</button>
          <p>{votesCount}</p>
          <button onClick={() => voteHandler(-1, article_id)}>-</button>
        </div>
      </div>
    </>
  );
}

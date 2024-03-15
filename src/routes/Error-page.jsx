import { useNavigate, useRouteError } from "react-router-dom";
import "../index.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  const handleBackNav = () => {
    navigate(-1);
  };

  return (
    <>
      <div id="error-page">
        <img src="/icons8-apologise-100.png" />
        <div>
          <h1>
            Oh dear - how <span style={{ color: "red" }}>embarrassing</span>...
          </h1>
          <p>Sorry, something went wrong.</p>
          <p>
            <i>({error.statusText || error.message})</i>
          </p>
        </div>
        <button onClick={handleBackNav}>Go back</button>
      </div>
      <a target="_blank" href="https://icons8.com/icon/WbwOtqM4KsVs/apologise">
        Apologise
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </>
  );
}

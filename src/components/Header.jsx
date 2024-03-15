import { Link } from "react-router-dom";
import { Filter } from "./Filter";
import { Signin } from "./Signin";

export function Header({ user }) {
  return (
    <>
      <div id="header">
        <Link id="mainTitle">
          <img src="/src/assets/icons8-thinking-bubble-100.png" />
          <h1>Thoughts</h1>
        </Link>

        <div id="signin">
          <Signin />
        </div>
        <Filter />
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import { Filter } from "./Filter";
import { Signin } from "./Signin";

export function Header({ user }) {
  return (
    <>
      <div id="header">
        <Link id="mainTitle">
          <img src="/icons8-thinking-bubble-100.png" />
          <h1>the Thoughts of Others</h1>
        </Link>

        <div id="signin">
          <Signin />
          <Filter />
        </div>
      </div>
    </>
  );
}

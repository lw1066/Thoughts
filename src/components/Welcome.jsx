import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <>
      <div id="welcome">
        <h2 id="welcomeMessage">
          <span className="bigWelcome">Welcome Thinker </span>
        </h2>
        <img
          id="thinker"
          src="/imgonline-com-ua-Negative-C5VEEkvTMOlSeMHD.png"
          alt="The thinker on a phone"
        />

        <p>People have thoughts on many things.</p>
        <p>Choose a topic to explore in the top right.</p>
        <p>Or just take a look at the whole enchilada!</p>
        <Link to="/articles">
          <img
            id="enchilada"
            src="/enchilada-modified.png"
            alt="A hand grasping a big enchilada"
          />
        </Link>
        <p>
          If you'd like to add your thought about other's thoughts, sign in/up.
        </p>
      </div>
    </>
  );
}

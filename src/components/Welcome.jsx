import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <>
      <div id="welcome">
        <h2 id="welcomeMessage">
          <span className="bigWelcome">Welcome </span>
          <br />
          to the <br />
          <span className="bigWelcome">thoughts</span>
          <br /> of <br />
          <span className="bigWelcome">others </span>
        </h2>
        <img
          id="thinker"
          src="src/assets/imgonline-com-ua-Negative-C5VEEkvTMOlSeMHD.png"
          alt="The thinker on a phone"
        />

        <p>People have thought on many things.</p>
        <p>Choose a topic to explore in the top right.</p>
        <p>Or just take a look at the whole enchilaada!</p>
        <Link to="/articles">
          <img
            id="enchilada"
            src="src/assets/enchilada-modified.png"
            alt="A hand grasping a big enchilada"
          />
        </Link>
        <p>If you'd like to add your thoughts about other's thought.</p>
        <p> Sign in/up to add comments!</p>
      </div>
    </>
  );
}

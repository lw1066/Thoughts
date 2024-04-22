import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUserByUsername } from "../utils/api-requests";

export function Signin() {
  const [showSignup, setShowSignup] = useState(false);
  const [newUser, setNewUser] = useState("");
  const { user, setUser } = useContext(UserContext);

  const toggleShow = () => {
    setShowSignup(!showSignup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signingInUser = await getUserByUsername(newUser);
      setUser(signingInUser);
    } catch (err) {
      window.alert("no user found");
    }
    setNewUser("");
    toggleShow();
  };

  const signout = () => {
    setUser({
      username: null,
      name: null,
      avatar_url: null,
    });
  };

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  return (
    <>
      {user.username !== null ? (
        <>
          <p className="headerText">Hi {user.name}!</p>
          <button className="headerButton" onClick={signout}>
            Signout
          </button>
        </>
      ) : (
        <button className="headerButton" onClick={toggleShow}>
          sign-in
        </button>
      )}

      {showSignup && (
        <div className="modal">
          <form
            onSubmit={handleSubmit}
            id="filterNav"
            className="modal-content"
          >
            <label htmlFor="signin">Enter your username</label>
            <input
              id="signin"
              type="text"
              onChange={handleChange}
              value={newUser}
            />
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

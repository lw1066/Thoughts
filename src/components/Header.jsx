export function Header({ user }) {
  return (
    <div id="header">
      <h1>Thoughts...</h1>
      <div id="signin">
        {!user ? (
          <button>sign-in</button>
        ) : (
          <p id="userName">
            Hi
            <br /> {user}!
          </p>
        )}
      </div>
    </div>
  );
}

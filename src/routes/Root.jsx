import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
import { ScrollToTop } from "../utils/ScrollToTop";

export default function Root() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <Header user={user.name} />
      <div id="appContainer">
        <ScrollToTop />
        {useLocation().pathname === "/" && (
          <>
            <p>Landing page will have most upvoted articles and then...</p>
            <Link to="/articles">Come and look at articles</Link>
          </>
        )}
        <Outlet />
      </div>
    </>
  );
}

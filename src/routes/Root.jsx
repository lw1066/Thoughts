import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
import { ScrollToTop } from "../utils/ScrollToTop";
import { Welcome } from "../components/Welcome";

export default function Root() {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const { state } = useNavigation();

  return (
    <>
      <Header />
      <div id="appContainer">
        <ScrollToTop />
        {location.pathname === "/" && <Welcome />}
        {state === "loading" ? <div className="loader"></div> : <Outlet />}
      </div>
    </>
  );
}

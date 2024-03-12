import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function Root() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <Header user={user.name} />
      {true && <Outlet />}
    </>
  );
}

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const startingStateUser = {
    username: null,
    name: null,
    avatar_url: null,
  };
  const [user, setUser] = useState(startingStateUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

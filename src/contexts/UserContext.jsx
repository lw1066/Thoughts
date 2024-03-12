import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const mockUser = {
    username: "rogersop",
    name: "paul",
    avatar_url: "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
  };
  const [user, setUser] = useState(mockUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

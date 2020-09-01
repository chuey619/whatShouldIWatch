import { createContext } from "react";

const UserContext = createContext({
  user: {},
  setCurrentUser: () => {},
});

UserContext.displayName = "userContext";

export default UserContext;

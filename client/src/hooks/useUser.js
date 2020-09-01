import React, { useState, useCallback } from "react";

const useUser = () => {
  const [user, setUser] = useState({ user: {} });

  const setCurrentUser = useCallback((currentUser) => setUser(currentUser), []);

  return {
    user,
    setCurrentUser,
  };
};

export default useUser;

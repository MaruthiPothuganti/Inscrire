import { createContext, useContext, useState } from "react";

const AuthorizationContext = createContext();

const AuthContext = ({ children }) => {
  const [authState, setAuthState] = useState();

  return (
    <AuthorizationContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

const useAuth = () => useContext(AuthorizationContext);
export { useAuth, AuthContext };

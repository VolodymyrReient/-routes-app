import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UnAuthLayout from "../Layout/UnAuthLayout";
import AuthLayout from "../Layout/AuthLayout";

type ContextProps = {
  user: boolean;
  logIn?: () => void;
  logOut?: () => void;
};

export const Context = createContext<ContextProps>({ user: false });

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const logIn = () => {
    setUser(true);
    navigate("/");
  };

  const logOut = () => {
    setUser(false);
  };

  return (
    <Context.Provider value={{ user, logIn, logOut }}>
      {user ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <UnAuthLayout>{children}</UnAuthLayout>
      )}
    </Context.Provider>
  );
};

export default AuthContext;

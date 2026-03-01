import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    <Navigate to="/signIn" />;
  }
  return children;
};

export default PrivateRoute;

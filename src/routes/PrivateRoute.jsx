import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthRoute from "./AuthRoute";
import { useLocation, useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);

  // Get the current URL
  const currentUrl = useLocation().pathname;

  useEffect(() => {
    if (!accessToken) {
      navigate(`/auth/login?redirectTo=${currentUrl}`);
    }
  }, [accessToken, currentUrl, navigate]);
  return accessToken ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <AuthRoute />
  );
};

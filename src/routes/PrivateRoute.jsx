import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthRoute from "./AuthRoute";
import { useLocation, useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);

  // Get the current URL
  const currentUrl = useLocation();

  useEffect(() => {
    if (!accessToken) {
      // Save the current URL as the 'redirectTo' query parameter
      navigate(`/auth/login?redirectTo=${currentUrl.pathname}`);
    }
  }, [accessToken, currentUrl.pathname]);
  return accessToken ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <AuthRoute />
  );
};

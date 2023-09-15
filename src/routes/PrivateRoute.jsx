import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthRoute from "./AuthRoute";
import { useLocation, useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const excludedRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/reset-password",
    "/login",
    "register",
    "/reset-password"
  ];
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);

  // Get the current URL
  const currentUrl = useLocation().pathname;

  useEffect(() => {
    if (!accessToken && !excludedRoutes.includes(currentUrl)) {
      navigate(`/auth/login?redirectTo=${currentUrl}`);
    }
  }, [accessToken, currentUrl, navigate]);
  return accessToken ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <AuthRoute />
  );
};

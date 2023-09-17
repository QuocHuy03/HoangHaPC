import React, { useEffect } from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { URL_CONSTANTS } from "../constants/url.constants";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRedirectTo } from "../stores/redirect/actions";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

export default function AuthRoute() {
  const location = useLocation();
  const redirectTo = new URLSearchParams(location.search).get("redirectTo");
  const dispatch = useDispatch();

  useEffect(() => {
    if (redirectTo) {
      dispatch(setRedirectTo(redirectTo));
    }
  }, [redirectTo, dispatch]);
  return (
    <Routes>
      <Route path={URL_CONSTANTS.LOGIN} element={<LoginPage />} />
      <Route path={URL_CONSTANTS.REGISTER} element={<RegisterPage />} />
      <Route
        path={URL_CONSTANTS.FORGOT_PASSWORD}
        element={<ForgotPasswordPage />}
      />
         <Route
        path={URL_CONSTANTS.RESET_PASSWORD}
        element={<ResetPasswordPage />}
      />
    </Routes>
  );
}

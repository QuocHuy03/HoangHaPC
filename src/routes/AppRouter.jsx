import React from "react";
import { PrivateRoute } from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailProductPage from "../pages/DetailProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import FilterPage from "../pages/FilterPage";
import ConditionsPolicyPage from "../pages/ConditionsPolicyPage";
import BlogPage from "../pages/BlogPage";
import PromotionPage from "../pages/PromotionPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import PromotionDetailPage from "../pages/PromotionDetailPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import { URL_CONSTANTS } from "../constants/url.constants";
import CheckoutPage from "../pages/CheckoutPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={URL_CONSTANTS.HOME} element={<HomePage />} />
      <Route path={URL_CONSTANTS.DETAIL} element={<DetailProductPage />} />
      <Route path={URL_CONSTANTS.NOTFOUND} element={<NotFoundPage />} />
      <Route path={URL_CONSTANTS.FILTER} element={<FilterPage />} />
      <Route
        path={URL_CONSTANTS.CONDITIONS_POLICY}
        element={<ConditionsPolicyPage />}
      />
      <Route path={URL_CONSTANTS.BLOG} element={<BlogPage />} />
      <Route path={URL_CONSTANTS.PROMOTION} element={<PromotionPage />} />
      <Route path={URL_CONSTANTS.BLOG_DETAIL} element={<BlogDetailPage />} />
      <Route
        path={URL_CONSTANTS.PROMOTION_DETAIL}
        element={<PromotionDetailPage />}
      />
      <Route path={URL_CONSTANTS.CART} element={<CartPage />} />
      <Route path={URL_CONSTANTS.PROFILE} element={<ProfilePage />} />
      <Route path={URL_CONSTANTS.CHECKOUT} element={<CheckoutPage />} />
      
    </Routes>
  );
}

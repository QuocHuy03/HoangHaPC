import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { URL_CONSTANTS } from "./constants/url.constants";
import { useEffect } from "react";
import FilterPage from "./pages/FilterPage";
import ConditionsPolicyPage from "./pages/ConditionsPolicyPage";
import PromotionPage from "./pages/PromotionPage";
import DetailProductPage from "./pages/DetailProductPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogPage from "./pages/BlogPage";
import PromotionDetailPage from "./pages/PromotionDetailPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { useSelector } from "react-redux";

function App() {
  const { accessToken } = useSelector((state) => state.auth);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");
    console.log("accessToken : ", accessToken);
    console.log("refreshToken : ", refreshToken);
    const newUser = params.get("newUser");
    // if (newUser === "false") {
    //   alert("Login");
    // } else {
    //   alert("Đăng Ký");
    // }
  }, [params]);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [accessToken]);
  return (
    <Routes>
      {accessToken ? (
        <>
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
          <Route
            path={URL_CONSTANTS.BLOG_DETAIL}
            element={<BlogDetailPage />}
          />
          <Route
            path={URL_CONSTANTS.PROMOTION_DETAIL}
            element={<PromotionDetailPage />}
          />
          <Route path={URL_CONSTANTS.CART} element={<CartPage />} />
          <Route path={URL_CONSTANTS.PROFILE} element={<ProfilePage />} />
          <Route
            path={URL_CONSTANTS.RESET_PASSWORD}
            element={<ResetPasswordPage />}
          />
        </>
      ) : (
        <>
          <Route path={URL_CONSTANTS.LOGIN} element={<LoginPage />} />
          <Route path={URL_CONSTANTS.REGISTER} element={<RegisterPage />} />
        </>
      )}
    </Routes>
  );
}

export default App;

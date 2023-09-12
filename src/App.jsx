import { Route, Routes, useSearchParams } from "react-router-dom";
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

function App() {
  const [params] = useSearchParams();
  useEffect(() => {
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");
    console.log("accessToken : ", accessToken);
    console.log("refreshToken : ", refreshToken);
    const newUser = params.get("newUser");
    if (newUser === "false") {
      alert("Login");
    } else {
      alert("Đăng Ký");
    }
  }, [params]);
  return (
    <Routes>
      {/* {user && user.role === "ADMIN" ? ( */}
      <>
        <Route path={URL_CONSTANTS.HOME} element={<HomePage />} />
        <Route path={URL_CONSTANTS.LOGIN} element={<LoginPage />} />
        <Route path={URL_CONSTANTS.REGISTER} element={<RegisterPage />} />
        <Route path={URL_CONSTANTS.DETAIL} element={<DetailProductPage />} />
        <Route path={URL_CONSTANTS.NOTFOUND} element={<NotFoundPage />} />
        <Route path={URL_CONSTANTS.FILTER} element={<FilterPage />} />
        <Route path={URL_CONSTANTS.CONDITIONS_POLICY} element={<ConditionsPolicyPage />} />
        <Route path={URL_CONSTANTS.BLOG} element={<BlogPage />} />
        <Route path={URL_CONSTANTS.PROMOTION} element={<PromotionPage />} />
        <Route path={URL_CONSTANTS.BLOG_DETAIL} element={<BlogDetailPage />} />
        <Route path={URL_CONSTANTS.PROMOTION_DETAIL} element={<PromotionDetailPage />} />
        <Route path={URL_CONSTANTS.CART} element={<CartPage />} />

      </>
      {/* ) : ( */}
      <>
        {/* <Route path="/auth" element={<Login />} />
        <Route path="*" element={<Login />} /> */}
      </>
      {/* )} */}
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { URL_CONSTANTS } from "./constants/url.constants";

function App() {
  return (
    <Routes>
      {/* {user && user.role === "ADMIN" ? ( */}
      <>
        <Route path={URL_CONSTANTS.HOME} element={<HomePage />} />
        <Route path={URL_CONSTANTS.LOGIN} element={<LoginPage />} />
        <Route path={URL_CONSTANTS.REGISTER} element={<RegisterPage />} />
        <Route path={URL_CONSTANTS.NOTFOUND} element={<NotFoundPage />} />
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

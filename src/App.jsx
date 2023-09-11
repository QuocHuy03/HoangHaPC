import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      {/* {user && user.role === "ADMIN" ? ( */}
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
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

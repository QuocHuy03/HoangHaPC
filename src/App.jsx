import { Route, Routes, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { PrivateRoute } from "./routes/PrivateRoute";
import AuthRoute from "./routes/AuthRoute";

function App() {
  const [params] = useSearchParams();
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


  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />

      <Route
        path="*"
        element={
          <PrivateRoute>
            <AppRouter />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      {/* {user && user.role === "ADMIN" ? ( */}
      <>
        <Route path="/" element={<HomePage />} />

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

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProtectedRoute element={<Home />} />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;

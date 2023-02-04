import { Routes, Route } from "react-router-dom";
import Singup from "../pages/Singup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";

const MainRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/register" element={<Singup />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;

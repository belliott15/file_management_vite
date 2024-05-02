import { Route, Routes } from "react-router-dom";
import { NavigationComponent } from "../components/HomePageComponent";
import { checkIsLoggedIn } from "../redux/ActionCreators/authActionCreator";

import Homepage from "../pages/HomePage/Homepage";
import Login from "../pages/AuthPages/Login/Login";
import Register from "../pages/AuthPages/Register/Register";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const BaseLayout = () => {
  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return (
    <div>
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default BaseLayout;

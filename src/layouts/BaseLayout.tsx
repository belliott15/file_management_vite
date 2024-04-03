import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage/Homepage";
import Login from "../pages/AuthPages/Login/Login";
import Register from "../pages/AuthPages/Register/Register";
import { NavigationComponent } from "../components/HomePageComponent";
import Footer from "../components/Footer/Footer";

const BaseLayout = () => {
  return (
    <div>
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default BaseLayout;

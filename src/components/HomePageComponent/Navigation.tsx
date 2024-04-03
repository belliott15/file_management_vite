import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <nav className="bg-gray-700 flex justify-between p-2">
      <Link className="ms-5 text-xl text-white" to="/">
        File <span className="text-emerald-600 font-extrabold">DRIVE</span>
      </Link>
      <ul className="flex items-center ">
        <li className="bg-white rounded-lg p-1 hover:text-emerald-600">
          <Link className="" to="/login">
            Login
          </Link>
        </li>
        <li className="bg-emerald-600 rounded-lg p-1 mx-2 hover:bg-emerald-600 hover:text-white">
          <Link className="" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationComponent;

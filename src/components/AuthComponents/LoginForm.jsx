import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../redux/ActionCreators/authActionCreator.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    signInUser(email, password, setSuccess);
  };

  useEffect(() => {
    if (success) {
      navigate("/dashboard");
    }
  }, [success]);

  return (
    <form
      autoComplete="off"
      className="flex flex-col items-center gap-2  bg-gray-700 p-10 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-3">
        <input
          // required/
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
        />
        <input
          // required
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
        />
        <button className="bg-emerald-700 rounded-lg p-2 w-20">Login</button>
      </div>
      <p className="text-xs text-white">
        Don't have an account? Click{" "}
        <Link
          to={"/register"}
          className="underline text-emerald-600 hover:text-emerald-950"
        >
          here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;

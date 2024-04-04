import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form
      autoComplete="off"
      className="flex flex-col items-center gap-2  bg-gray-700 p-10 rounded-lg shadow-lg"
    >
      <div className="flex flex-col items-center gap-3">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
        />
        <input
          type="text"
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { signUpUser } from "../../redux/ActionCreators/authActionCreator.js";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !passwordConfirmation
    ) {
      alert("Please fill in all fields.");
    }
    if (password !== passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }

    signUpUser(firstName, lastName, email, password);
  };

  return (
    <form
      autoComplete="off"
      className="flex flex-col items-center gap-2  bg-gray-700 p-10 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 items-start border-r-2 border-emerald-800 pr-3">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
          />
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="border-2 border-emerald-600 rounded-md focus:outline-none p-1"
          />
        </div>
      </div>
      <button className="bg-emerald-700 rounded-lg p-3 w-20 hover:bg-gray-300">
        Register
      </button>
      <p className="text-xs text-white">
        Already have an account? Click{" "}
        <Link
          to={"/login"}
          className="underline text-emerald-600 hover:text-emerald-950"
        >
          here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;

import LoginForm from "../../../components/AuthComponents/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-5 pt-20">
      <div>
        <h1 className="font-extrabold text-5xl text-emerald-600">
          Login To File Drive
        </h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;

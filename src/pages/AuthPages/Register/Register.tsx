import RegisterForm from "../../../components/AuthComponents/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col items-center gap-5 pt-20">
      <div>
        <h1 className="font-extrabold text-5xl text-emerald-600">
          Register for File Drive
        </h1>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;

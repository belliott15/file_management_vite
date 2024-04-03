const Homepage = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-emerald-700 to-slate-600">
      <div className=" flex justify-center items-start p-10">
        <a
          href="/login"
          className="border-2 border-emerald-600 rounded-lg bg-white opacity-45 items-center p-6"
        >
          <h1 className="text-3xl text-black font-extrabold md:text-5xl">
            Welcome to File Drive
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Homepage;

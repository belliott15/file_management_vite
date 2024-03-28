import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-between bg-slate-400 p-2">
      {/* left section */}
      <h1>
        File <span>DRIVE</span>
      </h1>
      {/* right section */}
      <div className="flex">
        <Search />
        <span className="bg-black rounded-xl h-6 w-6 mx-2">X</span>
      </div>
    </div>
  );
};

export default Header;

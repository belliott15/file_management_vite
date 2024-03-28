import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-between">
      {/* left section */}
      <h1>
        File <span>DRIVE</span>
      </h1>
      {/* right section */}
      <div>
        <Search />
        <span className="bg-black rounded-xl">
          <img />
        </span>
      </div>
    </div>
  );
};

export default Header;

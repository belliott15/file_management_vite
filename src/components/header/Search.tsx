import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="bg-white rounded-md p-1">
      <form onSubmit={() => console.log("search")}>
        <input placeholder="Search" className="focus:outline-none" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default Search;

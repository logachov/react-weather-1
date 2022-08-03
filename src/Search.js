import "./Search.css";

export default function Search() {
  return (
    <div className="search-form">
      <form>
        <input
          type="text"
          placeholder="Enter a city"
          id="search"
          autoComplete="off"
        />
        <button type="submit" className="search">
          Search
        </button>
      </form>
    </div>
  );
}

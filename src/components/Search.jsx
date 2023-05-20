import './Search.css'

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

import SearchListItem from "./SearchListItem";
import object from "../../data/search.json";

function SearchList() {
  return (
    <div>
      {object.map((e, i) => (
        <div key={i}>
          <SearchListItem object={e} />
        </div>
      ))}
    </div>
  );
}

export default SearchList;

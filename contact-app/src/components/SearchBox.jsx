import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
};

export default SearchBox;

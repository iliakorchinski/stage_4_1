import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { setSearchTerm } from '../../../store/searchSlice';
import classes from './Search.module.css';
import crossIcon from '../../../assets/icons/cross-icon-green.svg';
export const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };
  return (
    <div role="search" className={classes.searchContainer}>
      <input
        type="search"
        placeholder="search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <button
          type="button"
          className={classes.clearInputBtn}
          onClick={() => dispatch(setSearchTerm(''))}
        >
          <img src={crossIcon} alt="Clear search" />
        </button>
      )}
    </div>
  );
};

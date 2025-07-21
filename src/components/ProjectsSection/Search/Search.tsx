import { useContext, ChangeEvent } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import classes from './Search.module.css';
import crossIcon from '../../../assets/icons/cross-icon-green.svg';
export const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
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
          onClick={() => setSearchTerm('')}
        >
          <img src={crossIcon} alt="Clear search" />
        </button>
      )}
    </div>
  );
};

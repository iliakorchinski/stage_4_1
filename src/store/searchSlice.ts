type SearchState = {
  searchTerm: string;
};

const initialState: SearchState = {
  searchTerm: '',
};

type SearchAction = { type: string; payload: string };

export const searchReducer = (
  state = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export const setSearchTerm = (term: string) => ({
  type: 'SET_SEARCH_TERM',
  payload: term,
});

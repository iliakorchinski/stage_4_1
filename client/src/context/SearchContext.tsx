import { ReactNode } from 'react';
import { createContext, useState } from 'react';

export const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: (term: string) => {},
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

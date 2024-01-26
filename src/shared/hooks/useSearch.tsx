import { IEventProps } from '@/types';
import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import { api, SEARCH_EVENTS } from '@/services'; 

interface ISearchProvider {
    search: string | undefined;
    searchEvents: IEventProps[] | null;
    handleSearchEvents: (search: string) => void;
    handleClearSearchEvents: () => void;
}

const SearchContext = createContext({} as ISearchProvider);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearch, setIsSearch] = useState<string>();
  const [isSearchEvents, setIsSearchEvents] = useState<IEventProps[] | null>(null);

  const handleSearchEvents = useCallback(async (search: string) => {
    setIsSearch(search);
    const { data } = await api.get(`${SEARCH_EVENTS}?bu=1&pp=nome,id,descricao,link,dataRealizacao,horario,imagens,foto,encerrado&nome=${search}&i=0&t=12`) as { data: { eventos: IEventProps[] } };

    setIsSearchEvents(data.eventos);
  }, []);

  const handleClearSearchEvents = useCallback(() => {
    setIsSearchEvents(null);
    setIsSearch('');
  }, []);

  return (
    <SearchContext.Provider value={{
      search: isSearch, handleSearchEvents, handleClearSearchEvents, searchEvents: isSearchEvents,
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): ISearchProvider => {
  const context = useContext(SearchContext);
  return context;
};

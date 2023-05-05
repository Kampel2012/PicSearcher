import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Gallery from '../components/Gallery/Gallery';
import Spinner from '../components/Spinner/Spinner';
import api from '../API/Api';

const Main = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resErr, setResErr] = useState('');

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      api
        .search(searchQuery)
        .then((data) => {
          const results = data.results.map((item) => {
            return {
              id: item.id,
              title: item.description,
              alt: item.alt_description,
              url: { thumb: item.urls.small, large: item.urls.regular },
              author: item.user.name,
              likes: item.likes,
            };
          });
          if (results.length > 0) {
            setCards(results);
          } else {
            setResErr('По запросу ничего не найдено!');
          }
        })
        .catch((e) => console.warn(e))
        .finally(() => setIsLoading(false));
    }
  }, [searchQuery]);

  function searchBarOnSubmit(e) {
    e.preventDefault();
    setSearchQuery(inputValue);
  }

  function searchBarOnChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <main>
      <SearchBar
        handlerSubmit={searchBarOnSubmit}
        handlerInput={searchBarOnChange}
      />
      {isLoading ? <Spinner /> : <Gallery cards={cards} resErr={resErr} />}
    </main>
  );
};

export default Main;

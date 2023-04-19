import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import api from './API/Api';
import Spinner from './components/Spinner';

function App() {
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

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <SearchBar
          hendlerSubmit={() => setSearchQuery(inputValue)}
          hendlerInput={(evt) => setInputValue(evt.target.value)}
        />
        {isLoading ? <Spinner /> : <Gallery cards={cards} resErr={resErr} />}
      </main>
    </div>
  );
}

export default App;

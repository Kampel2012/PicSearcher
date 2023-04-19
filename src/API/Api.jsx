const API_KEY = 'AL9WPeAKwtrM3C1J83WDTmDUJtsOKxeuAziBJBLdOlo'; // здесь нужно вставить свой ключ с https://unsplash.com/ после регистрации

class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(query) {
    return fetch(
      `${this._baseUrl}/search/photos?per_page=50&orientation=landscape&query=${query}`,
      {
        headers: {
          Authorization: `Client-ID ${this._apiKey}`,
        },
      }
    ).then((res) => res.json());
  }
}

const api = new Api({
  baseUrl: 'https://api.unsplash.com/',
  apiKey: API_KEY,
});

export default api;

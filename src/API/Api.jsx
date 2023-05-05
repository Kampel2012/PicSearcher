const API_KEY = 'AL9WPeAKwtrM3C1J83WDTmDUJtsOKxeuAziBJBLdOlo'; // здесь нужно вставить свой ключ с https://unsplash.com/ после регистрации

class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  async search(query) {
    const res = await fetch(
      `${this._baseUrl}/search/photos?per_page=50&orientation=landscape&query=${query}`,
      {
        headers: {
          Authorization: `Client-ID ${this._apiKey}`,
        },
      }
    );
    return await res.json();
  }

  async getPhotoById(id) {
    const res = await fetch(`${this._baseUrl}/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    });
    return await res.json();
  }
}

const api = new Api({
  baseUrl: 'https://api.unsplash.com/',
  apiKey: API_KEY,
});

export default api;

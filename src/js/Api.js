export default class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _fetchRequest = (path, method = 'GET', body) => {
    return fetch(`${this._url}${path}`, {
      method: `${method}`,
      headers: {
        authorization: `${this._headers.authorization}`,
        'Content-Type': 'application/json'
      },
      body: method == 'PATCH' ? JSON.stringify({
        name: 'Marie Skłodowska Curie',
        about: 'Physicist and Chemist'
      }) : null
    }).then(res => {
      if (res.ok) {
        // console.log(res.json())
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });

  }

  getInitialCards = () => {
    return this._fetchRequest('/cards')
  }

  getInfoAuthor = () => {
    return this._fetchRequest('/users/me')
  }

  saveProfile() {
    const test = {
      name: 'Marie Skłodowska Curie',
      about: 'Physicist and Chemist'
    }
    return this._fetchRequest('/users/me', 'PATCH', test)
  }
}
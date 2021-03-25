export default class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _fetchRequest = (path, method = 'GET', {
    ...body
  }) => {
    return fetch(`${this._url}${path}`, {
      method: `${method}`,
      headers: {
        authorization: `${this._headers.authorization}`,
        'Content-Type': 'application/json'
      },
      body: method.indexOf('GET', 'DELETE') ? JSON.stringify({
        ...body
      }) : null
      // body: method != 'GET' ? JSON.stringify({
      //   ...body
      // }) : null
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }).catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

  }

  getInitialCards = () => {
    return this._fetchRequest('/cards')
  }

  getInfoAuthor = () => {
    return this._fetchRequest('/users/me')
  }

  saveProfile = (data, setInfoProfile) => {
    return this._fetchRequest('/users/me', 'PATCH', data)
      .then(data => setInfoProfile(data))
  }

  postCard = (data) => {
    return this._fetchRequest('/cards', 'POST', data)
  }

  // like = () => {
  //   return this._fetchRequest('/cards', 'POST', data)
  // }

  deleteCard = (idCard) =>  {
    console.log('delcar')
    return this._fetchRequest(`/cards/${idCard}`, 'DELETE')
  }
}
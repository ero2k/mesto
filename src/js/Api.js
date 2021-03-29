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
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getInitialCards = () => {
    return this._fetchRequest('/cards')
  }

  getInfoAuthor = () => {
    return this._fetchRequest('/users/me')
  }

  saveProfile = (data) => {
    return this._fetchRequest('/users/me', 'PATCH', data)
  }

  postCard = (data) => {
    return this._fetchRequest('/cards', 'POST', data)
  }

  like = (idCard, isLiked) => {
    const method = isLiked ? 'DELETE' : 'PUT'
    return this._fetchRequest(`/cards/likes/${idCard}`, `${method}`)
  }

  deleteCard = (idCard) => {
    return this._fetchRequest(`/cards/${idCard}`, 'DELETE')
  }

  updateAvatar = (data) => {
    return this._fetchRequest(`/users/me/avatar`, 'PATCH', data)
  }
}
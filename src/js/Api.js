export default class Api {
    constructor({baseUrl, headers}) {
      this._url = baseUrl;
      this._headers = headers;
    }
  
    getInitialCards() {
      fetch(`${this._url}/cards`, { 
          headers: {
              authorization: `${this._headers.authorization}`
      }   } )


      .then(res => res.json())
      .then(data => console.log(data))
    }
  
    // другие методы работы с API
  }
  

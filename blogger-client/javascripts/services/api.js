class Api {
  static baseUrl = 'http:localhost:3000/api'

  static post(url, data) {
    return fetch(Api.baseUrl + url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
  }

  static get(url) {
    return fetch(this.baseUrl + url)
      .then(resp => resp.json())
  }
}
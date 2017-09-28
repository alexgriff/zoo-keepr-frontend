class Api {

  fetchAnimals() {
    return this.get(`http://localhost:3000/api/v1/animals/`)
  }

  createAnimal(data) {
    return this.post(`http://localhost:3000/api/v1/animals/`, data)
  }


  get(url) {
    return fetch(url).then(res => res.json())
  }

  post(url, body) {
    return fetch(url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
      })
      .catch((res) => {
        console.log('in the catch')
        debugger
      })
      .then(res => res.json())
  }
}

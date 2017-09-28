class Animal {
  constructor(data){
    this.name = data.name
    this.id = data.id
    this.gender = data.gender
    this.species = data.species_name
  }

  render() {
    return `
    <tr>
      <td>${this.name}</td>
      <td>${this.gender}</td>
      <td>${this.species}</td>
    </tr>
    `
  }
}

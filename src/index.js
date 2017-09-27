$(function() {
  const $tBody = $('tbody')
  const $form = $('form.ui.form')


  $form.on('submit', function(ev){
    ev.preventDefault()

    const name = $('#animal-name').val()
    const gender = $('#animal-gender').children('.active').data().value
    const species = $('#animal-species').val()

    const data = {name, gender, species}


    fetch(`http://localhost:3000/animals/`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          console.log('res', res);
          const animal = new Animal(res)
          $tBody.append(animal.render())
        })
        .catch((res) => {
          
        })

  })

  fetch(`http://localhost:3000/animals/`)
    .then( res => res.json() )
    .then( res => {
      console.log(res);
      res.forEach((animalData) => {
        const animal = new Animal(animalData)
        $tBody.append(animal.render())
      })
    })
})

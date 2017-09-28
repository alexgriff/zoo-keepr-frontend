$(function() {
  const $tBody = $('tbody')
  const $form = $('form.ui.form')
  const api = new Api()


  $form.on('submit', function(ev){
    ev.preventDefault()

    const $nameInput = $('#animal-name')
    const name = $nameInput.val()
    $nameInput.val('')

    const $genderInput = $('#animal-gender')
    const gender = $genderInput.children('.active').data().value
    $('.ui.form .ui.dropdown').dropdown('restore defaults');

    const $speciesInput = $('#animal-species')
    const species = $speciesInput.val()
    $speciesInput.val('')

    const data = {name, gender, species}


      api.createAnimal(data)
        .then(res => {
          console.log('res', res)
          console.log('in the then')
          debugger
          const animal = new Animal(res)
          $tBody.append(animal.render())
        })
        .catch((res) => {
          console.log('in the catch')
          debugger
        })

  })

  api.fetchAnimals()
    .then( res => {
      console.log(res);
      res.forEach((animalData) => {
        const animal = new Animal(animalData)
        $tBody.append(animal.render())
      })
    })
})

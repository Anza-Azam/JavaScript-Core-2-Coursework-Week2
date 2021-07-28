/** @format */

//////Blue Button
const blueBtn = document.getElementById('blueBtn')
const orangeBtn = document.getElementById('orangeBtn')
const greenBtn = document.getElementById('greenBtn')

const jumbotron = document.querySelector('.jumbotron')
blueBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#588fbd'
  const donateBikeBtn = document.querySelector('.btn.btn-primary.btn-lrg')
  donateBikeBtn.style.backgroundColor = '#ffa500'
  console.log(donateBikeBtn.style.backgroundColor)
  const volunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg')
  volunteerBtn.style.backgroundColor = '#000000'
  volunteerBtn.style.color = '#ffffff'
})

orangeBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#f0ad4e'
  const donateBikeBtn = document.querySelector('.btn.btn-primary.btn-lrg')
  donateBikeBtn.style.backgroundColor = '#5751fd'
  console.log(donateBikeBtn.style.backgroundColor)
  const volunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg')
  volunteerBtn.style.backgroundColor = '#31b0d5'
  volunteerBtn.style.color = '#ffffff'
})


greenBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#87ca8a'
  const donateBikeBtn = document.querySelector('.btn.btn-primary.btn-lrg')
  donateBikeBtn.style.backgroundColor = 'black'
  console.log(donateBikeBtn.style.backgroundColor)
  const volunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg')
  volunteerBtn.style.backgroundColor = `#8c9c08`

  volunteerBtn.style.color = '#ffffff'
})

//////form functionality

const submit = document.querySelector('button:last-child')

submit.addEventListener('click', validation)
 



function validation(event)
{event.preventDefault()
  const formFields = document.querySelectorAll('form .form-control')
 
  let valid = []
  const array = Array.from(formFields)
  array.forEach((Element, index) => {
    if (Element.value.length <= 0) {
      Element.style.backgroundColor = 'red'
    } else if (Element.value.length > 0 && Element.type !== 'email') {
      valid.push(true)
    } else if (
      Element.value.length > 0 &&
      Element.type === 'email' &&
      Element.value.includes('@')
    ) {
      valid.push(true)
    }

    if (
      index === array.length - 1 &&
      valid.length === array.length &&
      valid.every(element => element === true)
    ) {
      alert('Thank you for submitting the form')
      array.forEach(Element => {
        Element.value = ''
        valid.pop()
        Element.removeAttribute('style')

        
      })
    }
  })
}

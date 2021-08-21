/** @format */

/////First Part

const blueBtn = document.getElementById('blueBtn')
const orangeBtn = document.getElementById('orangeBtn')
const greenBtn = document.getElementById('greenBtn')
const donateBikeBtn = document.querySelector('.btn.btn-primary.btn-lrg')
const volunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg')
const jumbotron = document.querySelector('.jumbotron')

//////Blue Button

blueBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#588fbd'
  donateBikeBtn.style.backgroundColor = '#ffa500'
  volunteerBtn.style.backgroundColor = '#000000'
  volunteerBtn.style.color = '#ffffff'
})
//orange button
orangeBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#f0ad4e'
  donateBikeBtn.style.backgroundColor = '#5751fd'
  volunteerBtn.style.backgroundColor = '#31b0d5'
  volunteerBtn.style.color = '#ffffff'
})
//green button
greenBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#87ca8a'
  donateBikeBtn.style.backgroundColor = 'black'
  volunteerBtn.style.backgroundColor = `#8c9c08`
  volunteerBtn.style.color = '#ffffff'
})

//////form functionality       second part

const submit = document.querySelector('button:last-child')

submit.addEventListener('click', validation)

function validation (event) {
  event.preventDefault()
  const formFields = document.querySelectorAll('form .form-control')

  let valid = []
  const array = Array.from(formFields)
  array.forEach((Element, index) => {
    if (Element.value.length <= 0) {
      Element.style.backgroundColor = 'red'
    } else if (Element.value.length > 0 && Element.type !== 'email') {
      Element.removeAttribute('style')

      valid.push(true)
    } else if (
      Element.value.length > 0 &&
      Element.type === 'email' &&
      Element.value.includes('@')
    ) {Element.removeAttribute('style')

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

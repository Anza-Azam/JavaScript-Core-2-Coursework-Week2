function listOfColours (colours) {
  // Write your code here...

  var content = document.querySelector('#content')

  const colors = document.createElement('select')
  content.appendChild(colors)
  const colorN = document.createElement('p')
  content.appendChild(colorN)

  colours.forEach(colorName => {
    let opt = document.createElement('option')
    colors.appendChild(opt)
    opt.innerText = colorName
    colors.addEventListener('click', e => {
      console.log(e)
      colorN.innerText = `You have selected: ${e.target.value}`
      colorN.style.color = e.target.value
    })
  })
}

const colours = ['red', 'blue', 'green', 'yellow', 'pink', 'brown']

listOfColours(colours)

// * Create a `<select>` element.
// * Create a `<p>` element.
// * Iterate through the array of colours.
// * Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
// * Each `<option>` should have a 'click' event listener to update the contents and colour of the `<p>` with the selected colour.
// * All of your HTML should go inside the `<div>` with the id **"content"**.

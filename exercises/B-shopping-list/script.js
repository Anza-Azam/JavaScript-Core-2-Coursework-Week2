function shoppingList (arrayOfItems) {
  //creating Ul
  const listOfItems = document.querySelector('#content')
  const list = document.createElement('ul')
  listOfItems.appendChild(list)

  //adding li in Ul

  arrayOfItems.forEach(item => {
    const listItem = document.createElement('li')
    listItem.innerHTML = item
    list.appendChild(listItem)
  })

  // Write your code here...
}

let shopping = ['Milk', 'Bread', 'Eggs', 'A Dinosaur', 'Cake', 'Sugar', 'Tea']

shoppingList(shopping)

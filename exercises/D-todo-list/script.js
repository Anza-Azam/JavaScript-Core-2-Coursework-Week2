function todoList (todos) {
  // Write your code here...

  const content = document.querySelector('#content')

  const todoList = document.createElement('ul')
  content.appendChild(todoList)

  todos.forEach(task => {
    const items = document.createElement('li')
    items.innerHTML = task.todo

    todoList.appendChild(items)

    items.addEventListener('click', () => {
      if (items.style.textDecoration === 'line-through')
        items.style.textDecoration = 'none'
      else items.style.textDecoration = 'line-through'
    })
  })
}

const todos = [
  { todo: 'wash the dishes' },
  { todo: 'walk the dog' },
  { todo: 'learn javascript' },
  { todo: 'go shopping' }
]

todoList(todos)

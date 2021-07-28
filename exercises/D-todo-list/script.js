function todoList (todos) {
  // Write your code here...

  const content = document.querySelector('#content')

  const todoList = document.createElement('ul')
  content.appendChild(todoList)

  todos.forEach(task => {
    const items = document.createElement('li')
    items.innerText = task.todo

    todoList.appendChild(items)

    items.addEventListener('click', isDone)
  })
}

function isDone (ev) {
  ev.target.classList.toggle('line-through')
}
const todos = [
  { todo: 'wash the dishes' },
  { todo: 'walk the dog' },
  { todo: 'learn javascript' },
  { todo: 'go shopping' }
]

todoList(todos)

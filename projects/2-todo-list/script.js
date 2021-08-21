/** @format */
let list = document.getElementById('todo-list')

function populateTodoList (todos) {
  todos.forEach(element => {
    let li = document.createElement('li')
    li.className =
      'list-group-item d-flex justify-content-between align-items-center'
    list.appendChild(li)

    let span1 = document.createElement('span')
    span1.className = 'badge bg-primary rounded-pill'

    li.innerText = element.task
    let i1 = document.createElement('i')
    let i2 = document.createElement('i')

    i1.className = 'fa fa-check'
    i2.className = 'fa fa-trash'
    li.appendChild(span1)
    span1.append(i1, i2)

    i1.addEventListener('click', () => {
      li.classList.toggle('line-through')
    })
    i2.addEventListener('click', () => {
      console.log(element)

      list.removeChild(li)
    })
  })

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false }
]

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

const submit = document.querySelector('.btn.btn-primary.mb-3')
const deleteB = document.createElement('button')
deleteB.className = 'button'
const creates = document.querySelector('.col-auto')
creates.appendChild(deleteB)
deleteB.innerText = 'Delete Tasks'

function addNewTodo (event) {
  let newTask = []

  event.preventDefault()
  let inputBox = document.querySelector('#todoInput')
  let title = inputBox.value
  newTask.push({ task: title, completed: false })
  populateTodoList(newTask)

  inputBox.value = ''
}

// The code below prevents the page from refreshing when we click the 'Add Todo' button.

// Write your code here... and remember to reset the input field to be blank after creating a todo!

populateTodoList(todos)

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

deleteB.addEventListener('click', deleteAllCompletedTodos)

function deleteAllCompletedTodos (event) {
  event.preventDefault()
  // Write your code here...

  let alltodos = document.querySelectorAll(
    '.list-group-item.d-flex.justify-content-between.align-items-center'
  )

  let todoList = Array.from(alltodos)

  todoList.forEach(element => {
    console.log(element)
    if (element.classList.contains('line-through')) {
      element.parentElement.removeChild(element)
    }
  })
}

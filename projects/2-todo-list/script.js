
function populateTodoList(todos) {

  let list = document.getElementById("todo-list");
  
  todos.forEach(element=> {

  let li = document.createElement('li')
  li.className= 'list-group-item d-flex justify-content-between align-items-center'
  list.appendChild(li);
  
  let span1 = document.createElement('span')
  span1.className='badge bg-primary rounded-pill'

  li.innerText = element.task
  let i1 = document.createElement('i')
  let i2=document.createElement('i')

 i1.className= 'fa fa-check'
 i2.className='fa fa-trash'
  li.appendChild(span1)
  span1.append(i1,i2)
 
i1.addEventListener('click', () => {
console.log(element)
     if(li.style.textDecoration === 'line-through') 
       li.removeAttribute('style')
      else li.style.textDecoration ='line-through'
    })
   i2.addEventListener('click', () => {
  console.log(element)
    // if (li.style.textDecoration === 'line-through')
       list.removeChild(li)
//  else li.style.textDecoration = 'line-through'
})

    
   })

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
//console.log(todos)
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
 // let event = document.getElementById('todoInput')
 // const submit = document.querySelector('.btn.btn-primary.mb-3')
 // submit.addEventListener('click', () => {
   // e.preventDefault()
    console.log(this.value)

  todos.push( {task: event.innerText, completed: false })
 //console.log(todos)
  //})

}
addNewTodo(document.getElementById('todoInput'));


  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
 
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

 
  
  




// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}

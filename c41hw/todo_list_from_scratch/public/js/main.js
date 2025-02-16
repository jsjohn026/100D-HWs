const deleteBtn = document.querySelectorAll('.fa-trash')
const todo = document.querySelectorAll('.todo span')
const todoCompleted = document.querySelectorAll('.todo span.completed')

Array.from(deleteBtn).forEach((element) => {
  element.addEventListener('click', deleteItem)
});

Array.from(todo).forEach(element => {
  element.addEventListener('click', markComplete)
});

Array.from(todoCompleted).forEach(element => {
  element.addEventListener('click', markUnComplete)
});

async function deleteItem(){
  
}

async function markComplete(){
  const todoText = this.parentNode.childNodes[1].innerText
  console.log(todoText)
  try {
    const response = await fetch('markComplete', {
      method: "put", 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        'todoFromJS': todoText
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch(err) {
    console.log("Unable to mark this item complete:", err)
  }
}

async function markUnComplete() {
  const todoText = this.parentNode.childNodes[1].innerText
  try {
    const response = await fetch('markUnComplete', {
      method: 'put', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'todofromJS': todoText
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log("Unable to mark uncompleted:", err)
  }
}
const addTask = document.getElementById('add-task-button')
const input = document.getElementById('form-control')
const listGroup = document.getElementById('listGroup')
let tasks = []//добавити видалити змінити вже тут обновляється
//нам прийшов рядок у форматі JSON,отримали по ключу 'tasks',тепер парсим в масив і відображаємо дані,які записали - Application
if(localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
}
tasks.forEach(function(task){
    const newItem = document.createElement('li')
    newItem.classList.add(
      'list-group-item',
       'd-flex',
       'justify-content-between',
       'align-items-center',
    )
      newItem.setAttribute('id', task.id)
      newItem.insertAdjacentHTML("beforeend",
    `
      <span class="textTask">${task.text}</span>
      <div class="wrapper__done--close">
          <button class="btn__done" data-action="done">✓</button>
          <button class="btn__close" data-action="delete">Х</button>
      </div>
    `)
    listGroup.insertAdjacentElement('beforeend',newItem)
})
addTask.addEventListener('click', renderTask)
function renderTask() {
   const valueInput = input.value.trim()
   if (!valueInput) {
      return
   }
  
   const newTask = {
      id: Date.now(),
      text: valueInput,
      done: false
   }
   tasks.push(newTask)
   saveLocalStorage() 
   console.log(tasks)



  const newItem = document.createElement('li')
  newItem.classList.add(
    'list-group-item',
     'd-flex',
     'justify-content-between',
     'align-items-center',
     `id='${newTask.id}'`
  )
    newItem.setAttribute('id', newTask.id)
    newItem.insertAdjacentHTML("beforeend",
  `
    <span class="textTask">${newTask.text}</span>
    <div class="wrapper__done--close">
        <button class="btn__done" data-action="done">✓</button>
        <button class="btn__close" data-action="delete">Х</button>
    </div>
  `)
  listGroup.insertAdjacentElement('beforeend',newItem)
 
   input.value = ''
}
listGroup.addEventListener('click', doneTask)
function doneTask(e) {
   if (e.target.dataset.action === 'done') {
      const parentNode = e.target.closest('.list-group-item')
      const taskValue = parentNode.querySelector('.textTask')
      if (!taskValue.classList.contains('textTask--done')) {
         taskValue.classList.add('textTask--done')
      } else {
         taskValue.classList.remove('textTask--done')
      }
   }
   const parentNode = e.target.closest('.list-group-item')
   const id = Number(parentNode.id)
   //    шукаєм задачу з відповідним id
   const status = tasks.find(function (task) {
      return task.id === id
   })
   if (status) {
      status.done = !status.done
      saveLocalStorage()
      console.log(status)
   } else {
      console.log('не знайдено')
   }
}
listGroup.addEventListener('click', deleteTask)
function deleteTask(e) {
   if (e.target.dataset.action === 'delete') {
      const parentNode = e.target.closest('.list-group-item')
      parentNode.remove()
      
      const id = Number(parentNode.id)

      const index = tasks.findIndex(function (task) {
         return task.id === id
      })
      tasks.splice(index, 1)
      saveLocalStorage()
   }
}
function saveLocalStorage() {
   localStorage.setItem('tasks', JSON.stringify(tasks)) //записали в Application
}

const addTask = document.getElementById('add-task-button')
const input = document.getElementById('form-control')
const listGroup = document.getElementById('listGroup')

addTask.addEventListener('click', renderTask)

function renderTask() {
   const valueInput = input.value.trim()
 
   if(!valueInput) {
        return
   }
  const newItem = document.createElement('li')
  newItem.classList.add(
    'list-group-item',
     'd-flex',
     'justify-content-between',
     'align-items-center'
  )
  newItem.insertAdjacentHTML("beforeend",
  `
    <span class="textTask">${valueInput}</span>
    <div class="wrapper__done--close">
        <button class="btn__done" data-action="done">✓</button>
        <button class="btn__close" data-action="close">Х</button>
    </div>
  `)
  listGroup.insertAdjacentElement('beforeend',newItem)

   input.value = ''
}


export default function addingNewTaskElement(){

    const newTask = document.createElement('div')
    newTask.setAttribute('id', 'newTask')
    
    const openModalBtn = document.createElement('button')
    openModalBtn.setAttribute('id', 'openAddTaskModal')
    openModalBtn.textContent = "Add New Task"

    const divModal = document.createElement('div')
    divModal.setAttribute('id', 'divModal')
    divModal.classList.add('modal')

    const closeModal = document.createElement('span')
    closeModal.classList.add('close')
    closeModal.textContent = "\u274C"

    const labelTitle = document.createElement('label')
    labelTitle.textContent = "Title: "

    const titleTodoInput = document.createElement('input')
    titleTodoInput.setAttribute('type', 'text')
    titleTodoInput.setAttribute('id', 'addTitle')

    const labelDesc = document.createElement('label')
    labelDesc.textContent = 'Description: '

    const descTodoInput = document.createElement('input')
    descTodoInput.setAttribute('type', 'text')
    descTodoInput.setAttribute('id', 'addDesc')

    const labelDueDate = document.createElement('label')
    labelDueDate.textContent = 'Due Date: '

    const dueDateTodoInput = document.createElement('input')
    dueDateTodoInput.setAttribute('type', 'date')
    dueDateTodoInput.setAttribute('id', 'addDueDate')
    dueDateTodoInput.setAttribute('value', (new Date()).toJSON().slice(0, 10))

    const labelPriority = document.createElement('label')
    labelPriority.textContent = "Priority: "

    const priorityTodoInput = document.createElement('input')
    priorityTodoInput.setAttribute('id', 'addPriority')
    priorityTodoInput.setAttribute('type', 'range')
    priorityTodoInput.setAttribute('min', '0')
    priorityTodoInput.setAttribute('max', '2')
    priorityTodoInput.setAttribute('value', '1')

    const btnAddTask = document.createElement('button')
    btnAddTask.setAttribute('id', 'addTask')
    btnAddTask.textContent = "Add Task"

    openModalBtn.onclick = function(){
        divModal.style.display = "block"
    }

    closeModal.onclick = function(){
        divModal.style.display = "none"
    }

    window.onclick = function(event) {
        if (event.target == divModal) {
          divModal.style.display = "none";
        }
      }


    divModal.appendChild(closeModal)
    divModal.appendChild(labelTitle)
    divModal.appendChild(titleTodoInput)
    divModal.appendChild(document.createElement('br'))
    divModal.appendChild(labelDesc)
    divModal.appendChild(descTodoInput)
    divModal.appendChild(document.createElement('br'))
    divModal.appendChild(labelDueDate)
    divModal.appendChild(dueDateTodoInput)
    divModal.appendChild(document.createElement('br'))
    divModal.appendChild(labelPriority)
    divModal.appendChild(priorityTodoInput)
    divModal.appendChild(document.createElement('br'))
    divModal.appendChild(btnAddTask)

    newTask.appendChild(openModalBtn)
    newTask.appendChild(divModal)


    return newTask
    
} 
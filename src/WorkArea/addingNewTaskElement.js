export default function addingNewTaskElement(){
    const newTask = document.createElement('div')
    newTask.setAttribute('id', 'newTask')

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
    btnAddTask.textContent = "Add new Task"

    newTask.appendChild(labelTitle)
    newTask.appendChild(titleTodoInput)
    newTask.appendChild(labelDesc)
    newTask.appendChild(descTodoInput)
    newTask.appendChild(labelDueDate)
    newTask.appendChild(dueDateTodoInput)
    newTask.appendChild(labelPriority)
    newTask.appendChild(priorityTodoInput)
    newTask.appendChild(btnAddTask)

    return newTask
    
} 
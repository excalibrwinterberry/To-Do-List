export default function initialLoad () {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')

    const header = document.createElement('header')
    header.classList.add('title')

    const title = document.createElement('p')
    title.textContent = "To-Do-List"

    header.appendChild(title)

    const workArea = document.createElement('div')
    workArea.setAttribute('id','workArea')

    const newTask = document.createElement('div')
    newTask.setAttribute('id', 'newTask')
    
    const btnAddTask = document.createElement('button')
    btnAddTask.setAttribute('id', 'addTask')
    btnAddTask.textContent = "Add new Task"

    const display = document.createElement('div')
    display.setAttribute('id', 'display')

    const descTodo = document.createElement('p')
    descTodo.textContent = "Tasks To-Dos are: "
    display.appendChild(descTodo)

    newTask.appendChild(btnAddTask)

    workArea.appendChild(newTask)
    workArea.appendChild(display)

    content.appendChild(header)
    content.appendChild(workArea)

    return content

}
export default function displayTodos (arrTodos) {
    const todoList = document.createElement('ul')
    arrTodos.forEach(todo => {
        const listItem = document.createElement('li')
        listItem.textContent = todo.getTitle()
        todoList.appendChild(listItem)
    })

    return todoList
}
import todoCard from "./todoCard"

export default function displayTodos (arrTodos) {
    const todoList = document.createElement('div')
    todoList.setAttribute('id','todoList')

    arrTodos.forEach(todo => {
        todoList.appendChild(todoCard(todo))
    });

    return todoList
}
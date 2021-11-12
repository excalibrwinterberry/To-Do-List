import addingNewTaskElement from "./addingNewTaskElement"
import displayTodosElement from "./displayTodosElement"

export default function workAreaElement(){
    const workArea = document.createElement('div')
    workArea.setAttribute('id','workArea')

    workArea.appendChild(addingNewTaskElement())
    workArea.appendChild(displayTodosElement())

    return workArea

}
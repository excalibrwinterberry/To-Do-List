import header from "./Header/headerElement"
// import addingNewTaskElement from "./WorkArea/addingNewTaskElement"
// import displayTodosElement from "./WorkArea/displayTodosElement"
import workAreaElement from "./WorkArea/workAreaElement"

export default function initialLoad () {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')

    content.appendChild(header())
    content.appendChild(workAreaElement())

    return content

}
import workAreaElement from "./WorkArea/workAreaElement"
import sidebarElement from "./Sidebar/sidebarElement"

export default function initialLoad () {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    content.appendChild(sidebarElement())
    content.appendChild(workAreaElement())

    return content

}
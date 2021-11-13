import header from "./Header/headerElement"
import workAreaElement from "./WorkArea/workAreaElement"

export default function initialLoad () {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    content.appendChild(header())
    content.appendChild(workAreaElement())

    return content

}
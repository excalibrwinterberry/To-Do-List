export default function sidebarElement(projectsList) {
    const sideBar = document.createElement('div')
    sideBar.setAttribute('id','sidebar')

    const divDefault = document.createElement('div')
    divDefault.setAttribute('id', 'divDefault')

    const defaultHeader = document.createElement('h2')
    defaultHeader.classList.add('sidebar-header')
    defaultHeader.setAttribute('id', 'defaultHeader')
    defaultHeader.textContent = 'Default'

    const defaultProjectsList = document.createElement('div')
    defaultProjectsList.classList.add('project-list')
    defaultProjectsList.setAttribute('id', 'defaultProjectsList')

    projectsList.forEach((project, index) =>{
        const item = document.createElement('button')
        item.textContent = project.getName()
        item.classList.add('project')
        item.setAttribute('id', `project${project.getListId()}`)
        defaultProjectsList.appendChild(item)
    })
    

    divDefault.appendChild(defaultHeader)
    divDefault.appendChild(defaultProjectsList)


    const divProject = document.createElement('div')
    divProject.setAttribute('id', 'divProject')

    const projectHeader = document.createElement('h2')
    projectHeader.classList.add('sidebar-header')
    projectHeader.setAttribute('id', 'projectHeader')
    projectHeader.textContent = 'Project'

    const openAddProject = document.createElement('button')
    openAddProject.setAttribute('id', 'openAddProject')
    openAddProject.textContent = 'Add New Project'

    const userProjectsList = document.createElement('div')
    userProjectsList.classList.add('project-list')
    userProjectsList.setAttribute('id', 'userProjectsList')

    divProject.appendChild(projectHeader)
    divProject.appendChild(openAddProject)
    divProject.appendChild(userProjectsList)

    sideBar.appendChild(divDefault)
    sideBar.appendChild(divProject)


    return sideBar
}
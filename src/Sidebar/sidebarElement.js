export default function sidebarElement(projectList) {
    const sideBar = document.createElement('div')
    sideBar.classList.add('sidebar')

    projectList.forEach(todoList => {
        const item = document.createElement('button')
        item.textContent = todoList.getName()
        sideBar.appendChild(item)
    });

    const addNameSection = document.createElement('button')
    addNameSection.textContent = 'Add'

    const addProject = document.createElement('div')
    addProject.setAttribute('id', 'addProject')
    
    const projectName = document.createElement('input')
    projectName.setAttribute('type' , 'text')
    projectName.setAttribute('id', 'inputProjectName')
    projectName.setAttribute('placeholder', 'Name')

    const closeNameSection = document.createElement('button')
    closeNameSection.textContent = 'Close'

    addNameSection.onclick = function (){
        sideBar.appendChild(addProject)
        console.log('hello')
    }
    closeNameSection.onclick = function(){
        document.getElementById('addProject').remove()
    }

    addProject.appendChild(projectName)
    addProject.appendChild(closeNameSection)

    sideBar.appendChild(addNameSection)
    // sideBar.appendChild(addProject)






    return sideBar
}
export default function addProjectElement(){
    const addProjectDiv = document.createElement('div')
    addProjectDiv.setAttribute('id', 'addProjectDiv')

    const projectNameInput = document.createElement('input')
    projectNameInput.setAttribute('type', 'text')
    projectNameInput.setAttribute('id', 'projectNameInput')

    const addProject = document.createElement('button')
    addProject.setAttribute('id', 'addProject')
    addProject.textContent = 'Add'

    const closeAddProject = document.createElement('button')
    closeAddProject.setAttribute('id', 'closeAddProject')
    closeAddProject.textContent = 'Close'



    addProjectDiv.appendChild(projectNameInput)
    addProjectDiv.appendChild(addProject)
    addProjectDiv.appendChild(closeAddProject)

    return addProjectDiv

}
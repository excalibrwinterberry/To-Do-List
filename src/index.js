import initialLoad from "./initialLoad"
import displayTodos from "./displayTodos"
import todoCard from "./todoCard"
import './style.css'
import addProjectElement from "./Sidebar/addProjectElement"
import header from "./Header/headerElement"

//Object of individual todos
const ToDos = ()=>{
    let title="No title"
    let description=""
    let dueDate= (new Date()).toJSON().slice(0, 10)
    let priority=0
    let id = 0
    let status = false

    const setTitle = newTitle => title = newTitle
    const setDescription = newDescription => description = newDescription
    const setDueDate = newDueDate => dueDate = newDueDate
    const setPriority = newPriorty => priority = newPriorty
    const setId = newId => id = newId
    const setStatus = newStatus => status = newStatus

    const getTitle = () => title
    const getDescription = () => description
    const getDueDate = () => dueDate
    const getPriority = () => priority
    const getId = () => id
    const getStatus = () => status

    return {setTitle, setDescription, setDueDate, setPriority, setId,getTitle, setStatus, getDescription, getDueDate, getPriority, getId, getStatus}

}

//Collection of Todos
const collectionTodos = (name, listId) =>{
    let arrTodos = []
    const addToDos = newTodo => arrTodos.push(newTodo)

    const getName =() => name

    const getListId = ()  => listId

    const deleteTodos = (id) => {

        for(let i=0; i<arrTodos.length; i++){
            if(arrTodos[i].getId() === id){
                arrTodos.splice(i,1)
            }
        }

    } 

    const changeStatus = (id) =>{
        arrTodos.forEach((todo) =>{
            if(todo.getId() === id){
                todo.setStatus(!(todo.getStatus()))
            }
        })

    }

    const getLength = () =>  arrTodos.length

    return{arrTodos, addToDos, deleteTodos, getLength, changeStatus, getName, getListId}
}

const todoList = collectionTodos('Today', 1)
const todoList1 = collectionTodos('Tomorrow', 2)

const doHw = ToDos()
doHw.setTitle('do Homework')
doHw.setDescription('college homework')
doHw.setPriority(0)
doHw.setId(1)

const excercise = ToDos()
excercise.setTitle('excercise')
excercise.setDescription('do excercise in evening')
excercise.setPriority(2)
excercise.setId(2)

const cp = ToDos()
cp.setTitle('Competitve Programming')
cp.setDescription('open leetcode and codechef')
cp.setId(1)

todoList.addToDos(doHw)
todoList.addToDos(excercise)

todoList1.addToDos(cp)


let allProjectsList = []

allProjectsList.push(todoList)
allProjectsList.push(todoList1)



function clearElementContent(elementID) {
    const div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

let selectedProjectId = allProjectsList[0].getListId()

const handleAddNewTask = (e) =>{
    const title = document.querySelector('#addTitle').value
    const desc = document.querySelector('#addDesc').value
    const dueDate = document.querySelector('#addDueDate').value
    const priority = document.querySelector('#addPriority').value
    

    const newTodo = ToDos()
    newTodo.setTitle(title)
    newTodo.setDescription(desc)
    newTodo.setDueDate(dueDate)
    newTodo.setPriority(priority)
    
    
    allProjectsList.forEach(project=>{
        if(project.getListId() === selectedProjectId){
            newTodo.setId(project.getLength()+1)
            project.addToDos(newTodo)
        }
    })

    const todoAddElement =todoCard(newTodo)
    
    todoAddElement.querySelector('.removeTodo').addEventListener('click', handleDeleteTask)
    todoAddElement.querySelector('.doneTask').addEventListener('click', hadnleStatusChange)
    document.getElementById('todoList').appendChild(todoAddElement)

    document.querySelector('#addTitle').value = ''
    document.querySelector('#addDesc').value = ''
    document.querySelector('#addDueDate').value = (new Date()).toJSON().slice(0, 10)
    document.querySelector('#addPriority').value = 1    
    document.querySelector("#divModal").style.display = 'none'
}

const handleDeleteTask = (e) =>{
    const taskId = parseInt(e.target.dataset.id)

    allProjectsList.forEach(project =>{
        if(project.getListId() === selectedProjectId){
            project.deleteTodos(taskId)

        }
    })
    document.getElementById(`${taskId}`).remove()
}

const hadnleStatusChange = (e) =>{

    const taskId = parseInt(e.target.dataset.id)
    allProjectsList.forEach(project =>{
        if(project.getListId() === selectedProjectId){
            project.changeStatus(taskId)
        }
    })

    document.getElementById(`${taskId}`).classList.toggle('done')

}

const handleProjectBtn = (e)=>{
    selectedProjectId =  parseInt(e.target.id.slice(7))
    clearElementContent('display')
    const projectToShow = allProjectsList.find(project => project.getListId() === selectedProjectId)
    document.getElementById('display').appendChild(displayTodos(projectToShow.arrTodos))

    displayLoader.addRemoveEventListeners()
}


const handleProjectRemoveBtn = (e) =>{
    const projectId = parseInt(e.target.id.slice(13))

    document.getElementById(`projectListItem${projectId}`).remove()

    for(let i=0; i<allProjectsList.length; i++){
        if(allProjectsList[i].getListId() === projectId){
            allProjectsList.splice(i,1)
        }
    }

}

const handleOpenAddProject = (e)=>{
    //add 'addProjectELement' to #divProject
    document.getElementById('divProject').appendChild(addProjectElement())
    e.target.disabled = true

    //the closeaddproject is not present in the dom as we add it after clicking the button
    document.getElementById('closeAddProject').addEventListener('click', (event)=>{
        document.getElementById('addProjectDiv').remove()
        e.target.disabled = false
    })

    document.getElementById('addProject').addEventListener('click', (event)=>{
        e.target.disabled = false
        const name = document.getElementById('projectNameInput').value === "" ? "Project" : document.getElementById('projectNameInput').value
        const newTodoList = collectionTodos(name, allProjectsList.length+1)
        allProjectsList.push(newTodoList)

        document.getElementById('addProjectDiv').remove()

        const projectListItem = document.createElement('div')
        projectListItem.classList.add('projectListItem')
        projectListItem.setAttribute('id', `projectListItem${allProjectsList.length}`)

        const newProjectBtn = document.createElement('button')
        newProjectBtn.textContent = newTodoList.getName()
        newProjectBtn.classList.add('project')
        newProjectBtn.setAttribute('id', `project${allProjectsList.length}`)
        newProjectBtn.addEventListener('click',handleProjectBtn)

        const removeProject = document.createElement('button')
        removeProject.textContent = 'X'
        removeProject.classList.add('remove-project')
        removeProject.setAttribute('id', `removeProject${allProjectsList.length}`)
        removeProject.addEventListener('click', handleProjectRemoveBtn)

        projectListItem.appendChild(newProjectBtn)
        projectListItem.appendChild(removeProject)
        document.getElementById('userProjectsList').appendChild(projectListItem)
    })

}


const displayLoader = (()=>{

    const pageLoad = ()=>{
        document.querySelector('#main').appendChild(header())
        document.querySelector('#main').appendChild(initialLoad())
    }

    const todoDisplay = ()=>{
        document.querySelector('#display').appendChild(displayTodos(allProjectsList[0].arrTodos))
    } 
    
    const addDefaultProjects = () =>{
        allProjectsList.forEach(project =>{
            const projectListItem = document.createElement('div')
            projectListItem.classList.add('projectListItem')
    
            const item = document.createElement('button')
            item.textContent = project.getName()
            item.classList.add('project')
            item.setAttribute('id', `project${project.getListId()}`)

            projectListItem.appendChild(item)
            document.getElementById('defaultProjectsList').appendChild(projectListItem)
        })
    }

    const addRemoveEventListeners = () =>{
        const removeBtns = [...document.querySelectorAll('.removeTodo')]

        removeBtns.forEach((removeBtn)=>{
            removeBtn.addEventListener('click', handleDeleteTask)
        })
    }

    const addTaskEventListener = () =>{
        document.querySelector('#addTask').addEventListener('click',handleAddNewTask)
    }

    const addDoneTaskEventListener = () =>{
        const doneTaskBtns = [...document.querySelectorAll('.doneTask')]

        doneTaskBtns.forEach((doneTaskBtn) =>{
            doneTaskBtn.addEventListener('click', hadnleStatusChange)
        })
    }

    const addOpenAddProjectEventListener = () =>{
        document.getElementById('openAddProject').addEventListener('click', handleOpenAddProject)

        const projectBtns = [...document.getElementsByClassName('project')]
        projectBtns.forEach(projectBtn =>{
            projectBtn.addEventListener('click', handleProjectBtn)
        })
    }



    return {pageLoad, todoDisplay,addTaskEventListener ,addRemoveEventListeners, addDefaultProjects, addDoneTaskEventListener, addOpenAddProjectEventListener}

})()

displayLoader.pageLoad()
displayLoader.todoDisplay()
displayLoader.addTaskEventListener()
displayLoader.addRemoveEventListeners()
displayLoader.addDefaultProjects()
displayLoader.addDoneTaskEventListener()
displayLoader.addOpenAddProjectEventListener()





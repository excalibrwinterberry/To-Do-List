import initialLoad from "./initialLoad"
import displayTodos from "./displayTodos"
import todoCard from "./todoCard"
import './style.css'
import sidebarElement from "./Sidebar/sidebarElement"
import addProjectElement from "./Sidebar/addProjectElement"

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

const allProjectsList = []

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
    document.getElementById('todoList').appendChild(todoAddElement)

    document.querySelector('#addTitle').value = ''
    document.querySelector('#addDesc').value = ''
    document.querySelector('#addDueDate').value = (new Date()).toJSON().slice(0, 10)
    document.querySelector('#addPriority').value = 1    

    todoAddElement.querySelector('.removeTodo').addEventListener('click', handleDeleteTask)
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
    const id = parseInt(e.target.dataset.id)
    todoList.changeStatus(id)
    document.getElementById(`${id}`).classList.toggle('done')
}

const handleProjectBtn = (e)=>{
    selectedProjectId =  parseInt(e.target.id.slice(7))
    clearElementContent('display')
    const projectToShow = allProjectsList.find(project => project.getListId() === selectedProjectId)
    document.getElementById('display').appendChild(displayTodos(projectToShow.arrTodos))

    displayLoader.addRemoveEventListeners()
}

const handleOpenAddProject = (e)=>{
    //add 'addProjectELement' to #divProject
    document.getElementById('divProject').appendChild(addProjectElement())

    //the closeaddproject is not present in the dom as we add it after clicking the button
    document.getElementById('closeAddProject').addEventListener('click', (e)=>{
        document.getElementById('addProjectDiv').remove()
    })

    document.getElementById('addProject').addEventListener('click', (e)=>{
        const name = document.getElementById('projectNameInput').value === "" ? "Project" : document.getElementById('projectNameInput').value
        const newTodoList = collectionTodos(name, allProjectsList.length+1)
        allProjectsList.push(newTodoList)

        document.getElementById('addProjectDiv').remove()

        const newProjectBtn = document.createElement('button')
        newProjectBtn.textContent = newTodoList.getName()
        newProjectBtn.classList.add('project')
        newProjectBtn.setAttribute('id', `project${allProjectsList.length}`)
        document.getElementById('userProjectsList').appendChild(newProjectBtn)
        newProjectBtn.addEventListener('click',handleProjectBtn)
    })

}


const displayLoader = (()=>{

    const pageLoad = ()=>{
        document.querySelector('#main').appendChild(initialLoad())
        document.querySelector('#main').appendChild(sidebarElement(allProjectsList))
    }

    const todoDisplay = ()=>{
        document.querySelector('#display').appendChild(displayTodos(todoList.arrTodos))
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


    return {pageLoad, todoDisplay,addTaskEventListener ,addRemoveEventListeners}

})()

displayLoader.pageLoad()
displayLoader.todoDisplay()
displayLoader.addTaskEventListener()
displayLoader.addRemoveEventListeners()

const doneTaskBtns = [...document.querySelectorAll('.doneTask')]

doneTaskBtns.forEach((doneTaskBtn) =>{
    doneTaskBtn.addEventListener('click', hadnleStatusChange)
})


document.getElementById('openAddProject').addEventListener('click', handleOpenAddProject)

const projectBtns = [...document.getElementsByClassName('project')]
projectBtns.forEach(projectBtn =>{
    projectBtn.addEventListener('click', handleProjectBtn)
})










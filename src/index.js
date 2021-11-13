import initialLoad from "./initialLoad"
import displayTodos from "./displayTodos"
import todoCard from "./todoCard"
import './style.css'
import sidebarElement from "./Sidebar/sidebarElement"

//Object of individual todos
const ToDos = ()=>{
    let title="No title"
    let description=""
    let dueDate= new Date()
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
const collectionTodos = (name) =>{
    let arrTodos = []
    const addToDos = newTodo => arrTodos.push(newTodo)

    const getName =() => name

    const setName = (newName) => name = newName

    const deleteTodos = (id) => {

        let newArrTodos = arrTodos.filter((todo) =>{
            return todo.getId() !== id
        })

        arrTodos = newArrTodos
    } 

    const changeStatus = (id) =>{
        arrTodos.forEach((todo) =>{
            if(todo.getId() === id){
                todo.setStatus(!(todo.getStatus()))
            }
        })

    }

    const getLength = () =>  arrTodos.length

    return{arrTodos, addToDos, deleteTodos, getLength, changeStatus, getName}
}

const todoList = collectionTodos('Today')
const toodList1 = collectionTodos('Tomorrow')
const todoList2 = collectionTodos('Tasks')


const projectsList = []
projectsList.push(todoList)
projectsList.push(toodList1)
projectsList.push(todoList2)

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
    newTodo.setId(todoList.getLength()+1)

    todoList.addToDos(newTodo)
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
    const id = parseInt(e.target.dataset.id)
    todoList.deleteTodos(id)
    document.getElementById(`${id}`).remove()
}

const hadnleStatusChange = (e) =>{
    const id = parseInt(e.target.dataset.id)
    todoList.changeStatus(id)
    document.getElementById(`${id}`).classList.toggle('done')
}

const displayLoader = (()=>{

    const main = document.querySelector('#main')
    const pageLoad = ()=>{
        document.querySelector('#main').appendChild(sidebarElement(projectsList))
        document.querySelector('#main').appendChild(initialLoad())
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








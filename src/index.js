import initialLoad from "./initialLoad"
import displayTodos from "./displayTodos"
import './style.css'

//Object of individual todos
const ToDos = ()=>{
    let title="No title"
    let description=""
    let dueDate= new Date()
    let priority=0
    let id = 0

    const setTitle = newTitle => title = newTitle
    const setDescription = newDescription => description = newDescription
    const setDueDate = newDueDate => dueDate = newDueDate
    const setPriority = newPriorty => priority = newPriorty
    const setId = newId => id = newId

    const getTitle = () => title
    const getDescription = () => description
    const getDueDate = () => dueDate
    const getPriority = () => priority
    const getId = () => id

    return {setTitle, setDescription, setDueDate, setPriority, setId,getTitle, getDescription, getDueDate, getPriority, getId}

}

//Collection of Todos
const collectionTodos = () =>{
    let arrTodos = []
    const addToDos = newTodo => arrTodos.push(newTodo)

    const deleteTodos = (id) => {

        let newArrTodos = arrTodos.filter((todo) =>{
            return todo.getId() !== id
        })

        arrTodos = newArrTodos
    } 

    const getLength = () =>  arrTodos.length

    return{arrTodos, addToDos, deleteTodos, getLength}
}

const todoList = collectionTodos()

const todo1 = ToDos()
todo1.setTitle('The odin project')
todo1.setDescription('Complete section 1 of the odin projext')
todo1.setPriority(1)
todo1.setId(1)

const todo2 = ToDos()
todo2.setTitle('Competitve Coding')
todo2.setDescription('Go to leetcode and solve 2 questions')
todo2.setPriority(2)
todo2.setId(2)

todoList.addToDos(todo1)
todoList.addToDos(todo2)

const displayLoader = (()=>{

    const main = document.querySelector('#main')
    const pageLoad = ()=>{
        document.querySelector('#main').appendChild(initialLoad())
    }

    const todoDisplay = ()=>{
        document.querySelector('#display').appendChild(displayTodos(todoList.arrTodos))
    } 


    return {pageLoad, todoDisplay}

})()

displayLoader.pageLoad()
displayLoader.todoDisplay()




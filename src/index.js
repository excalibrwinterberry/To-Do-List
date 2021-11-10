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

    return{arrTodos, addToDos}
}

const todoList = collectionTodos()

const todo1 = ToDos()
todo1.setTitle('title1')
todo1.setDescription('desc1')
todo1.setPriority(1)
todo1.setId(1)

const todo2 = ToDos()
todo2.setTitle('title2')
todo2.setDescription('desc2')
todo2.setPriority(2)
todo2.setId(2)

todoList.addToDos(todo1)
todoList.addToDos(todo2)

console.log(todoList.arrTodos[0].getDueDate())
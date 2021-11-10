/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZOztBQUVaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vT2JqZWN0IG9mIGluZGl2aWR1YWwgdG9kb3NcbmNvbnN0IFRvRG9zID0gKCk9PntcbiAgICBsZXQgdGl0bGU9XCJObyB0aXRsZVwiXG4gICAgbGV0IGRlc2NyaXB0aW9uPVwiXCJcbiAgICBsZXQgZHVlRGF0ZT0gbmV3IERhdGUoKVxuICAgIGxldCBwcmlvcml0eT0wXG4gICAgbGV0IGlkID0gMFxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IG5ld0R1ZURhdGUgPT4gZHVlRGF0ZSA9IG5ld0R1ZURhdGVcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9ydHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcnR5XG4gICAgY29uc3Qgc2V0SWQgPSBuZXdJZCA9PiBpZCA9IG5ld0lkXG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eVxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWRcblxuICAgIHJldHVybiB7c2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSwgc2V0SWQsZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0SWR9XG5cbn1cblxuLy9Db2xsZWN0aW9uIG9mIFRvZG9zXG5cbmNvbnN0IGNvbGxlY3Rpb25Ub2RvcyA9ICgpID0+e1xuICAgIGxldCBhcnJUb2RvcyA9IFtdXG4gICAgY29uc3QgYWRkVG9Eb3MgPSBuZXdUb2RvID0+IGFyclRvZG9zLnB1c2gobmV3VG9kbylcblxuICAgIHJldHVybnthcnJUb2RvcywgYWRkVG9Eb3N9XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gY29sbGVjdGlvblRvZG9zKClcblxuY29uc3QgdG9kbzEgPSBUb0RvcygpXG50b2RvMS5zZXRUaXRsZSgndGl0bGUxJylcbnRvZG8xLnNldERlc2NyaXB0aW9uKCdkZXNjMScpXG50b2RvMS5zZXRQcmlvcml0eSgxKVxudG9kbzEuc2V0SWQoMSlcblxuY29uc3QgdG9kbzIgPSBUb0RvcygpXG50b2RvMi5zZXRUaXRsZSgndGl0bGUyJylcbnRvZG8yLnNldERlc2NyaXB0aW9uKCdkZXNjMicpXG50b2RvMi5zZXRQcmlvcml0eSgyKVxudG9kbzIuc2V0SWQoMilcblxudG9kb0xpc3QuYWRkVG9Eb3ModG9kbzEpXG50b2RvTGlzdC5hZGRUb0Rvcyh0b2RvMilcblxuY29uc29sZS5sb2codG9kb0xpc3QuYXJyVG9kb3NbMF0uZ2V0RHVlRGF0ZSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
const ToDos = ()=>{
    title="No title"
    description=""
    dueDate= new Date()
    priority=0

    const setTitle = newTitle => title = newTitle
    const setDescription = newDescription => description = newDescription
    const setDueDate = newDueDate => dueDate = newDueDate
    const setPriority = newPriorty => priority = newPriorty

    const getTitle = () => title
    const getDescription = () => description
    const getDueDate = () => dueDate
    const getPriority = () => priority

    return {setTitle, setDescription, setDueDate, setPriority, getTitle, getDescription, getDueDate, getPriority}

}

const saveToDo = (toDoItem, ...args) => {
    const toDoList = [];

    toDoList.push(toDoItem, ...args);

    return {toDoList}
}

export default saveToDo;
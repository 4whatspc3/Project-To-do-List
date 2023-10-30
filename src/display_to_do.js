const displayToDos = () => {
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('toDoContainer');

    const placeToDos = document.createElement('div');
    placeToDos.classList.add('placeToDos');
    placeToDos.style.border = '1px solid green';

    const button = document.createElement('button');
    button.classList.add('btnToDo');
    button.textContent = 'click me todo';

    toDoContainer.append(placeToDos, button);

    return {toDoContainer};
}

export default displayToDos;
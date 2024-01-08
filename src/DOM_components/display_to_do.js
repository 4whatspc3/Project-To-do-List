const displayToDos = () => {
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('toDoContainer');

    const containerNumber = (number) => {
        toDoContainer.setAttribute('data-display-num', number)
    }

    const placeToDos = document.createElement('div');
    placeToDos.classList.add('placeToDos');
    placeToDos.style.border = '1px solid green';

    toDoContainer.append(placeToDos);

    return {toDoContainer, containerNumber};
}

export default displayToDos;
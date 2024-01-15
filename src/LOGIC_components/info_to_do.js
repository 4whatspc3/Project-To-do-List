const infoToDo = (title, description, dueDate, check) => {
    
    const getAllInfo = (element) => {
        const container = document.createElement('div');
        container.setAttribute('data-todo-num', element);
        
        const pgTitle = document.createElement('p');
        pgTitle.textContent = `title: ${title}`;

        const pgDescription = document.createElement('p');
        pgDescription.textContent = `description: ${description}`;

        const pgDueData = document.createElement('p');
        pgDueData.textContent = `due date: ${dueDate}`;

        const pgCheck = document.createElement('p');
        pgCheck.textContent = `check: ${check}`;
 
        const del = document.createElement('button');
        del.classList.add('del');
        del.textContent = 'delete';

        const upt = document.createElement('button');
        upt.classList.add('upt');
        upt.textContent = 'update';

        container.append(pgTitle, pgDescription, pgDueData, pgCheck, del, upt);

        return container;
    }

    return {title, description, dueDate, check, getAllInfo}
}

export default infoToDo;
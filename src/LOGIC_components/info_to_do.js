const infoToDo = (title, description, dueDate, check, notes, priority) => {
    
    const getAllInfo = (element) => {
        const container = document.createElement('div');
        container.setAttribute('data-todo-num', element);
        
        const pgTitle = document.createElement('p');
        pgTitle.textContent = `title: ${title}`;

        const pgDescription = document.createElement('p');
        pgDescription.textContent = `description: ${description}`;

        const pgDueDate = document.createElement('p');
        pgDueDate.textContent = `due date: ${dueDate}`;

        const pgCheck = document.createElement('p');
        pgCheck.textContent = `check: ${check}`;

        const pgNotes = document.createElement('p');
        pgNotes.textContent = `notes: ${notes}`;

        const pgPriority = document.createElement('p');
        pgPriority.textContent = `priority: ${priority}`;

        const del = document.createElement('button');
        del.classList.add('del');
        del.textContent = 'delete';

        const upt = document.createElement('button');
        upt.classList.add('upt');
        upt.textContent = 'update';

        container.append(pgTitle, pgDescription, pgDueDate, pgCheck, pgNotes, pgPriority, del, upt);

        return container;
    }

    return {title, description, dueDate, check, notes, priority, getAllInfo}
}

export default infoToDo;
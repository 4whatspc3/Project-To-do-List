const infoToDo = (title, description, dueDate, check, notes, priority) => {
    
    const getAllInfo = (element) => {
        const container = document.createElement('div');
        container.setAttribute('data-todo-num', element);
        
        const divTitle = document.createElement('div');

        const pgTitle = document.createElement('p');
        pgTitle.textContent = `Title: `;
        const titleContent = document.createElement('p');
        titleContent.textContent = title;

        divTitle.append(pgTitle, titleContent);

        const divDescription = document.createElement('div');

        const pgDescription = document.createElement('p');
        pgDescription.textContent = `Description: `;
        const descriptionContent = document.createElement('p');
        descriptionContent.textContent = description;

        divDescription.append(pgDescription, descriptionContent);

        const divDueDate = document.createElement('div');

        const pgDueDate = document.createElement('p');
        pgDueDate.textContent = `Due date: `;
        const dueDateContent = document.createElement('p');
        dueDateContent.textContent = dueDate;

        divDueDate.append(pgDueDate, dueDateContent);

        const divCheck = document.createElement('div');

        const pgCheck = document.createElement('p');
        pgCheck.textContent = `Check: `;
        const checkContent = document.createElement('p');
        checkContent.textContent = check;

        divCheck.append(pgCheck, checkContent);

        const divNotes = document.createElement('div');

        const pgNotes = document.createElement('p');
        pgNotes.textContent = `Notes: `;
        const notesContent = document.createElement('p');
        notesContent.textContent = notes;

        divNotes.append(pgNotes, notesContent);

        const divPriority = document.createElement('div');

        const pgPriority = document.createElement('p');
        pgPriority.textContent = `Priority: `;
        const priorityContent = document.createElement('p');
        priorityContent.textContent = priority;

        divPriority.append(pgPriority, priorityContent);

        const del = document.createElement('button');
        del.classList.add('del');
        del.textContent = 'delete';

        const upt = document.createElement('button');
        upt.classList.add('upt');
        upt.textContent = 'update';

        container.append(divTitle, divDescription, divDueDate, divCheck, divNotes, divPriority, del, upt);

        return container;
    }

    return {title, description, dueDate, check, notes, priority, getAllInfo}
}

export default infoToDo;
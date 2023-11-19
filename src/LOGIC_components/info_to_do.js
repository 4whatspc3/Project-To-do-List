const infoToDo = (title, description, dueDate, priority, notes, check) => {
    
    const getAllInfo = (element) => {
        const container = document.createElement('div');
        container.setAttribute('data-todo-num', element);
        
        const paragraph = document.createElement('p');
        paragraph.textContent = `title: ${title}, description: ${description}, due date: ${dueDate},
                                 priority: ${priority}, notes: ${notes}, check: ${check}`;

        const del = document.createElement('button');
        del.classList.add('del');
        del.textContent = 'delete';

        container.append(paragraph, del);

        return container;
    }

    return {title, description, dueDate, priority, notes, check, getAllInfo}
}

export default infoToDo;
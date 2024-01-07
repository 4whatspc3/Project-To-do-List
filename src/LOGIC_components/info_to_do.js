const infoToDo = (title, description, dueDate, check) => {
    
    const getAllInfo = (element) => {
        const container = document.createElement('div');
        container.setAttribute('data-todo-num', element);
        
        const paragraph = document.createElement('p');
        paragraph.textContent = `title: ${title}, description: ${description}, due date: ${dueDate},
                                 check: ${check}`;

        const del = document.createElement('button');
        del.classList.add('del');
        del.textContent = 'delete';

        const upt = document.createElement('button');
        upt.classList.add('upt');
        upt.textContent = 'update';

        container.append(paragraph, del, upt);

        return container;
    }

    return {title, description, dueDate, check, getAllInfo}
}

export default infoToDo;
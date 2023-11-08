const infoToDo = (title, description, dueDate, priority, notes, check) => {
    
    const getAllInfo = () => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `title: ${title}, description: ${description}, due date: ${dueDate},
                                 priority: ${priority}, notes: ${notes}, check: ${check}`;

        return paragraph;
    }

    return {title, description, dueDate, priority, notes, check, getAllInfo}
}

export default infoToDo;
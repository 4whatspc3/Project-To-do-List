const getModal = () => {
    const containerForms = document.createElement('div');
    containerForms.classList.add('container-forms');

    const contentForms = getForms();

    const openModal = document.createElement('div');
    openModal.classList.add('open-modal');

    const btnOpenModal = document.createElement('button');
    btnOpenModal.classList.add('open-button');
    btnOpenModal.textContent = 'Add to-do';

    const dialog = document.createElement('dialog');
    dialog.classList.add('modal');
    dialog.setAttribute('id', 'modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const btnCloseModal = document.createElement('button');
    btnCloseModal.classList.add('close-button');
    btnCloseModal.textContent = 'Close modal';

    modalContent.append(contentForms.forms, btnCloseModal);

    dialog.append(modalContent)

    openModal.append(btnOpenModal);

    containerForms.append(openModal, dialog);

    return {containerForms};
}

const getForms = () => {
    const {title, titleLabel, titleInput, titleAttributes} = getTitle();

    const {description, descrLabel, descrInput, descrAttributes} = getDescription();

    const {dueDate, dueDateInput, dueDateLabel, dueDateAttributes} = getDueDate();

    const {check, checkLabel, checkInput, checkAttributes} = getCheck();

    const {notes, notesLabel, notesInput, notesAttributes} = getNotes();

    const {priority, lowLabel, lowInput, mediumLabel, mediumInput, highLabel, highInput, lowAttributes, mediumAttributes, highAttributes} = getPriority();
    
    const forms = document.createElement('form');
    forms.classList.add('form');
    forms.setAttribute('method', 'dialog');
    forms.setAttribute('autocomplete', 'off');
    
    passAttributes(titleInput, titleAttributes);

    passAttributes(descrInput, descrAttributes);

    passAttributes(dueDateInput, dueDateAttributes);

    passAttributes(checkInput, checkAttributes);

    passAttributes(notesInput, notesAttributes);

    passAttributes(lowInput, lowAttributes);

    passAttributes(mediumInput, mediumAttributes);

    passAttributes(highInput, highAttributes);
    
    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.textContent = 'Submit form';

    forms.append(title, description, dueDate, check, notes, priority, btnSubmit);

    return {forms}
}

const getTitle = () => {
    const title = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.setAttribute('for', 'title');

    const titleInput = document.createElement('input');
    const titleAttributes = getAttributes('text', 'title', 'title', '1');

    title.append(titleLabel, titleInput);

    return {title, titleLabel, titleInput, titleAttributes}
}

const getDescription = () => {
    const description = document.createElement('div');

    const descrLabel = document.createElement('label');
    descrLabel.textContent = 'Description:';
    descrLabel.setAttribute('for', 'description');

    const descrInput = document.createElement('textarea');
    const descrAttributes = getAttributes('text', 'description', 'description', '1');
    
    description.append(descrLabel, descrInput);

    return {description, descrLabel, descrInput, descrAttributes}
}

const getDueDate = () => {
    const dueDate = document.createElement('div');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due date:';
    dueDateLabel.setAttribute('for', 'dueDate');

    const dueDateInput = document.createElement('input');
    const dueDateAttributes = getAttributes('date', 'dueDate', 'dueDate', '2024-01-01');
    
    dueDate.append(dueDateLabel, dueDateInput);

    return {dueDate, dueDateLabel, dueDateInput, dueDateAttributes}
}

const getCheck = () => {
    const check = document.createElement('div');

    const checkLabel = document.createElement('label');
    checkLabel.textContent = 'Check:';
    checkLabel.setAttribute('for', 'check');

    const checkInput = document.createElement('input');
    const checkAttributes = getAttributes('checkbox', 'check', 'check');

    check.append(checkLabel, checkInput);

    return {check, checkLabel, checkInput, checkAttributes}
}

const getNotes = () => {
    const notes = document.createElement('div');

    const notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes:';
    notesLabel.setAttribute('for', 'notes');

    const notesInput = document.createElement('textarea');
    const notesAttributes = getAttributes('text', 'notes', 'notes', '1');
    
    notes.append(notesLabel, notesInput);

    return {notes, notesLabel, notesInput, notesAttributes}
}

const getPriority = () => {
    const priority = document.createElement('div');
    priority.classList.add('priorityOptions');

    const priorityOne = document.createElement('div');

    const lowLabel = document.createElement('label');
    lowLabel.textContent = 'Low';
    lowLabel.setAttribute('for', 'low');

    const lowInput = document.createElement('input');
    const lowAttributes = getRadioAttributes('radio', 'low', 'priority', 'low');

    priorityOne.append(lowInput, lowLabel);

    const priorityTwo = document.createElement('div');

    const mediumLabel = document.createElement('label');
    mediumLabel.textContent = 'Medium';
    mediumLabel.setAttribute('for', 'medium');

    const mediumInput = document.createElement('input');
    const mediumAttributes = getRadioAttributes('radio', 'medium', 'priority', 'medium');

    priorityTwo.append(mediumInput, mediumLabel);

    const priorityThree = document.createElement('div');

    const highLabel = document.createElement('label');
    highLabel.textContent = 'High';
    highLabel.setAttribute('for', 'high');

    const highInput = document.createElement('input');
    const highAttributes = getRadioAttributes('radio', 'high', 'priority', 'high');

    priorityThree.append(highInput, highLabel);

    priority.append(priorityOne, priorityTwo, priorityThree);

    return {priority, lowLabel, lowInput, mediumLabel, mediumInput, highLabel, highInput, lowAttributes, mediumAttributes, highAttributes}
}

const getAttributes = (type, id, name, minlength) => {
    return {type, id, name, minlength}
}

const getRadioAttributes = (type, id, name, value) => {
    return {type, id, name, value}
}

const passAttributes = (element, attributes) => {
    Object.keys(attributes).forEach(attr => {
        return element.setAttribute(attr, attributes[attr]);
    });
}

export default getModal;
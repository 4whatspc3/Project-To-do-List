const getModal = () => {
    const containerForms = document.createElement('div');
    containerForms.classList.add('container-forms');

    const contentForms = getForms();

    const openModal = document.createElement('div');
    openModal.classList.add('open-modal');

    const btnOpenModal = document.createElement('button');
    btnOpenModal.classList.add('open-button');
    btnOpenModal.textContent = 'Open modal';

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
    
    const forms = document.createElement('form');
    forms.classList.add('form');
    forms.setAttribute('method', 'dialog');
    forms.setAttribute('autocomplete', 'off');
    
    passAttributes(titleInput, titleAttributes);

    passAttributes(descrInput, descrAttributes);

    passAttributes(dueDateInput, dueDateAttributes);

    passAttributes(checkInput, checkAttributes);
    
    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.textContent = 'Submit form';

    forms.append(title, description, dueDate, check, btnSubmit);

    return {forms}
}

const getTitle = () => {
    const title = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.setAttribute('for', 'title');

    const titleInput = document.createElement('input');
    const titleAttributes = getAttributes('text', 'title', 'title', '1', 'true');

    title.append(titleLabel, titleInput);

    return {title, titleLabel, titleInput, titleAttributes}
}

const getDescription = () => {
    const description = document.createElement('div');

    const descrLabel = document.createElement('label');
    descrLabel.textContent = 'Description:';
    descrLabel.setAttribute('for', 'description');

    const descrInput = document.createElement('input');
    const descrAttributes = getAttributes('text', 'description', 'description', '1', 'true');
    
    description.append(descrLabel, descrInput);

    return {description, descrLabel, descrInput, descrAttributes}
}

const getDueDate = () => {
    const dueDate = document.createElement('div');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due date:';
    dueDateLabel.setAttribute('for', 'dueDate');

    const dueDateInput = document.createElement('input');
    const dueDateAttributes = getAttributes('date', 'dueDate', 'dueDate', '2024-01-01', 'true');
    
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

const getAttributes = (type, id, name, minlength, required) => {
    return {type, id, name, minlength, required}
}

const passAttributes = (element, attributes) => {
    Object.keys(attributes).forEach(attr => {
        return element.setAttribute(attr, attributes[attr]);
    });
}

export default getModal;
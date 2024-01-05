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
    const forms = document.createElement('form');
    forms.classList.add('form');
    forms.setAttribute('method', 'dialog');
    forms.setAttribute('autocomplete', 'off');

    const title = document.createElement('div');
    
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    titleLabel.setAttribute('for', 'title');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('minlength', '1');
    titleInput.setAttribute('required', 'true');

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.textContent = 'Submit form';

    title.append(titleLabel, titleInput, btnSubmit);

    forms.append(title);

    return {forms}
}

export default getModal;
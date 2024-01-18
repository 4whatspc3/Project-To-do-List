const moldPage = () => {
    
    const container = document.createElement('div');
    container.classList.add('container');

    const header = document.createElement('div');
    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = 'To-Do List...';

    header.append(headerParagraph);

    const content = document.createElement('div');
    content.classList.add('content');

    const btn = document.createElement('button');
    btn.classList.add('btnProject');
    btn.textContent = 'Create a project';

    return {container, header, content, btn}
}

export default moldPage;
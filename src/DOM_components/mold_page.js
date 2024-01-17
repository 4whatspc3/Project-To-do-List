const moldPage = () => {
    
    const container = document.createElement('div');
    container.classList.add('container');

    const content = document.createElement('div');
    content.classList.add('content');

    const btn = document.createElement('button');
    btn.classList.add('btnProject');
    btn.textContent = 'Create a project';

    return {container, content, btn}
}

export default moldPage;
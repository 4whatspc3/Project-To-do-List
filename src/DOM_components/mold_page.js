const moldPage = () => {
    
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.border = '1px solid blue';

    const content = document.createElement('div');
    content.classList.add('content');
    content.style.border = '1px solid pink';

    const btn = document.createElement('button');
    btn.classList.add('btnProject');
    btn.textContent = 'Create a project';

    return {container, content, btn}
}

export default moldPage;
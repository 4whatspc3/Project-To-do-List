const displayProjects = () => {       
    const projContainer = document.createElement('div');
    projContainer.classList.add('projContainer');
    projContainer.style.border = "1px solid blue";
    
    const projHeader = document.createElement('div');
    projHeader.classList.add('projHeader');
    
    const headerContent = document.createElement('p');
    headerContent.textContent = 'Projects';
    projHeader.append(headerContent);

    const projBody = document.createElement('div');
    projBody.classList.add('projBody');
    projBody.style.border = '1px solid red';

    projContainer.append(projHeader, projBody);

    return {projContainer};
}

export default displayProjects;
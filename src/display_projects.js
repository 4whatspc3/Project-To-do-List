const displayProjects = () => {       
    const projContainer = document.createElement('div');
    projContainer.classList.add('projContainer');
    
    const projHeader = document.createElement('div');
    projHeader.classList.add('projHeader');
    
    const headerContent = document.createElement('p');
    headerContent.textContent = 'Projects';
    projHeader.append(headerContent);

    const projBody = document.createElement('div');
    projBody.classList.add('projBody');

    projContainer.append(projHeader, projBody);

    return {projContainer};
}

export default displayProjects;
const nameProjects = () => {
    const projBlock = document.createElement('div');
    projBlock.classList.add('projBlock');

    //const contentImage = document.createElement('img');
    //contentImage.setAttribute('src', image);

    const projTitle = document.createElement('button');
    projTitle.classList.add('btnTitle');

    const projDel = document.createElement('button');
    projDel.classList.add('projDel');
    projDel.textContent = 'delete';
    
    const passTitle  = (title) => {
        projTitle.textContent = title;
    }

    //contentImage 
    projBlock.append(projTitle, projDel);

    return {projBlock, passTitle}
}

export default nameProjects;
const nameProjects = (title) => {
    const projBlock = document.createElement('div');
    projBlock.classList.add('projBlock');
    projBlock.style.border = '1px solid orange';

    const contentImage = document.createElement('img');
    //contentImage.setAttribute('src', image);

    const projTitle = document.createElement('button');
    projTitle.classList.add('btnTitle');
    projTitle.textContent = title;

    projBlock.append(contentImage, projTitle);

    return {projBlock}
}

export default nameProjects;
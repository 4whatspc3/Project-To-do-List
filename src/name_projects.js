const nameProjects = (title) => {
    const content = document.createElement('div');
    content.classList.add('content');

    const contentImage = document.createElement('img');
    //contentImage.setAttribute('src', image);

    const projTitle = document.createElement('p');
    projTitle.textContent = title;

    content.append(contentImage, projTitle);

    return {content}
}

export default nameProjects;
const buttonHome = () => {
    const projHome = document.createElement('div');
    projHome.classList.add('projHome');
    projHome.style.border = '1px solid purple';

    const contentImage = document.createElement('img');
    //contentImage.setAttribute('src', image);

    const projTitle = document.createElement('button');
    projTitle.classList.add('btnHome');
    projTitle.textContent = 'Home';

    projHome.append(contentImage, projTitle);

    return {projHome}
}

export default buttonHome;
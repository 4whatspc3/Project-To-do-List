const buttonHome = () => {
    const getTitle = () => {
        let title = prompt('test');

        return title;
    }
    
    const passNumber = (className, increment) => {
        const projNumber = document.querySelectorAll(`.${className}`);
        projNumber.forEach(project => {
            project.setAttribute('data-proj-num', increment);

            increment++
        })
    }

    return {getTitle, passNumber}
}

export default buttonHome;
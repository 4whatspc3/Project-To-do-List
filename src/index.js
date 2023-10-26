import infoToDo from './info_to_do';

import saveToDo from './save_to_do';

import displayProjects from './display_projects';

import nameProjects from './name_projects';

const test = displayProjects();

const container = document.createElement('div');
container.classList.add('container');

const button = document.createElement('button');
button.textContent = 'click me';

button.addEventListener('click', () => {  
    const whereProjects = document.querySelector('.projBody');
    
    let title = prompt('test');

    const name = nameProjects(title);

    whereProjects.append(name.content);

    title = saveToDo();

    console.log(title);
})

container.append(button);

document.body.append(container, test.projContainer);
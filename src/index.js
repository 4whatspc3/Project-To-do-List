import infoToDo from './info_to_do';

import saveToDo from './save_to_do';

import displayToDos from './display_to_do';

import displayProjects from './display_projects';

import nameProjects from './name_projects';

const test = displayProjects();

const container = document.createElement('div');
container.classList.add('container');
container.style.border = '1px solid blue';

const content = document.createElement('div');
content.classList.add('content');
container.style.border = '1px solid pink';


const btn = document.createElement('button');
btn.classList.add('btnHome');
btn.textContent = 'click me';

container.append(btn, test.projContainer, content);

document.body.append(container);

//=============================================================

const manipulateContainer = document.querySelector('.container');

manipulateContainer.addEventListener('click', (e) => {
    if(e.target.matches('.btnHome')){
        //add projects
        const placeProjects = document.querySelector('.projBody');
    
        let title = prompt('test');
    
        const name = nameProjects(title);
    
        placeProjects.append(name.projBlock);
    
        console.log(title);
    }

    if(e.target.matches('.btnTitle')){
        //append a place do display the to-do items
        const cont = document.querySelector('.content');
        
        const testToDo = displayToDos();

        cont.append(testToDo.toDoContainer);

        console.log('carcosa');
    }

    if(e.target.matches('.btnToDo')){
        //add the to-do items
        const whereToDos = document.querySelector('.placeToDos');
    
        let title = prompt('test'),
        description = prompt('test'),
        dueDate = prompt('test'),
        priority = prompt('test'),
        notes = prompt('test'),
        check = prompt('test');

        const final = infoToDo(title, description, dueDate, priority, notes, check);

        whereToDos.append(final.getAllInfo());

        console.log(final);
    }
})
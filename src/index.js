import moldPage from './DOM_components/mold_page';

import displayToDos from './DOM_components/display_to_do';

import displayProjects from './DOM_components/display_projects';

import nameProjects from './DOM_components/name_projects';

import buttonHome from './DOM_components/button_home';

import buttonCounters from './LOGIC_components/button_counters';

import infoToDo from './LOGIC_components/info_to_do';

import saveToDo from './LOGIC_components/save_to_do';

const component = () => {
    const {container, content, btn} = moldPage();

    const {projContainer} = displayProjects();

    const {toDoContainer, containerNumber} = displayToDos();

    const {getTitle, passNumber} = buttonHome();

    return {container, content, btn, projContainer, toDoContainer, containerNumber, getTitle, passNumber}
}

const page = component();

page.container.append(page.btn, page.projContainer, page.content);

page.content.append(page.toDoContainer);

page.containerNumber('home');

document.body.append(page.container);

const counters = buttonCounters();

function empty(element) {
    element.replaceChildren(); 
}

const manipulateContainer = document.querySelector('.container');

manipulateContainer.addEventListener('click', (e) => {
    //add projects
    if(e.target.matches('.btnHome')){
        const newProj = nameProjects();
        
        newProj.passTitle(page.getTitle());

        const save = saveToDo();

        counters.listOfsaves.push(save);

        const display = displayToDos();

        counters.listOfDisplays.push(display);

        const placeProjects = document.querySelector('.projBody');
        
        placeProjects.append(newProj.projBlock);

        page.passNumber('btnTitle', counters.j)
    }
    
    //add a place to display the to-do items
    if(e.target.matches('.btnTitle')){
        
        let reference = e.target.dataset.projNum;

        const manipulateContent = document.querySelector('.content');

        empty(manipulateContent);

        manipulateContent.append(counters.listOfDisplays[reference].toDoContainer)

        counters.listOfDisplays[reference].containerNumber(reference);
    }

    if(e.target.matches('.btnToDo')){
        let reference = e.target.parentNode.dataset.displayNum;
        let lengthReference = Object.keys(counters.listOfsaves[reference].fillSave).length;

        if(lengthReference > 0){
            
            if(lengthReference === 1) {
                counters.k = 1;
            } else {
                counters.k = lengthReference;
            }
            
        } else {
            counters.k = 0;
        }

        const provisorySave = counters.listOfsaves[reference].fillSave;
        
        let title = prompt('test'),
        description = prompt('test'),
        dueDate = prompt('test'),
        priority = prompt('test'),
        notes = prompt('test'),
        check = prompt('test');

        const info = infoToDo(title, description, dueDate, priority, notes, check);

        provisorySave[counters.k] = info;

        counters.listOfsaves[reference].fillSave = provisorySave;

        const whereToDos = document.querySelector('.placeToDos');
        
        empty(whereToDos);

        for (let key in provisorySave){
            whereToDos.append(provisorySave[key].getAllInfo());
        }
    }
    counters.j = 0;
})
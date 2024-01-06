import moldPage from './DOM_components/mold_page';

import displayToDos from './DOM_components/display_to_do';

import displayProjects from './DOM_components/display_projects';

import nameProjects from './DOM_components/name_projects';

import buttonProject from './DOM_components/button_project';

import buttonHome from './DOM_components/button_home';

import buttonCounters from './LOGIC_components/button_counters';

import infoToDo from './LOGIC_components/info_to_do';

import saveToDo from './LOGIC_components/save_to_do';

import getModal from './FORM_components/forms';

const component = () => {
    const {container, content, btn} = moldPage();

    const {projContainer, projBody} = displayProjects();

    const {toDoContainer, containerNumber} = displayToDos();

    const {getTitle, passNumber} = buttonProject();

    const {projHome} = buttonHome();

    const {containerForms} = getModal();

    return {container, content, btn, projContainer, toDoContainer, projBody, projHome, containerForms, containerNumber, getTitle, passNumber}
}

const page = component();

page.container.append(page.btn, page.projContainer, page.content);

page.projBody.append(page.projHome);

page.content.append(page.toDoContainer);

page.containerNumber('home');

document.body.append(page.containerForms, page.container);

const counters = buttonCounters();

function empty(element) {
    element.replaceChildren(); 
}

const manipulateContainer = document.querySelector('.container');

manipulateContainer.addEventListener('click', (e) => {
    if(e.target.matches('.btnHome')){

        const manipulateContent = document.querySelector('.content');

        empty(manipulateContent);

        manipulateContent.append(page.toDoContainer);

        page.containerNumber('home');

        const whereToDos = document.querySelector('.placeToDos');
            
        empty(whereToDos);

        if(counters.i === 0){
            const defaultMessage = document.createElement('p');
           
            defaultMessage.textContent = 'There are no tasks';

            whereToDos.append(defaultMessage);

        } else {

            while(counters.x < counters.listOfsaves.length){
                let provisorySave = counters.listOfsaves[counters.x].fillSave;

                for (let key in provisorySave){
                    
                    whereToDos.append(provisorySave[key].getAllInfo(key));

                    document.querySelector('button.del').remove();

                    document.querySelector('button.upt').remove();
                }

                counters.x++
            }

            counters.x = 0;
        }
    }
    
    //add projects
    if(e.target.matches('.btnProject')){
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
        counters.i++
        
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

        modal.showModal();

        const submitForms = document.querySelector('.form');

        submitForms.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const info = infoToDo(title.value, description.value, dueDate.value, check.value);

            console.log(info)

            provisorySave[counters.k] = info;

            counters.listOfsaves[reference].fillSave = provisorySave;

            const whereToDos = document.querySelector('.placeToDos');
            
            empty(whereToDos);

            for (let key in provisorySave){
                whereToDos.append(provisorySave[key].getAllInfo(key));
            }
        
            submitForms.reset();
            
            modal.close();
        })

        
    }

    if(e.target.matches('.del')){
        let itemRef;
        counters.i--

        if(counters.i < 0){
            counters.i = 0;
        }
        
        const toDoContainer = document.querySelector('.toDoContainer');

        let displayRef = toDoContainer.dataset.displayNum;
        
        let facilitus = counters.listOfsaves[displayRef].fillSave;

        let lengthReference = Object.keys(facilitus).length;

        if(lengthReference === 1){
            itemRef = 0;
        } else {
            itemRef = e.target.parentNode.dataset.todoNum;
        }
        
        delete facilitus[itemRef];

        e.target.parentNode.remove();

        const converter = Object.values(facilitus);

        facilitus = {};

        let i = 0;
        while(i < converter.length){
            facilitus[i] = converter[i];
            i++
        }

        counters.listOfsaves[displayRef].fillSave = facilitus;
    }

    if(e.target.matches('.upt')){

        const toDoContainer = document.querySelector('.toDoContainer');

        let displayRef = toDoContainer.dataset.displayNum;
        
        const facilitus = counters.listOfsaves[displayRef].fillSave;

        let itemRef = e.target.parentNode.dataset.todoNum;

        let title = prompt('test'),
        description = prompt('test'),
        dueDate = prompt('test'),
        priority = prompt('test'),
        notes = prompt('test'),
        check = prompt('test');

        const info = infoToDo(title, description, dueDate, priority, notes, check);

        facilitus[itemRef] = info;

        counters.listOfsaves[displayRef].fillSave = facilitus;

        const whereToDos = document.querySelector('.placeToDos');
        
        empty(whereToDos);

        for (let key in facilitus){
            whereToDos.append(facilitus[key].getAllInfo(key));
        }
    }
    
    counters.j = 0;
})

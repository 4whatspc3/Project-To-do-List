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

import './styles/style.css';

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

page.toDoContainer.append(page.containerForms);

page.containerNumber('home');

document.body.append(page.container);

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

                    document.querySelector('button.del').disabled = true;

                    document.querySelector('button.upt').disabled = true;
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
        page.passNumber('projDel', counters.j)
    }
    
    //add a place to display the to-do items
    if(e.target.matches('.btnTitle')){
        
        let reference = e.target.dataset.projNum;

        let displayReference = counters.listOfDisplays[reference].toDoContainer;

        const manipulateContent = document.querySelector('.content');

        empty(manipulateContent);

        manipulateContent.append(displayReference);

        displayReference.append(page.containerForms);

        counters.listOfDisplays[reference].containerNumber(reference);

        counters.z = 0;
    }

    if(e.target.matches('.button')){

        if(counters.z === 0){
            let reference = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.displayNum;

            counters.i++
                
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
                
            if(check.checked){
                check.value = 'Completed';
            } else {
                check.value = 'Not completed';
            }

            let priority;

            const priorityOptions = document.querySelectorAll('.priorityOptions div input');

            priorityOptions.forEach(option => {
                if(option.checked){
                    
                    if(option.value === 'low'){
                        priority = 'low';
                        
                    }

                    if(option.value === 'medium'){
                        priority = 'medium';
                        
                    }

                    if(option.value === 'high'){
                        priority = 'high';
                        
                    }
                    
                }
            })

            const info = infoToDo(title.value, description.value, dueDate.value, check.value, notes.value, priority);

            provisorySave[counters.k] = info;

            counters.listOfsaves[reference].fillSave = provisorySave;

            const whereToDos = document.querySelector('.placeToDos');
            
            empty(whereToDos);

            for (let key in provisorySave){
                whereToDos.append(provisorySave[key].getAllInfo(key));
            }
            
            modal.close();

            const submitForms = document.querySelector('.form');

            submitForms.reset();
        } else {
            const toDoContainer = document.querySelector('.toDoContainer');

            let displayRef = toDoContainer.dataset.displayNum;
            
            const facilitus = counters.listOfsaves[displayRef].fillSave;

            const tempCopy = {};

            Object.assign(tempCopy, facilitus);

            if(title.value === ''){
                title.value = tempCopy[counters.itemRef].title;
            }

            if(description.value === ''){
                description.value = tempCopy[counters.itemRef].description;
            }

            if(dueDate.value === ''){
                dueDate.value = tempCopy[counters.itemRef].dueDate;
            }

            if(check.checked){
                check.value = 'Completed';
            } else {
                check.value = 'Not completed';
            }

            if(notes.value === ''){
                notes.value = tempCopy[counters.itemRef].notes;
            }

            let priority;

            const priorityOptions = document.querySelectorAll('.priorityOptions div input');

            priorityOptions.forEach(option => {
                if(option.checked){
                    
                    if(option.value === 'low'){
                        priority = 'low';
                        
                    }

                    if(option.value === 'medium'){
                        priority = 'medium';
                        
                    }

                    if(option.value === 'high'){
                        priority = 'high';
                        
                    }
                    
                }
            })

            const info = infoToDo(title.value, description.value, dueDate.value, check.value, notes.value, priority);

            facilitus[counters.itemRef] = info;

            counters.listOfsaves[displayRef].fillSave = facilitus;

            const whereToDos = document.querySelector('.placeToDos');
            
            empty(whereToDos);

            for (let key in facilitus){
                whereToDos.append(facilitus[key].getAllInfo(key));
            }

            modal.close();

            const submitForms = document.querySelector('.form');

            submitForms.reset();

        }
        
    }

    if(e.target.matches('.projDel')){

        let reference = e.target.dataset.projNum;

        let facilitus = counters.listOfsaves[reference].fillSave;

        counters.i = counters.i - Object.keys(facilitus).length;

        if(counters.i < 0){
            counters.i = 0;
        }

        delete counters.listOfDisplays[reference];

        let displayMirror = Object.values(counters.listOfDisplays);

        counters.listOfDisplays = displayMirror;

        delete counters.listOfsaves[reference];

        let saveMirror = Object.values(counters.listOfsaves);

        counters.listOfsaves = saveMirror;

        e.target.parentNode.remove();

        page.passNumber('btnTitle', counters.j)
        page.passNumber('projDel', counters.j)

        const manipulateContent = document.querySelector('.content');

        empty(manipulateContent);

        manipulateContent.append(page.toDoContainer);

        page.containerNumber('home');

        const whereToDos = document.querySelector('.placeToDos');
            
        empty(whereToDos);

        const defaultMessage = document.createElement('p');
        
        defaultMessage.textContent = 'Select or create a new project';

        whereToDos.append(defaultMessage);

    }

    if(e.target.matches('.del')){
        counters.i--

        if(counters.i < 0){
            counters.i = 0;
        }
        
        const toDoContainer = document.querySelector('.toDoContainer');

        let displayRef = toDoContainer.dataset.displayNum;
        
        let facilitus = counters.listOfsaves[displayRef].fillSave;

        let lengthReference = Object.keys(facilitus).length;

        if(lengthReference === 1){
            counters.itemRef = 0;
        } else {
            counters.itemRef = e.target.parentNode.dataset.todoNum;
        }
        
        delete facilitus[counters.itemRef];

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

        modal.showModal();

        counters.itemRef = e.target.parentNode.dataset.todoNum;

        counters.z = 1;
    }

    if(e.target.matches('.open-button')){
        let reference = e.target.parentNode.parentNode.parentNode.dataset.displayNum;

        if(reference !== 'home'){
            modal.showModal();
        }
    }

    if(e.target.matches('.close-button')){
        modal.close();
    }
    
    counters.j = 0;
})

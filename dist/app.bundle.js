(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.classList.add("toDoContainer");const t=document.createElement("div");return t.classList.add("placeToDos"),t.style.border="1px solid green",e.append(t),{toDoContainer:e,containerNumber:t=>{e.setAttribute("data-display-num",t)}}},t=(e,t,n,o,a,c)=>({title:e,description:t,dueDate:n,check:o,notes:a,priority:c,getAllInfo:s=>{const r=document.createElement("div");r.setAttribute("data-todo-num",s);const l=document.createElement("p");l.textContent=`title: ${e}`;const d=document.createElement("p");d.textContent=`description: ${t}`;const i=document.createElement("p");i.textContent=`due date: ${n}`;const u=document.createElement("p");u.textContent=`check: ${o}`;const m=document.createElement("p");m.textContent=`notes: ${a}`;const p=document.createElement("p");p.textContent=`priority: ${c}`;const b=document.createElement("button");b.classList.add("del"),b.textContent="delete";const v=document.createElement("button");return v.classList.add("upt"),v.textContent="update",r.append(l,d,i,u,m,p,b,v),r}}),n=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Title:",t.setAttribute("for","title");const n=document.createElement("input"),o=l("text","title","title","1");return e.append(t,n),{title:e,titleLabel:t,titleInput:n,titleAttributes:o}},o=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Description:",t.setAttribute("for","description");const n=document.createElement("textarea"),o=l("text","description","description","1");return e.append(t,n),{description:e,descrLabel:t,descrInput:n,descrAttributes:o}},a=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Due date:",t.setAttribute("for","dueDate");const n=document.createElement("input"),o=l("date","dueDate","dueDate","2024-01-01");return e.append(t,n),{dueDate:e,dueDateLabel:t,dueDateInput:n,dueDateAttributes:o}},c=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Check:",t.setAttribute("for","check");const n=document.createElement("input"),o=l("checkbox","check","check");return e.append(t,n),{check:e,checkLabel:t,checkInput:n,checkAttributes:o}},s=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Notes:",t.setAttribute("for","notes");const n=document.createElement("textarea"),o=l("text","notes","notes","1");return e.append(t,n),{notes:e,notesLabel:t,notesInput:n,notesAttributes:o}},r=()=>{const e=document.createElement("div");e.classList.add("priorityOptions");const t=document.createElement("div"),n=document.createElement("label");n.textContent="Low",n.setAttribute("for","low");const o=document.createElement("input"),a=d("radio","low","priority","low");t.append(o,n);const c=document.createElement("div"),s=document.createElement("label");s.textContent="Medium",s.setAttribute("for","medium");const r=document.createElement("input"),l=d("radio","medium","priority","medium");c.append(r,s);const i=document.createElement("div"),u=document.createElement("label");u.textContent="High",u.setAttribute("for","high");const m=document.createElement("input"),p=d("radio","high","priority","high");return i.append(m,u),e.append(t,c,i),{priority:e,lowLabel:n,lowInput:o,mediumLabel:s,mediumInput:r,highLabel:u,highInput:m,lowAttributes:a,mediumAttributes:l,highAttributes:p}},l=(e,t,n,o)=>({type:e,id:t,name:n,minlength:o}),d=(e,t,n,o)=>({type:e,id:t,name:n,value:o}),i=(e,t)=>{Object.keys(t).forEach((n=>e.setAttribute(n,t[n])))},u=()=>{const e=document.createElement("div");e.classList.add("container-forms");const t=(()=>{const{title:e,titleLabel:t,titleInput:l,titleAttributes:d}=n(),{description:u,descrLabel:m,descrInput:p,descrAttributes:b}=o(),{dueDate:v,dueDateInput:h,dueDateLabel:f,dueDateAttributes:E}=a(),{check:y,checkLabel:g,checkInput:j,checkAttributes:C}=c(),{notes:D,notesLabel:x,notesInput:L,notesAttributes:k}=s(),{priority:A,lowLabel:N,lowInput:O,mediumLabel:S,mediumInput:I,highLabel:q,highInput:w,lowAttributes:T,mediumAttributes:H,highAttributes:B}=r(),R=document.createElement("form");R.classList.add("form"),R.setAttribute("method","dialog"),R.setAttribute("autocomplete","off"),i(l,d),i(p,b),i(h,E),i(j,C),i(L,k),i(O,T),i(I,H),i(w,B);const $=document.createElement("button");return $.classList.add("button"),$.setAttribute("type","submit"),$.textContent="Submit form",R.append(e,u,v,y,D,A,$),{forms:R}})(),l=document.createElement("div");l.classList.add("open-modal");const d=document.createElement("button");d.classList.add("open-button"),d.textContent="Add to-do";const u=document.createElement("dialog");u.classList.add("modal"),u.setAttribute("id","modal");const m=document.createElement("div");m.classList.add("modal-content");const p=document.createElement("button");return p.classList.add("close-button"),p.textContent="Close modal",m.append(t.forms,p),u.append(m),l.append(d),e.append(l,u),{containerForms:e}},m=(()=>{const{container:t,content:n,btn:o}=(()=>{const e=document.createElement("div");e.classList.add("container"),e.style.border="1px solid blue";const t=document.createElement("div");t.classList.add("content"),t.style.border="1px solid pink";const n=document.createElement("button");return n.classList.add("btnProject"),n.textContent="Create a project",{container:e,content:t,btn:n}})(),{projContainer:a,projBody:c}=(()=>{const e=document.createElement("div");e.classList.add("projContainer"),e.style.border="1px solid blue";const t=document.createElement("div");t.classList.add("projHeader");const n=document.createElement("p");n.textContent="Projects",t.append(n);const o=document.createElement("div");return o.classList.add("projBody"),o.style.border="1px solid red",e.append(t,o),{projContainer:e,projBody:o}})(),{toDoContainer:s,containerNumber:r}=e(),{getTitle:l,passNumber:d}={getTitle:()=>prompt("test"),passNumber:(e,t)=>{document.querySelectorAll(`.${e}`).forEach((e=>{e.setAttribute("data-proj-num",t),t++}))}},{projHome:i}=(()=>{const e=document.createElement("div");e.classList.add("projHome"),e.style.border="1px solid purple";const t=document.createElement("img"),n=document.createElement("button");return n.classList.add("btnHome"),n.textContent="Home",e.append(t,n),{projHome:e}})(),{containerForms:m}=u();return{container:t,content:n,btn:o,projContainer:a,toDoContainer:s,projBody:c,projHome:i,containerForms:m,containerNumber:r,getTitle:l,passNumber:d}})();m.container.append(m.btn,m.projContainer,m.content),m.projBody.append(m.projHome),m.content.append(m.toDoContainer),m.toDoContainer.append(m.containerForms),m.containerNumber("home"),document.body.append(m.container);const p={i:0,j:0,k:0,z:0,x:0,itemRef:void 0,listOfsaves:[],listOfDisplays:[],listOfProjects:[]};function b(e){e.replaceChildren()}document.querySelector(".container").addEventListener("click",(n=>{if(n.target.matches(".btnHome")){const e=document.querySelector(".content");b(e),e.append(m.toDoContainer),m.containerNumber("home");const t=document.querySelector(".placeToDos");if(b(t),0===p.i){const e=document.createElement("p");e.textContent="There are no tasks",t.append(e)}else{for(;p.x<p.listOfsaves.length;){let e=p.listOfsaves[p.x].fillSave;for(let n in e)t.append(e[n].getAllInfo(n)),document.querySelector("button.del").remove(),document.querySelector("button.upt").remove();p.x++}p.x=0}}if(n.target.matches(".btnProject")){const t=(()=>{const e=document.createElement("div");e.classList.add("projBlock"),e.style.border="1px solid orange";const t=document.createElement("img"),n=document.createElement("button");n.classList.add("btnTitle");const o=document.createElement("button");return o.classList.add("projDel"),o.textContent="delete",e.append(t,n,o),{projBlock:e,passTitle:e=>{n.textContent=e}}})();t.passTitle(m.getTitle());const n=((...e)=>({fillSave:Object.assign({},{...e})}))();p.listOfsaves.push(n);const o=e();p.listOfDisplays.push(o),document.querySelector(".projBody").append(t.projBlock),m.passNumber("btnTitle",p.j),m.passNumber("projDel",p.j)}if(n.target.matches(".btnTitle")){let e=n.target.dataset.projNum,t=p.listOfDisplays[e].toDoContainer;const o=document.querySelector(".content");b(o),o.append(t),t.append(m.containerForms),p.listOfDisplays[e].containerNumber(e),p.z=0}if(n.target.matches(".button"))if(0===p.z){let e=n.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.displayNum;p.i++;let o=Object.keys(p.listOfsaves[e].fillSave).length;p.k=o>0?1===o?1:o:0;const a=p.listOfsaves[e].fillSave;let c;check.checked?check.value="Completed":check.value="Not completed",document.querySelectorAll(".priorityOptions div input").forEach((e=>{e.checked&&("low"===e.value&&(c="low"),"medium"===e.value&&(c="medium"),"high"===e.value&&(c="high"))}));const s=t(title.value,description.value,dueDate.value,check.value,notes.value,c);a[p.k]=s,p.listOfsaves[e].fillSave=a;const r=document.querySelector(".placeToDos");b(r);for(let e in a)r.append(a[e].getAllInfo(e));modal.close(),document.querySelector(".form").reset()}else{let e=document.querySelector(".toDoContainer").dataset.displayNum;const n=p.listOfsaves[e].fillSave,o={};let a;Object.assign(o,n),""===title.value&&(title.value=o[p.itemRef].title),""===description.value&&(description.value=o[p.itemRef].description),""===dueDate.value&&(dueDate.value=o[p.itemRef].dueDate),check.checked?check.value="Completed":check.value="Not completed",""===notes.value&&(notes.value=o[p.itemRef].notes),document.querySelectorAll(".priorityOptions div input").forEach((e=>{e.checked&&("low"===e.value&&(a="low"),"medium"===e.value&&(a="medium"),"high"===e.value&&(a="high"))}));const c=t(title.value,description.value,dueDate.value,check.value,notes.value,a);n[p.itemRef]=c,p.listOfsaves[e].fillSave=n;const s=document.querySelector(".placeToDos");b(s);for(let e in n)s.append(n[e].getAllInfo(e));modal.close(),document.querySelector(".form").reset()}if(n.target.matches(".projDel")){let e=n.target.dataset.projNum,t=p.listOfsaves[e].fillSave;p.i=p.i-Object.keys(t).length,p.i<0&&(p.i=0),delete p.listOfDisplays[e];let o=Object.values(p.listOfDisplays);p.listOfDisplays=o,delete p.listOfsaves[e];let a=Object.values(p.listOfsaves);p.listOfsaves=a,n.target.parentNode.remove(),m.passNumber("btnTitle",p.j),m.passNumber("projDel",p.j);const c=document.querySelector(".content");b(c),c.append(m.toDoContainer),m.containerNumber("home");const s=document.querySelector(".placeToDos");b(s);const r=document.createElement("p");r.textContent="Select or create a new project",s.append(r)}if(n.target.matches(".del")){p.i--,p.i<0&&(p.i=0);let e=document.querySelector(".toDoContainer").dataset.displayNum,t=p.listOfsaves[e].fillSave,o=Object.keys(t).length;p.itemRef=1===o?0:n.target.parentNode.dataset.todoNum,delete t[p.itemRef],n.target.parentNode.remove();const a=Object.values(t);t={};let c=0;for(;c<a.length;)t[c]=a[c],c++;p.listOfsaves[e].fillSave=t}n.target.matches(".upt")&&(modal.showModal(),p.itemRef=n.target.parentNode.dataset.todoNum,p.z=1),n.target.matches(".open-button")&&"home"!==n.target.parentNode.parentNode.parentNode.dataset.displayNum&&modal.showModal(),n.target.matches(".close-button")&&modal.close(),p.j=0}))})();
(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.classList.add("toDoContainer");const t=document.createElement("div");return t.classList.add("placeToDos"),t.style.border="1px solid green",e.append(t),{toDoContainer:e,containerNumber:t=>{e.setAttribute("data-display-num",t)}}},t=(e,t,n,o)=>({title:e,description:t,dueDate:n,check:o,getAllInfo:c=>{const a=document.createElement("div");a.setAttribute("data-todo-num",c);const s=document.createElement("p");s.textContent=`title: ${e}, description: ${t}, due date: ${n},\n                                 check: ${o}`;const r=document.createElement("button");r.classList.add("del"),r.textContent="delete";const d=document.createElement("button");return d.classList.add("upt"),d.textContent="update",a.append(s,r,d),a}}),n=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Title:",t.setAttribute("for","title");const n=document.createElement("input"),o=s("text","title","title","1","true");return e.append(t,n),{title:e,titleLabel:t,titleInput:n,titleAttributes:o}},o=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Description:",t.setAttribute("for","description");const n=document.createElement("input"),o=s("text","description","description","1","true");return e.append(t,n),{description:e,descrLabel:t,descrInput:n,descrAttributes:o}},c=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Due date:",t.setAttribute("for","dueDate");const n=document.createElement("input"),o=s("date","dueDate","dueDate","2024-01-01","true");return e.append(t,n),{dueDate:e,dueDateLabel:t,dueDateInput:n,dueDateAttributes:o}},a=()=>{const e=document.createElement("div"),t=document.createElement("label");t.textContent="Check:",t.setAttribute("for","check");const n=document.createElement("input"),o=s("checkbox","check","check");return e.append(t,n),{check:e,checkLabel:t,checkInput:n,checkAttributes:o}},s=(e,t,n,o,c)=>void 0===c?{type:e,id:t,name:n,minlength:o}:{type:e,id:t,name:n,minlength:o,required:c},r=(e,t)=>{Object.keys(t).forEach((n=>e.setAttribute(n,t[n])))},d=()=>{const e=document.createElement("div");e.classList.add("container-forms");const t=(()=>{const{title:e,titleLabel:t,titleInput:s,titleAttributes:d}=n(),{description:l,descrLabel:i,descrInput:u,descrAttributes:m}=o(),{dueDate:p,dueDateInput:b,dueDateLabel:f,dueDateAttributes:v}=c(),{check:E,checkLabel:h,checkInput:y,checkAttributes:j}=a(),C=document.createElement("form");C.classList.add("form"),C.setAttribute("method","dialog"),C.setAttribute("autocomplete","off"),r(s,d),r(u,m),r(b,v),r(y,j);const D=document.createElement("button");return D.classList.add("button"),D.setAttribute("type","submit"),D.textContent="Submit form",C.append(e,l,p,E,D),{forms:C}})(),s=document.createElement("div");s.classList.add("open-modal");const d=document.createElement("button");d.classList.add("open-button"),d.textContent="Add to-do";const l=document.createElement("dialog");l.classList.add("modal"),l.setAttribute("id","modal");const i=document.createElement("div");i.classList.add("modal-content");const u=document.createElement("button");return u.classList.add("close-button"),u.textContent="Close modal",i.append(t.forms,u),l.append(i),s.append(d),e.append(s,l),{containerForms:e}},l=(()=>{const{container:t,content:n,btn:o}=(()=>{const e=document.createElement("div");e.classList.add("container"),e.style.border="1px solid blue";const t=document.createElement("div");t.classList.add("content"),t.style.border="1px solid pink";const n=document.createElement("button");return n.classList.add("btnProject"),n.textContent="Create a project",{container:e,content:t,btn:n}})(),{projContainer:c,projBody:a}=(()=>{const e=document.createElement("div");e.classList.add("projContainer"),e.style.border="1px solid blue";const t=document.createElement("div");t.classList.add("projHeader");const n=document.createElement("p");n.textContent="Projects",t.append(n);const o=document.createElement("div");return o.classList.add("projBody"),o.style.border="1px solid red",e.append(t,o),{projContainer:e,projBody:o}})(),{toDoContainer:s,containerNumber:r}=e(),{getTitle:l,passNumber:i}={getTitle:()=>prompt("test"),passNumber:(e,t)=>{document.querySelectorAll(`.${e}`).forEach((e=>{e.setAttribute("data-proj-num",t),t++}))}},{projHome:u}=(()=>{const e=document.createElement("div");e.classList.add("projHome"),e.style.border="1px solid purple";const t=document.createElement("img"),n=document.createElement("button");return n.classList.add("btnHome"),n.textContent="Home",e.append(t,n),{projHome:e}})(),{containerForms:m}=d();return{container:t,content:n,btn:o,projContainer:c,toDoContainer:s,projBody:a,projHome:u,containerForms:m,containerNumber:r,getTitle:l,passNumber:i}})();l.container.append(l.btn,l.projContainer,l.content),l.projBody.append(l.projHome),l.content.append(l.toDoContainer),l.toDoContainer.append(l.containerForms),l.containerNumber("home"),document.body.append(l.container);const i={i:0,j:0,k:0,listOfsaves:[],listOfDisplays:[],listOfProjects:[]};function u(e){e.replaceChildren()}document.querySelector(".container").addEventListener("click",(n=>{if(n.target.matches(".btnHome")){const e=document.querySelector(".content");u(e),e.append(l.toDoContainer),l.containerNumber("home");const t=document.querySelector(".placeToDos");if(u(t),0===i.i){const e=document.createElement("p");e.textContent="There are no tasks",t.append(e)}else{for(;i.x<i.listOfsaves.length;){let e=i.listOfsaves[i.x].fillSave;for(let n in e)t.append(e[n].getAllInfo(n)),document.querySelector("button.del").remove(),document.querySelector("button.upt").remove();i.x++}i.x=0}}if(n.target.matches(".btnProject")){const t=(()=>{const e=document.createElement("div");e.classList.add("projBlock"),e.style.border="1px solid orange";const t=document.createElement("img"),n=document.createElement("button");return n.classList.add("btnTitle"),e.append(t,n),{projBlock:e,passTitle:e=>{n.textContent=e}}})();t.passTitle(l.getTitle());const n=((...e)=>({fillSave:Object.assign({},{...e})}))();i.listOfsaves.push(n);const o=e();i.listOfDisplays.push(o),document.querySelector(".projBody").append(t.projBlock),l.passNumber("btnTitle",i.j)}if(n.target.matches(".btnTitle")){let e=n.target.dataset.projNum,t=i.listOfDisplays[e].toDoContainer;const o=document.querySelector(".content");u(o),o.append(t),t.append(l.containerForms),i.listOfDisplays[e].containerNumber(e)}if(n.target.matches(".open-button")){let e=n.target.parentNode.parentNode.parentNode.dataset.displayNum;if("home"!==e){i.i++;let n=Object.keys(i.listOfsaves[e].fillSave).length;i.k=n>0?1===n?1:n:0;const o=i.listOfsaves[e].fillSave;modal.showModal();const c=document.querySelector(".form");c.addEventListener("submit",(n=>{n.preventDefault(),check.checked?check.value="Completed":check.value="Not completed";const a=t(title.value,description.value,dueDate.value,check.value);console.log(a),o[i.k]=a,i.listOfsaves[e].fillSave=o;const s=document.querySelector(".placeToDos");u(s);for(let e in o)s.append(o[e].getAllInfo(e));c.reset(),modal.close()}))}}if(n.target.matches(".del")){let e;i.i--,i.i<0&&(i.i=0);let t=document.querySelector(".toDoContainer").dataset.displayNum,o=i.listOfsaves[t].fillSave;e=1===Object.keys(o).length?0:n.target.parentNode.dataset.todoNum,delete o[e],n.target.parentNode.remove();const c=Object.values(o);o={};let a=0;for(;a<c.length;)o[a]=c[a],a++;i.listOfsaves[t].fillSave=o}if(n.target.matches(".upt")){let e=document.querySelector(".toDoContainer").dataset.displayNum;const o=i.listOfsaves[e].fillSave;let c=n.target.parentNode.dataset.todoNum,a=prompt("test"),s=prompt("test"),r=prompt("test"),d=prompt("test");prompt("test"),prompt("test");const l=t(a,s,r,d);o[c]=l,i.listOfsaves[e].fillSave=o;const m=document.querySelector(".placeToDos");u(m);for(let e in o)m.append(o[e].getAllInfo(e))}i.j=0}))})();
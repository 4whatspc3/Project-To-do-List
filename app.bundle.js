(()=>{"use strict";const t=()=>{const t=document.createElement("div");t.classList.add("toDoContainer");const e=document.createElement("div");e.classList.add("placeToDos"),e.style.border="1px solid green";const o=document.createElement("button");return o.classList.add("btnToDo"),o.textContent="click me todo",t.append(e,o),{toDoContainer:t,containerNumber:e=>{t.setAttribute("data-display-num",e)}}},e=(t,e,o,n,s,a)=>({title:t,description:e,dueDate:o,priority:n,notes:s,check:a,getAllInfo:c=>{const l=document.createElement("div");l.setAttribute("data-todo-num",c);const r=document.createElement("p");r.textContent=`title: ${t}, description: ${e}, due date: ${o},\n                                 priority: ${n}, notes: ${s}, check: ${a}`;const d=document.createElement("button");d.classList.add("del"),d.textContent="delete";const i=document.createElement("button");return i.classList.add("upt"),i.textContent="update",l.append(r,d,i),l}}),o=(()=>{const{container:e,content:o,btn:n}=(()=>{const t=document.createElement("div");t.classList.add("container"),t.style.border="1px solid blue";const e=document.createElement("div");e.classList.add("content"),e.style.border="1px solid pink";const o=document.createElement("button");return o.classList.add("btnHome"),o.textContent="click me",{container:t,content:e,btn:o}})(),{projContainer:s}=(()=>{const t=document.createElement("div");t.classList.add("projContainer"),t.style.border="1px solid blue";const e=document.createElement("div");e.classList.add("projHeader");const o=document.createElement("p");o.textContent="Projects",e.append(o);const n=document.createElement("div");return n.classList.add("projBody"),n.style.border="1px solid red",t.append(e,n),{projContainer:t}})(),{toDoContainer:a,containerNumber:c}=t(),{getTitle:l,passNumber:r}={getTitle:()=>prompt("test"),passNumber:(t,e)=>{document.querySelectorAll(`.${t}`).forEach((t=>{t.setAttribute("data-proj-num",e),e++}))}};return{container:e,content:o,btn:n,projContainer:s,toDoContainer:a,containerNumber:c,getTitle:l,passNumber:r}})();o.container.append(o.btn,o.projContainer,o.content),o.content.append(o.toDoContainer),o.containerNumber("home"),document.body.append(o.container);const n={i:0,j:0,k:0,listOfsaves:[],listOfDisplays:[],listOfProjects:[]};function s(t){t.replaceChildren()}document.querySelector(".container").addEventListener("click",(a=>{if(a.target.matches(".btnHome")){const e=(()=>{const t=document.createElement("div");t.classList.add("projBlock"),t.style.border="1px solid orange";const e=document.createElement("img"),o=document.createElement("button");return o.classList.add("btnTitle"),t.append(e,o),{projBlock:t,passTitle:t=>{o.textContent=t}}})();e.passTitle(o.getTitle());const s=((...t)=>({fillSave:Object.assign({},{...t})}))();n.listOfsaves.push(s);const a=t();n.listOfDisplays.push(a),document.querySelector(".projBody").append(e.projBlock),o.passNumber("btnTitle",n.j)}if(a.target.matches(".btnTitle")){let t=a.target.dataset.projNum;const e=document.querySelector(".content");s(e),e.append(n.listOfDisplays[t].toDoContainer),n.listOfDisplays[t].containerNumber(t)}if(a.target.matches(".btnToDo")){let t=a.target.parentNode.dataset.displayNum,o=Object.keys(n.listOfsaves[t].fillSave).length;n.k=o>0?1===o?1:o:0;const c=n.listOfsaves[t].fillSave;let l=prompt("test"),r=prompt("test"),d=prompt("test"),i=prompt("test"),p=prompt("test"),m=prompt("test");const u=e(l,r,d,i,p,m);c[n.k]=u,n.listOfsaves[t].fillSave=c;const b=document.querySelector(".placeToDos");s(b);for(let t in c)b.append(c[t].getAllInfo(t))}if(a.target.matches(".del")){let t=document.querySelector(".toDoContainer").dataset.displayNum;console.log(t);const e=n.listOfsaves[t].fillSave;console.log(e),console.log("congo");let o=a.target.parentNode.dataset.todoNum;console.log(e[o]),delete e[o],a.target.parentNode.remove(),console.log(e)}if(a.target.matches(".upt")){console.log("ola");let t=document.querySelector(".toDoContainer").dataset.displayNum;console.log(t);const o=n.listOfsaves[t].fillSave;console.log(o),console.log("congo");let c=a.target.parentNode.dataset.todoNum;console.log(o[c]),console.log("CONGO2");let l=prompt("test"),r=prompt("test"),d=prompt("test"),i=prompt("test"),p=prompt("test"),m=prompt("test");const u=e(l,r,d,i,p,m);o[c]=u,n.listOfsaves[t].fillSave=o;const b=document.querySelector(".placeToDos");s(b);for(let t in o)b.append(o[t].getAllInfo(t));console.log("congo3")}n.j=0}))})();
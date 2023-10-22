import toDoInfo from './taskInfo';

import saveToDo from './saveTask';

const task1 = toDoInfo('1', '2', '3', '4', '5', '6');

const task2 = toDoInfo('a', 'b', 'c', 'd', 'e', 'f');

console.log(task1.check);

const save1 = saveToDo(task1, task2);

console.log(save1);

for (let key in task1){

    console.log(task1[key]);
}
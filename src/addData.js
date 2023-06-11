import { parseISO } from 'date-fns';
import addRemoveBtn from './remove';
import format from 'date-fns/format';

//store task info in array as html elements

export default function addData(newTask) {
  const taskElement = [];

  for (const prop in newTask) {
    if (prop === 'priority') {
      taskElement.push(newTask[prop]);
      break;
    }
    taskElement.push(`<p>${newTask[prop]}</P>`);
  }

  //store in local storage and return to display

  return taskElement;
}

export function displayTasks(data, parent, database) {
  const taskContainer = document.createElement('div');
  const priority = data.pop();

  taskContainer.innerHTML = data.join('');
  taskContainer.classList.add('card');
  addRemoveBtn(taskContainer, parent, database);
  setBackGround(priority, taskContainer);

  return taskContainer;
}

//set task background based on priority
function setBackGround(priority, task) {
  if (priority === '1') {
    task.style.backgroundColor = '#f65b5d';
  } else if (priority === '2') {
    task.style.backgroundColor = '#fefe77';
  } else if (priority === '3') {
    task.style.backgroundColor = '#5cacf3';
  }
}

//get first child while skipping text nodes
export function getFirstChild(el) {
  let firstChild = el.firstChild;
  // skip TextNodes
  while (firstChild != null && firstChild.nodeType == 3) {
    firstChild = firstChild.nextSibling;
  }
  return firstChild;
}

//User projects

export function addNewProject(name, parent, database) {
  const newProjectBtn = document.createElement('div');
  newProjectBtn.innerHTML = `<i class="fa-solid fa-rectangle-list"></i> ${name}`;
  newProjectBtn.classList.add('projectBtn');
  addRemoveBtn(newProjectBtn, parent, database);
  return newProjectBtn;
}

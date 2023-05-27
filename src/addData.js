import addRemoveBtn from './remove';

export default function addData(newTask) {
  const taskElement = [];
  for (const prop in newTask) {
    if (prop === 'priority') {
      taskElement.push(newTask[prop]);
      break;
    }
    taskElement.push(`<p>${newTask[prop]}</P>`);
  }
  return taskElement;
}

export function displayTasks(data) {
  const taskContainer = document.createElement('div');
  const priority = data.pop();
  console.log(priority);

  taskContainer.innerHTML = data.join('');
  taskContainer.classList.add('card');
  addRemoveBtn(taskContainer);
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

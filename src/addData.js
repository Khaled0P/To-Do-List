import addRemoveBtn from './remove';

export default function addData(newTask) {
  const taskElement = [];
  for (const prop in newTask) {
    if (prop === 'priority') break;
    taskElement.push(`<p>${newTask[prop]}</P>`);
  }
  return taskElement;
}

export function displayTasks(data) {
  const taskContainer = document.createElement('div');

  taskContainer.innerHTML = data.join('');
  taskContainer.classList.add('card');
  addRemoveBtn(taskContainer);
  return taskContainer;
}

export default function addData(newTask) {
  const taskElement = [];
  for (const prop in newTask) {
    taskElement.push(`<p>${newTask[prop]}</P>`);
  }
  return taskElement;
}

export function displayTasks(data) {
  const taskContainer = document.createElement('div');

  taskContainer.innerHTML = data.join('');
  taskContainer.classList.add('card');
  return taskContainer;
}

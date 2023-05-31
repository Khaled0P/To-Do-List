import { getFirstChild } from './addData';
import addData, { displayTasks } from './addData';

export function switchTab(tab, projects, parentContainer, tasks, addTask) {
  const currentContainer = Object.values(tab)[0];
  //remove active class from active tab and add it to clicked tab
  projects.forEach((project) => {
    project.classList.remove('active');
  });
  this.classList.add('active');
  //remove first parent node while ignoring text nodes
  getFirstChild(parentContainer).remove();
  //get and display local storage tasks
  let currentTasks = tasks;
  currentTasks.forEach((task) => {
    task = addData(task);
    currentContainer.appendChild(displayTasks(task));
  });
  parentContainer.insertBefore(currentContainer, addTask);
}

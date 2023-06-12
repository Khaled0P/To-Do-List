import { getFirstChild } from './addData';
import addData, { displayTasks } from './addData';

export function switchTab(
  tab,
  projects,
  parentContainer,
  tasks,
  addTask,
  database
) {
  //remove active class from active tab and add it to clicked tab
  [...projects].forEach((project) => {
    project.classList.remove('active');
  });
  this.classList.add('active');
  //remove first parent node while ignoring text nodes
  getFirstChild(parentContainer).remove();
  //remove existing tasks to load local storage tasks
  while (tab.firstChild) tab.firstChild.remove();
  //get and display local storage tasks
  tasks.forEach((task) => {
    task = addData(task);
    tab.appendChild(displayTasks(task, tab, database));
  });
  parentContainer.insertBefore(tab, addTask);
}

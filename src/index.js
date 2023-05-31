import './styles/styles.css';
import logoImage from './assets/logo.png';
import Task from './tasksComponent';
import inBox, { today, thisWeek } from './InBox';
import addData, { displayTasks, getFirstChild } from './addData';
import { cancelForm } from './remove';
import localStorageTasks, {
  thisWeekTasks,
  todayTasks,
} from './localStorageProps';
import parseISO from 'date-fns/parseISO';
import { switchTab } from './switchTabs';

const logo = document.querySelector('.logo');
logo.src = logoImage;

//tasks tabs
const projects = document.querySelectorAll('.projectBtn');
const inBoxBtn = document.getElementById('inbox');
const todayBtn = document.getElementById('today');
const thisWeekBtn = document.getElementById('thisWeek');

const tasksContainer = document.getElementById('tasksContainer');
const addTask = document.querySelector('.addTaskBtn');

//form data
const form = document.querySelector('form');
const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('date');
const priority = document.getElementById('priority');
const taskBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');

const inBoxContainer = inBox().inBox;
tasksContainer.insertBefore(inBoxContainer, addTask);
let currentDatabase = inBox().inBoxData;

addTask.addEventListener('click', () => {
  form.style.display = 'block';
  addTask.style.display = 'none';
});

//fetch tasks from local storage if exists
const localTasks = localStorageTasks();
localTasks.forEach((task) => {
  task = addData(task);

  //display task on page
  inBoxContainer.appendChild(displayTasks(task));
});

taskBtn.addEventListener('click', function () {
  const task = new Task(
    title.value,
    description.value,
    parseISO(date.value),
    priority.value
  );

  //store task in database
  currentDatabase.push(task);
  const taskElement = addData(task);

  localStorage.setItem('taskDatabase', JSON.stringify(currentDatabase));

  //display task on page
  inBoxContainer.appendChild(displayTasks(taskElement));
  form.style.display = 'none';
  addTask.style.display = 'block';

  //clear inputs
  document.querySelectorAll('form input').forEach((input) => {
    input.value = '';
  });
});

//remove form
cancelForm(cancelBtn, form, addTask);

//InBox tab display
inBoxBtn.addEventListener('click', () => {
  let switchToInBox = switchTab.bind(inBoxBtn);
  switchToInBox(inBox(), projects, tasksContainer, localTasks, addTask);
});
//today tab display
todayBtn.addEventListener('click', () => {
  let switchToTab = switchTab.bind(todayBtn);
  switchToTab(today(), projects, tasksContainer, todayTasks(), addTask);
});
//week tab display
thisWeekBtn.addEventListener('click', () => {
  let switchToTab = switchTab.bind(thisWeekBtn);
  switchToTab(thisWeek(), projects, tasksContainer, thisWeekTasks(), addTask);
});

import './styles/styles.css';
import logoImage from './assets/logo.png';
import Task from './tasksComponent';
import inBox from './InBox';
import addData, { displayTasks } from './addData';
import { cancelForm } from './remove';

const logo = document.querySelector('.logo');
logo.src = logoImage;

const tasksContainer = document.getElementById('tasksContainer');

//form data
const form = document.querySelector('form');
const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('date');
const priority = document.getElementById('priority');
const taskBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');

const inBoxContainer = inBox().inBox;
tasksContainer.insertBefore(inBoxContainer, form);
const addTask = document.querySelector('.addTaskBtn');

addTask.addEventListener('click', () => {
  form.style.display = 'block';
  addTask.style.display = 'none';
});

taskBtn.addEventListener('click', function () {
  const dataBase = inBox().inBoxData;
  const task = new Task(
    title.value,
    description.value,
    date.value,
    priority.value
  );

  //store task in database in html format
  const taskElement = addData(task);
  dataBase.push(taskElement);

  //display task on page
  inBoxContainer.insertBefore(displayTasks(taskElement), addTask);
  form.style.display = 'none';
  addTask.style.display = 'block';

  //clear inputs
  document.querySelectorAll('form input').forEach((input) => {
    input.value = '';
  });
});

//remove form
cancelForm(cancelBtn, form, addTask);

import './styles/styles.css';
import logoImage from './assets/logo.png';
import Task, { Project } from './tasksComponent';
import inBox, { today, thisWeek } from './InBox';
import addData, { displayTasks, addNewProject } from './addData';
import { cancelForm } from './remove';
import localStorageTasks, {
  thisWeekTasks,
  todayTasks,
  declareDatabase,
} from './localStorageProps';
import parseISO from 'date-fns/parseISO';
import { switchTab } from './switchTabs';

const logo = document.querySelector('.logo');
logo.src = logoImage;

//tasks tabs
const projectsBtn = document.querySelectorAll('.projectBtn');
const inBoxBtn = document.getElementById('inbox');
const todayBtn = document.getElementById('today');
const thisWeekBtn = document.getElementById('thisWeek');

const tasksContainer = document.getElementById('tasksContainer');
const addTask = document.querySelector('.addTaskBtn');

//default taskForm data
const taskForm = document.querySelector('.taskForm');
const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('date');
const priority = document.getElementById('priority');
const taskBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');

//user projects
const projectsContainer = document.querySelector('.currentProjects');
const addProjectBtn = document.getElementById('addProject');
const addProjectForm = document.getElementById('projectForm');
const projectname = document.getElementById('projectName');
const submitProjectBtn = document.getElementById('submitProject');
const cancelProjectBtn = document.getElementById('cancelProject');

const inBoxContainer = inBox().inBox;
tasksContainer.insertBefore(inBoxContainer, addTask);

//databases
let currentDatabase = inBox().inBoxData;
const projectsDatabase = declareDatabase('projectsBtn');

addTask.addEventListener('click', () => {
  taskForm.style.display = 'block';
  addTask.style.display = 'none';
});

//fetch tasks from local storage if exists
const localTasks = inBox().inBoxData;

localTasks.forEach((task) => {
  //display task on page
  task = addData(task);
  inBoxContainer.appendChild(
    displayTasks(task, inBoxContainer, 'taskDatabase')
  );
});
//fetch projectsBtn from local storage
const localProjects = declareDatabase('projects');
localProjects.forEach((project) => {
  projectsContainer.appendChild(
    addNewProject(project.name, projectsContainer, 'projects')
  );
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
  inBoxContainer.appendChild(
    displayTasks(taskElement, inBoxContainer, 'taskDatabase')
  );
  taskForm.style.display = 'none';
  addTask.style.display = 'block';

  //clear inputs
  document.querySelectorAll('.taskForm input').forEach((input) => {
    input.value = '';
  });
});

//remove taskForm
cancelForm(cancelBtn, taskForm, addTask);

//InBox tab display
inBoxBtn.addEventListener('click', () => {
  let switchToInBox = switchTab.bind(inBoxBtn);
  switchToInBox(
    inBox(),
    projectsBtn,
    tasksContainer,
    localStorageTasks(),
    addTask,
    inBoxContainer,
    'taskDatabase'
  );
});
//today tab display
todayBtn.addEventListener('click', () => {
  let switchToTab = switchTab.bind(todayBtn);
  switchToTab(
    today(),
    projectsBtn,
    tasksContainer,
    todayTasks(),
    addTask,
    inBoxContainer,
    'taskDatabase'
  );
});
//week tab display
thisWeekBtn.addEventListener('click', () => {
  let switchToTab = switchTab.bind(thisWeekBtn);
  switchToTab(
    thisWeek(),
    projectsBtn,
    tasksContainer,
    thisWeekTasks(),
    addTask,
    inBoxContainer,
    'taskDatabase'
  );
});

//User projectsBtn
addProjectBtn.addEventListener('click', () => {
  addProjectForm.style.display = 'block';
  addProjectBtn.style.display = 'none';
});

//cancel projectsBtn form
cancelForm(cancelProjectBtn, addProjectForm, addProjectBtn);

submitProjectBtn.addEventListener('click', () => {
  const project = new Project(projectname.value, []);

  //store project in local storage and display on page
  projectsDatabase.push(project);
  localStorage.setItem('projects', JSON.stringify(projectsDatabase));
  projectsContainer.appendChild(
    addNewProject(project.name, projectsContainer, 'projects')
  );

  //remove form when done
  addProjectForm.style.display = 'none';
  addProjectBtn.style.display = 'block';
});

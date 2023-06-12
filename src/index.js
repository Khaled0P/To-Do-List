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
  localStorageProjects,
} from './localStorageProps';
import parseISO from 'date-fns/parseISO';
import { switchTab } from './switchTabs';
import currentUserProject from './userProjects';

const logo = document.querySelector('.logo');
logo.src = logoImage;

//tasks tabs
const projectsBtn = document.getElementsByClassName('projectBtn');
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
const userProjects = document.getElementsByClassName('userProjectBtn');

const inBoxContainer = inBox().inBox;
tasksContainer.insertBefore(inBoxContainer, addTask);

//databases
let currentDatabase = inBox().inBoxData;
let currentDatabaseName = 'taskDatabase';
let currentContainer = inBoxContainer;
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

  localStorage.setItem(currentDatabaseName, JSON.stringify(currentDatabase));

  //display task on page
  currentContainer.appendChild(
    displayTasks(taskElement, currentContainer, currentDatabaseName)
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
  currentContainer = inBoxContainer;
  currentDatabase = inBox().inBoxData;
  currentDatabaseName = 'taskDatabase';
  let switchToInBox = switchTab.bind(inBoxBtn);
  switchToInBox(
    inBoxContainer,
    projectsBtn,
    tasksContainer,
    localStorageTasks(),
    addTask,
    'taskDatabase'
  );
});
//today tab display
todayBtn.addEventListener('click', () => {
  currentContainer = inBoxContainer;
  currentDatabase = inBox().inBoxData;
  currentDatabaseName = 'taskDatabase';
  let switchToTab = switchTab.bind(todayBtn);
  switchToTab(
    today().today,
    projectsBtn,
    tasksContainer,
    todayTasks(),
    addTask,
    'taskDatabase'
  );
});
//week tab display
thisWeekBtn.addEventListener('click', () => {
  currentContainer = inBoxContainer;
  currentDatabase = inBox().inBoxData;
  currentDatabaseName = 'taskDatabase';
  let switchToTab = switchTab.bind(thisWeekBtn);
  switchToTab(
    thisWeek().thisWeek,
    projectsBtn,
    tasksContainer,
    thisWeekTasks(),
    addTask,
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

//change active database to clicked project
function customProjectOnClick(project) {
  project.addEventListener('click', () => {
    const projectContainer = document.createElement('div');
    let currentProject = currentUserProject.bind(project);
    let switchToTab = switchTab.bind(project);
    currentDatabaseName = project.textContent;
    localStorage.getItem(currentDatabaseName)
      ? (currentDatabase = JSON.parse(
          localStorage.getItem(currentDatabaseName)
        ))
      : (currentDatabase = currentProject(projectsContainer).database);
    currentContainer = projectContainer;
    switchToTab(
      projectContainer,
      projectsBtn,
      tasksContainer,
      currentDatabase,
      addTask,
      currentDatabaseName
    );
  });
}

submitProjectBtn.addEventListener('click', () => {
  const project = new Project(projectname.value, []);
  //store project in local storage and display on page
  projectsDatabase.push(project);
  localStorage.setItem('projects', JSON.stringify(projectsDatabase));
  const displayedProject = addNewProject(
    project.name,
    projectsContainer,
    'projects'
  );
  projectsContainer.appendChild(displayedProject);
  customProjectOnClick(displayedProject);

  //remove form when done
  addProjectForm.style.display = 'none';
  addProjectBtn.style.display = 'block';
});

//change active database to clicked project
[...userProjects].forEach((project) => {
  customProjectOnClick(project);
});

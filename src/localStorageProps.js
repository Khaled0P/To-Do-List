import { parseISO } from 'date-fns';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';

//fetch tasks from local storage if exists
export default function localStorageTasks() {
  if (localStorage.getItem('taskDatabase')) {
    const tasks = JSON.parse(localStorage.getItem('taskDatabase'));
    return tasks;
  }
}

export function localStorageProjects() {
  if (localStorage.getItem('projects')) {
    const projects = JSON.parse(localStorage.getItem('projectss'));
    return projects;
  } else {
    return [];
  }
}

//load up local storage content or empty array if no content
export function declareDatabase(database) {
  if (localStorage.getItem(database)) {
    return JSON.parse(localStorage.getItem(database));
  } else {
    return [];
  }
}

export function todayTasks() {
  let todayTasks = [];
  if (localStorage.getItem('taskDatabase')) {
    let database = JSON.parse(localStorage.getItem('taskDatabase'));
    database.forEach((ele) => {
      if (isToday(parseISO(ele.date))) {
        todayTasks.push(ele);
      }
    });
  }
  //  else {
  //   todayTasks = [];
  // }
  return todayTasks;
}

export function thisWeekTasks() {
  let weekTasks = [];
  if (localStorage.getItem('taskDatabase')) {
    let database = JSON.parse(localStorage.getItem('taskDatabase'));
    database.forEach((ele) => {
      if (isThisWeek(parseISO(ele.date))) {
        weekTasks.push(ele);
      }
    });
  }

  return weekTasks;
}

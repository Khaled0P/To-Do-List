import { parseISO } from 'date-fns';
import isToday from 'date-fns/isToday';

//fetch tasks from local storage if exists
export default function localStorageTasks() {
  if (localStorage.getItem('taskDatabase')) {
    const tasks = JSON.parse(localStorage.getItem('taskDatabase'));
    return tasks;
  }
}

//load up local storage content or empty array if no content
export function declareDatabase() {
  let database;
  if (localStorage.getItem('taskDatabase')) {
    database = JSON.parse(localStorage.getItem('taskDatabase'));
  } else {
    database = [];
  }
  return database;
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

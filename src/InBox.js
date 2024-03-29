import { declareDatabase } from './localStorageProps';

export default function inBox() {
  let inBoxData = declareDatabase('taskDatabase');
  const inBox = document.createElement('div');
  inBox.classList.add('inBox');
  return { inBox, inBoxData };
}

export function today() {
  const todayDatabase = [];
  const today = document.createElement('div');
  today.classList.add('today');
  return { today, todayDatabase };
}

export function thisWeek() {
  const weekDatabase = [];
  const thisWeek = document.createElement('div');
  thisWeek.classList.add('thisWeek');
  return { thisWeek, weekDatabase };
}

export function userProject(name) {
  const project = document.createElement('div');
  project.classList.add(name);
  return project;
}

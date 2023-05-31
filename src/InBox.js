import { declareDatabase } from './localStorageProps';

export default function inBox() {
  let inBoxData = declareDatabase();
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

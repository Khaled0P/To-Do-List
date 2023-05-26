// import './styles/styles.css';

export default function InBox() {
  const inBoxData = [];
  const inBox = document.createElement('div');
  inBox.classList.add('inBox');

  const addTask = document.createElement('button');
  addTask.classList.add('addTaskBtn');
  addTask.innerHTML =
    '<i class="fas fa-plus" aria-hidden="true"></i> Add project';
  inBox.appendChild(addTask);

  return { inBox, inBoxData };
}

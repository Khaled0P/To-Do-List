//task remove button
export default function addRemoveBtn(container, parent, database) {
  const removeBtn = document.createElement('input');
  removeBtn.type = 'radio';
  removeBtn.classList.add('removeBtn');
  container.appendChild(removeBtn);
  removeOnClick(removeBtn, parent, database);
}

export function cancelForm(button, form, addTask) {
  button.onclick = () => {
    form.style.display = 'none';
    addTask.style.display = 'block';
  };
}

//remove on click behavior
export function removeOnClick(btn, parent, database) {
  btn.addEventListener('click', function () {
    let parentArr = Array.from(parent.children);
    let index = parentArr.indexOf(this.parentNode);
    let inBoxData = JSON.parse(localStorage.getItem(database));
    inBoxData.splice(index, 1);
    localStorage.setItem(database, JSON.stringify(inBoxData));
    this.parentNode.remove();
  });
}

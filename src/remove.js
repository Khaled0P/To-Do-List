//task remove button
export default function addRemoveBtn(container) {
  const removeBtn = document.createElement('input');
  removeBtn.type = 'radio';
  removeBtn.classList.add('removeBtn');
  container.appendChild(removeBtn);
  removeOnClick(removeBtn);
}

export function cancelForm(button, form, addTask) {
  button.onclick = () => {
    form.style.display = 'none';
    addTask.style.display = 'block';
  };
}

//remove on click behavior
export function removeOnClick(btn) {
  btn.addEventListener('click', function () {
    this.parentNode.remove();
  });
}

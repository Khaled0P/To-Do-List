export default function currentUserProject(parent) {
  let parentArr = Array.from(parent.children);
  let index = parentArr.indexOf(this);
  return JSON.parse(localStorage.getItem('projects'))[index];
}

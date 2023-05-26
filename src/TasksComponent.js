export default class Task {
  constructor(title, description, date, complete = false) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.complete = complete;
  }
  setStatus() {
    this.complete === false ? this.complete === true : this.complete === false;
  }
}

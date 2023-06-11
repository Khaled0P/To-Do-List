export default class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = new Date(date);
    this.priority = priority;
  }
}

export class Project {
  constructor(name, database) {
    this.name = name;
    this.database = database;
  }
}

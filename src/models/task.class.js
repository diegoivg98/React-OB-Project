import { LEVELS } from "./levels.enum";

/* The constructor function is a special function that is used to create an object. */
export class Task {
  name = "";
  description = "";
  completed = false;
  level = LEVELS.NORMAL;

  constructor(name, description, completed, level) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}

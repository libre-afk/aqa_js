class Team {
  constructor(name, _sprintDuration, releaseDate, _dailyStandupTime) {
    this.name = name;
    this.sprintDuration = _sprintDuration;
    this.releaseDate = releaseDate;
    this.dailyStandupTime = _dailyStandupTime;
    this.teammates = [];
    this.tasks = [];
  }

  get teamName() {
    return this.name;
  }

  set teamName(newName) {
    this.name = newName;
  }

  get sprintDuration() {
    return this._sprintDuration;
  }

  set sprintDuration(duration) {
    this._sprintDuration = duration;
  }

  get plannedReleaseDate() {
    return this.releaseDate;
  }

  get dailyStandupTime() {
    return this._dailyStandupTime;
  }

  set dailyStandupTime(time) {
    this._dailyStandupTime = time;
  }

  get numberOfTeammates() {
    return this.teammates.length;
  }

  getName() {
    return this.name;
  }

  getSprintDuration() {
    return this.sprintDuration;
  }

  getPlannedReleaseDate() {
    return this.plannedReleaseDate;
  }

  getDailyStandupTime() {
    return this.dailyStandupTime;
  }
  
  getNumberOfTeammates() {
    return this.numberOfTeammates;
  }

  getTeammates() {
    return this.teammates;
  }

  getTasks() {
    return this.tasks;
  }

  addTeammate(teammate) {
    this.teammates.push(teammate);
  }

  removeTeammate(teammate) {
    const index = this.teammates.indexOf(teammate);
    if (index !== -1) {
      this.teammates.splice(index, 1);
    }
  }

  editTeammate(oldTeammate, newTeammate) {
    const index = this.teammates.indexOf(oldTeammate);
    if (index !== -1) {
      this.teammates[index] = newTeammate;
    }
  }

  addTask(task) {
    if (!this.tasks.includes(task)) {
      this.tasks.push(task);
    }
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(oldTask, newTask) {
    const index = this.tasks.indexOf(oldTask);
    if (index !== -1) {
      this.tasks[index] = newTask;
    }
  }

  showAllTeammates() {
    return this.teammates;
  }

  showTeammatesBySpecialization(specialization) {
    return this.teammates.filter(
      (teammate) => teammate.specialization === specialization
    );
  }

  showAllTasks() {
    return this.tasks;
  }
}

module.exports = Team;

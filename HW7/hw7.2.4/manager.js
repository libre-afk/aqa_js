// manager.js
const ITSpecialist = require('./itspecialist');

class Manager extends ITSpecialist {
  constructor(name, grade, experienceInYears, age, country, salary, isScrumMaster) {
    super(name, grade, experienceInYears, age, country, salary);
    this.isScrumMaster = isScrumMaster;
  }
}

module.exports = Manager;

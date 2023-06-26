// developer.js
const ITSpecialist = require('./itspecialist');

class Developer extends ITSpecialist {
  constructor(name, grade, experienceInYears, age, country, salary, isWritingUnitTests) {
    super(name, grade, experienceInYears, age, country, salary);
    this.isWritingUnitTests = isWritingUnitTests;
  }
}

module.exports = Developer;

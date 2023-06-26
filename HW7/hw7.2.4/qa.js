    // qa.js
    const ITSpecialist = require('./itspecialist');

    class QA extends ITSpecialist {
      constructor(name, grade, experienceInYears, age, country, salary, isAqa) {
        super(name, grade, experienceInYears, age, country, salary);
        this.isAqa = isAqa;
      }
    }
    
    module.exports = QA;
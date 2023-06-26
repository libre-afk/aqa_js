class ITSpecialist {
    constructor(name, grade, experienceInYears, age, country, salary) {
      this.name = name;
      this.grade = grade;
      this.experienceInYears = experienceInYears;
      this.age = age;
      this.country = country;
      this._salary = salary;
    }
  
    getAllInfo() {
      return {
        name: this.name,
        grade: this.grade,
        experienceInYears: this.experienceInYears,
        age: this.age,
        country: this.country,
        salary: this._salary
      };
    }
  
    setCountry(newCountry) {
      this.country = newCountry;
    }
  
    get salary() {
      return this._salary;
    }
  }
  
  module.exports = ITSpecialist;
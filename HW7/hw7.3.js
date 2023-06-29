///task 1

class AQA {
  constructor(experience_in_years, grade, name, desiredSalary, skills) {
    this.experience_in_years = experience_in_years;
    this.grade = grade;
    this.name = name;
    this.desiredSalary = desiredSalary;
    this.skills = skills;
  }

  getCV() {
    return `This is ${this.name}'s CV. 
              ${this.grade} AQA with ${
      this.experience_in_years
    } years of working experience. 
              Key skills are ${this.skills.join(", ")}.
              Desired salary is not less than $${this.desiredSalary}.`;
  }
}

class AQAnew {
  constructor(experience_in_years, grade, name, desiredSalary, skills) {
    this.experience_in_years = experience_in_years;
    this.grade = grade;
    this.name = name;
    this.desiredSalary = desiredSalary;
    this.skills = skills;
  }
}

const aqa = new AQA(3, "Middle", "Anatoly Karpovich", 3000, [
  "typescript",
  "automation",
  "manual testing",
]);
console.log(aqa.getCV());

const aqaNew = new AQAnew(1, "Junior", "", 2500, [
  "manual checkbox testing",
  "effective communication",
  "cross-team sync",
]);
console.log(aqa.getCV.call(aqaNew));


///task 2

String.prototype.removeSpecialCharacters = function() {
    return this.replace(/[^\w\s]/gi, '');
  };
  
  console.log('HE!!LL??OO'.removeSpecialCharacters()); 
  console.log('c!a@n y#o$u h%e&a^r m*e?'.removeSpecialCharacters());    

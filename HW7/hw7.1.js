function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(`Function was called ${count} times`);
  };
}

const count = counter();

count();
count();
count();

class User {
  constructor(name, surname) {
    this.name = name;
    let _surname = surname;

    this.sayHi = function () {
      return `Hello from ${this.name}`;
    };
  }
}

const user1 = new User("Sam ", "Winchester");

console.log(user1.sayHi());

const user2 = new User("Dean", "Winchester");

console.log(user2.sayHi());

const user3 = new User("Bobby", "Singer");

console.log(user3.surname);

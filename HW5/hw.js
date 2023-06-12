// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив)
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
console.log("-------1-------");
let competitorPizzas = [
  "Pepperoni",
  "Caprichosa",
  "Diablo",
  "4 cheeses",
  "hawai",
];
let myPizzas1 = ["Pepperoni", "Caprichosa", "Diablo", "4 cheeses", "hawai"];
let myPizzas2 = ["BBQ chicken", "Veggie", "Diablo", "4 seasons", "Pepperoni"];

function findingTheDifferentPizzas(myPizzas) {
  if (competitorPizzas.every((v) => myPizzas.includes(v))) {
    return null;
  } else {
    return myPizzas.filter((pizza) => !competitorPizzas.includes(pizza));
  }
}
console.log(findingTheDifferentPizzas(myPizzas1));
console.log(findingTheDifferentPizzas(myPizzas2));

//2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль
//слово с наибольшим количеством букв.
//Если таких слов несколько - выводит их все.
console.log("-------2-------");

function findTheLongestWord(string) {
  let strArr = string.split(" ");
  let maxLength = Math.max.apply(
    null,
    strArr.map(function (word) {
      return word.length;
    })
  );
  let maxWordArr = strArr.filter(function (word) {
    return word.length == maxLength;
  });
  return maxWordArr;
}
console.log(
  findTheLongestWord(
    "hello, I have a question about the blessing of the elements that is part of the first book of the Book of Mormon"
  )
);
console.log(
  findTheLongestWord(
    "The next morning they were walking through the streets of New York when she told him"
  )
);
console.log(
  findTheLongestWord(
    "Новая парадигма реальности : чистый разум не скован границами"
  )
);
console.log(
  findTheLongestWord(
    "Победители турнира будут награждены медалями и ценными призами"
  )
);

//3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.
console.log("-------3-------");
function leaveUnique(array) {
  let uniqueResult = [];
  for (let number of array) {
    if (!uniqueResult.includes(number)) {
      uniqueResult.push(number);
    }
  }
  return uniqueResult;
}

function leaveUnique2(array) {
  return new Set(array);
}

console.log(leaveUnique2([1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1]));
console.log(leaveUnique([125, 254, 254, 125, 367, 125, 120, 254]));
console.log(leaveUnique([1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1]));

//4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
console.log("-------4-------");
function checkIsPalindrome(string) {
  let lowerCaseString = string.toLowerCase();
  let arrayValues = lowerCaseString.split("");
  let reverseArrayValues = arrayValues.reverse();
  let reverseString = reverseArrayValues.join("");

  if (lowerCaseString === reverseString) {
    console.log(string + " is a palindrome");
  } else {
    console.log(string + " is not a palindrome");
  }
}

checkIsPalindrome("Rotator");
checkIsPalindrome("Cobol");
checkIsPalindrome("Detartrated");

// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры.
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9.
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
console.log("-------5-------");

function summUpToSingleDigit(num) {
  if (!num) return "Empty value";
  if (typeof num != "number") return "Not a number";
  if (num < 10) {
    return num;
  }
  return summUpToSingleDigit(
    num
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b))
  );
}
console.log(summUpToSingleDigit(9999));
console.log(summUpToSingleDigit(19));
console.log(summUpToSingleDigit(0203));
console.log(summUpToSingleDigit());
console.log(summUpToSingleDigit("Hello"));

// 6. Написать функцию, принимающую на вход неограниченное количество аргументов. Вернуть сумму всех цифр, попавших на вход функции. function getSumm(1,2,'as', 'aaa4', 0.1, -5) => 2.1

function getSumOnlyNumbers(...args) {
  let sum = 0;

  args.forEach((arg) => {
    if (typeof arg === "number" && !isNaN(arg)) {
      sum += arg;
    } else if (typeof arg === "string") {
      [...arg].forEach((char) => {
        if (!isNaN(char)) {
          sum += Number(char);
        }
      });
    }
  });

  return sum.toFixed(1);
}

console.log(getSumOnlyNumbers(1, 2, "as", "aaa4", 0.1, -5));

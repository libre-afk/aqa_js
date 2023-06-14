// В домашках использовать методы массивов!

// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом,
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении.
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
let str = "I am the best AQA ever!";
let str1 = "abc , aa : bcd ; eta?";
let str2 = "";
let str3 = [2, 3];
function convertLetterToItsEntry(string) {
  if (!string || typeof string !== "string") return false;
  let strArray = string
    .replaceAll(" ", "")
    .toLowerCase()
    .replaceAll(/[^\w\s]|_/g, "")
    .split("");
  let uniqueLetters = new Set(strArray);
  let result = string.toLowerCase();

  uniqueLetters.forEach((symbol) => {
    let symbolCount = strArray.reduce((counter, current) => {
      if (current === symbol) {
        counter++;
      }
      return counter;
    }, 0);
    result = result.replaceAll(symbol, symbolCount);
  });

  return result;
}
console.log(convertLetterToItsEntry(str));
console.log(convertLetterToItsEntry(str1));
console.log(convertLetterToItsEntry(str2));
console.log(convertLetterToItsEntry(str3));

// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

const prices = [
  64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421,
  9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123,
];

const summPrices = (prices) =>
  prices.reduce((counter, element) => counter + element, 0);
let sum = summPrices(prices);
let amountOfPrices = prices.length;
let averagePrice = sum / amountOfPrices;
console.log("Total: $" + sum, "\nAverage Price: $" + averagePrice);

// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию:
//   количество гласных букв.
//   Массив должен быть отфильтрован по возврастанию количества гласных букв в слове

let str5 = ["Just", "another", "sentenceoooo", "a"];
let str6 = ["eeebno", "odfiu", "ugi", "a"];
let str7 = "hello";
let str8 = [];
function sortByVowels(arr) {
  if (!arr || !Array.isArray(arr) || arr.length == 0) return false;
  else return arr.sort((a, b) => countVowels(a) - countVowels(b));
}
function countVowels(word) {
  return [...word].reduce((counter, letter) => {
    let vowels = "aeiou";

    if (vowels.includes(letter.toLowerCase())) {
      counter++;
    }
    return counter;
  }, 0);
}

console.log(sortByVowels(str5));
console.log(sortByVowels(str6));
console.log(sortByVowels(str7));
console.log(sortByVowels(str8));

// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара.
//   Пример:
//   const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

const arr1 = [[["("]], ")", "(", ")", ")", ["(", ["("], [")"]], ")"];
const arr2 = [[["("]], ")", "(", ")", ")", ["(", ["("], [")"]]];

function isPaired(arr) {
  if (!arr || !Array.isArray(arr)) return;
  let flatArr = arr.flat(Infinity);
  return (
    flatArr.reduce((counter, parenthesis) => {
      if (parenthesis === "(") {
        counter++;
      } else counter--;
      return counter;
    }, 0) === 0
  );
}

console.log(isPaired(arr1));
console.log(isPaired(arr2));

// 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число)
//   и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты.
//   Решите эту задачу, используя эффективные методы массива
let arr3 = [1, 10, 9, 8, 7, 6, 4, 2, 12, 11, 5];
let arr4 = [1, 10, 9, 8, 7, 6, 4, 2, 13, 11, 5, 3, 14, 15, 18, 17];
let arr5 = [];
let arr6 = 25;

function findMissingNumber(arr) {
  if (!arr || !Array.isArray(arr) || arr.length == 0) return false;
  return (arr =
    [...new Set(arr)]
      .sort((a, b) => a - b)
      .filter((number, index) => number != index + 1)
      .shift() - 1);
}
console.log(findMissingNumber(arr3));
console.log(findMissingNumber(arr4));
console.log(findMissingNumber(arr5));
console.log(findMissingNumber(arr6));

// 6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты.
//   Вернуть массив с сугубо уникальными карточками. Реализовать методом SET.
//   Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.


const fs = require("fs");

fs.readFile(
  "D:\\HW\\QA_HW-main\\QA_HW-main\\aqa_js\\aqa_js\\HW5\\cards.json",
  "utf8",
  (err, data) => {
    if (err) {
      console.error("Error:", err);
      return;
    }

    const jsonData = JSON.parse(data);
    console.log(removeDuplicates(jsonData));
  }
);
function removeDuplicates(arr) {
  return Array.from(new Set(arr.map((obj) => JSON.stringify(obj)))).map((str) =>
    JSON.parse(str)
  );
}

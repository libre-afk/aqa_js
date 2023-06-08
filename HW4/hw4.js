// 1. Написать скрипт, переводящий количество байт в нужные единицы
// function convertToKb(bytes) {
//   return bytes + ' bytes = ' +  (bytes / 1024).toFixed(1) + " Kb";
// }
// function convertToMb(bytes) {
 
//   return bytes + ' bytes = ' +  (bytes /1024/1024).toFixed(1) + " Mb";
// }
// function convertToGb(bytes) {
//   return bytes + ' bytes = ' +  (bytes /1024/1024/1024).toFixed(1) + " Gb";
// }
// function convertToTb(bytes) {
//   return bytes + ' bytes = ' + (bytes /1024/1024/1024/1024).toFixed(1) + " Tb";
// }
// convertToKb(14525632);
// console.log(convertToKb(1000));
// console.log(convertToMb(1000000000));
// console.log(convertToGb(1000000000000));
// console.log(convertToTb(100000000000000));


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//   Пример в консоли:
//   :)
//   :):)
//   :):):)
//   :):):):)
//   :):):):):)

//   Сделать из "*" равнобедренный треугольник и ромб

// let smile = "(:";
// let level = 5;
// let empty = "  ";
// let countEmptyString = level - 1;
// let smileStr1 = "";
// for (i = 0; i < level; i++) {
//   console.log((smileStr1 += smile));
// }
// console.log();

// let calcEmptyStr = (num) => {
//   return empty.repeat(countEmptyString - num);
// };

// let calcSmileStr = (num) => {
//   return smile.repeat(1 + 2 * num);
// };

// for (j = 0; j < level; j++) {
//   console.log(calcEmptyStr(j) + calcSmileStr(j));
// }
// console.log();
// for (j = 0; j < level; j++) {
//   console.log(calcEmptyStr(j) + calcSmileStr(j));
// }
// for (j = level - 2; j >= 0; j--) {
//   console.log(calcEmptyStr(j) + calcSmileStr(j));
// }

// 3.  Вам нужно вывести в консоль числа от 1 до 100. (деление на 3 и 5)

// for (i=1; i <=100; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log('Число ' + i + ' делится без остатка на 3 и на 5')}
//     else if  (i % 5 == 0){
//     console.log('Число ' + i + ' делится без остатка на 5')}
//     else if  (i % 3 == 0){
//     console.log('Число ' + i + ' делится без остатка на 3')}
//     else{
//     console.log(i)}
// }
// console.log(i)

// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре,
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

// let input = "You are super engineer";
// let toCamelCase = (input) => {
//   let inputs = input.split(" ");
//   let modified = inputs.map((word) => word[0].toUpperCase() + word.slice(1));
//   let firstWord = modified[0].toLowerCase()
//   modified[0] = firstWord;
//   return modified.join("");
// };
// console.log(toCamelCase(input));


// 5*. Создать программу, которая будет принимать на вход СЛОВО (одно), и возвращать количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

// function getWordStructure(word) {
//   let word1 = word.replace(/[^a-zа-яё]/gi, '')
//   let vowelsEN = ['a', 'e', 'i', 'o', 'u', 'y'];
//   let vowelsRU = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
//   let isRU = /[а-яё]/i.test(word);
//   let numOfVowels = 0;
//   let numOfСonsonants = 0;
//   if (isRU) {
//       word1.toLowerCase().split("").forEach(v => vowelsRU.includes(v) ? numOfVowels++ : numOfСonsonants++)
//   }
//   if (!isRU) {
//       word1.toLowerCase().split("").forEach(v => vowelsEN.includes(v) ? numOfVowels++ : numOfСonsonants++)
//   }
//   console.log(`Word ${word} contains ${numOfVowels} vowels and ${numOfСonsonants} consonants`);
// }

// getWordStructure('Floccinaucinihilipilification');
// getWordStructure('Электрофорез');
// getWordStructure(prompt('Enter something:', ""));

// 6**. Написать программу, которая видоизменяет принимаемое слово шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.

function caesarCipher (string, offset) {
  
  if (offset < 0) {
    return caesarCipher(string, offset + 26);
  };
console.log('Word: ' + string);
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let subString = string[i];
    if (subString.match(/[a-z]/i)) {
      let charCode = string.charCodeAt(i);
      subString = (charCode >= 65 && charCode <= 90)
      ? String.fromCharCode(((charCode - 65 + offset) % 26) + 65)
      : String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
    };

    result += subString;
  };
  return result;
};

console.log('Result: ' + caesarCipher('Yllyx', 1))
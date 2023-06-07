// Task 1. Работа с переменными:

let item_1 = 5;
console.log(item_1);

let item_2 = 3;
console.log(item_2);

let item_3 = item_1 + item_2;
console.log(item_3);

let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);

let item_5 = item_3;
let item_6 = 15;
let item_6_type = typeof item_6;
console.log(`item_6 == ${item_6}, item_6_type == ${item_6_type}`);
let item_7 = String(item_6);
let item_7_type = typeof item_7;
console.log(`item_7 == ${item_7}, item_7_type == ${item_7_type}`);

// Task2*. Решить квадратные уравнения. Переменные называть по правилам.
// Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
// 1.  x2 - 6x + 9 = 0. - один корень
// 2.  x2 - 4x - 5 = 0. - два корня

let formula1 = "x2 - 6x + 9 = 0";
let a1 = 1;
let b1 = 6;
let c1 = 9;

let formula2 = "x2 - 4x - 5 = 0";
let a2 = 1;
let b2 = 4;
let c2 = -5;
let descr = (a, b, c) => {
  return Math.pow(b, 2) - 4 * a * c;
};

let calc = (a, b, c) => {
  let x1 = ((-b + Math.sqrt(descr(a, b, c))) / 2) * a;
  var x2 = ((-b - Math.sqrt(descr(a, b, c))) / 2) * a;
  if (x1 === x2) {
    return x1;
  }
  return x1 + " и " + x2;
};

console.log("Ответ к уравнению 1: " + calc(a1, b1, c1));
console.log("Ответ к уравнению 2: " + calc(a2, b2, c2));

// Task3**. Напишите программу, которая принимает целое положительное число n, 1 <= n <= 9, и выводит сумму равную
// n + nn + nnn, где n не перемножаются, а конкатенируются
function calcSumConcat(num) {
  if (num >= 1 && num <= 9) {
    temp = String(num);
    let nn = temp + temp;
    let nnn = temp + temp + temp;
    let result = num + Number(nn) + Number(nnn);
    console.log("Результат равен:", result);
  } else console.log(num + " is out of range");
}
calcSumConcat(10);
calcSumConcat(-1);
calcSumConcat(8);

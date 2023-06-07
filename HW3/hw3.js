// Task 1. Работа с оператором IF:
//   1. Создать переменную “age” и присвоить ей значение 10
//   2. Создать переменную “age_2” и присвоить ей значение 18
//   3. Создать переменную “age_3” и присвоить ей значение 60
//   4. Создать if в котором будите проверять значение переменной age_1
//     Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then ”
//     Если “age” >=  age_2 и “age” <  age_3, вывести в консоль “Welcome  !”
//     Если “age”  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//     Иначе выводите “Technical work”.

// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;

// if (age_1 < age_2) {
//     console.log(`You don't have an access cause your age is ${age_1}. It's less than necessary\n` );
// }
// else if (age_1 >= age_2 && age_1 < age_3) {
//     console.log("\n Welcome!");
// }
// else if (age_1  >= age_3) {
//     console.log(`Keep calm and watch channel Culture!\n`)
// }
// else {
//     console.log(`Technical maintenance\n`)
// }

// Task 2*. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

// const checkAge = function(...ages) {
//     for(index in ages){ 
//     if (isNaN(parseInt(ages[index]))){
//         console.log(`${ages[index]} is not a number\n`);
//         continue;
//     }
       
//       let age_1 = ages[index];
//       let age_2 = 18;
//       let age_3 = 60;
//     if (age_1 < age_2) {
//         console.log(`You don't have an access cause your age is ${age_1}. It's less than necessary\n`);
//     }
//     else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log(`You're ${age_1}, you're welcome!\n`);
//     }
//     else if (age_1  >= age_3) {
//         console.log(`You're ${age_1}, so keep calm and watch channel Culture!\n`)
//     }
//     else {
//         console.log(`Technical maintenance\n`)
//     }
// }
// }
    
//     checkAge(17,18,61,'aaa','22');

//     Task 3*. Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
//   преобразовываясь в number
// const checkAge = function(...ages) {
//     for(index in ages){ 
//     if (isNaN(parseInt(ages[index]))){
//         console.log(`${ages[index]} is not a number\n`);
//         continue;
//     }
       
//       let age_1 = ages[index];
//       let age_2 = 18;
//       let age_3 = 60;
//     if (age_1 < age_2) {
//         console.log(`You don't have an access cause your age is ${age_1}. It's less than necessary\n`);
//     }
//     else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log(`You're ${age_1}, you're welcome!\n`);
//     }
//     else if (age_1  >= age_3) {
//         console.log(`You're ${age_1}, so keep calm and watch channel Culture!\n`)
//     }
//     else {
//         console.log(`Technical maintenance\n`)
//     }
// }
// }
    
//     checkAge(17,'18',61,'Z','22');

  //  Task 4*. Преобразовать Task 3* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert

  console.log('Check 3.4.html file')

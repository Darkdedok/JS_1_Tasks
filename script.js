// 1- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
/*
let word_1 = 'hello';
let word_2 = 'owu';
let word_3 = 'com';
let word_4 = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
let number5 = 3.14;
let number6 = 2.7;
let number7 = 16;
let man = true;
let woman = false;
console.log(word_1 + word_2 + word_3 + word_4 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + man + woman);
alert(word_1 + word_2 + word_3 + word_4 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + man + woman);
document.write(word_1 + word_2 + word_3 + word_4 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + man + woman + ' ');
*/

//2- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
/*
word_1 = 'op';
word_2 = 'hey';
word_3 = 'lela';
word_4 = 'ley';
number1 = 3;
number2 = 6;
number3 = 9;
number4 = 12;
number5 = 15;
number6 = 62.32;
number7 = 43;
man = 'me';
woman = 'not_me';
console.log(word_1 + word_2 + word_3 + word_4 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + man + woman);
alert(word_1 + word_2 + word_3 + word_4 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + man + woman);
document.write(word_1 + word_2 + word_3 + word_4 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + man + woman + ' ');
*/

//3- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
/*
const str_1 = 'string';
const str_2 = 'strong';
const str_3 = 'strung';
const numb_1 = 123;
const numb_2 = 231;
const numb_3 = 321
console.log(str_1 + str_2 + str_3 + numb_1 + numb_2 + numb_3);
alert(str_1 + str_2 + str_3 + numb_1 + numb_2 + numb_3);
document.write(str_1 + str_2 + str_3 + numb_1 + numb_2 + numb_3 + ' ');
*/

//4- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
/*
let firstName = prompt('Enter your First name: ');
let lastName = prompt('Enter your Last name: ');
let middleName = prompt('Enter your Middle name: ');

console.log(firstName + ' ' + lastName + ' ' + middleName);
alert(firstName + ' ' + lastName + ' ' + middleName);
document.write(firstName + ' ' + lastName + ' ' + middleName)
*/

//5- Взять переменные из задания 4 и сконкатенировать их в одной переменной person
/*
let person = (firstName + ' ' + lastName + ' ' + middleName);
*/

//6- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// DONE :)

//7- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
/*
let firstNum = +prompt('Enter first number: ');
let secondNum = +prompt('Enter second number: ');
let thirdNum = +prompt('Enter third number: ');
console.log(firstNum, secondNum, thirdNum);
*/

//8- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*
let firstNum = prompt('Enter first number: ');
firstNum = parseInt(firstNum);
let secondNum = prompt('Enter second number: ');
secondNum = parseInt(secondNum);
let thirdNum = prompt('Enter third number: ');
thirdNum = parseInt(thirdNum);
let fourthNum = prompt('Enter fourth number: ');
fourthNum = parseInt(fourthNum);

let result = firstNum + secondNum + thirdNum + fourthNum;
console.log(result);
*/

//9- при помощи prompt()  получить 3 числа с плавающей точкой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*
let firstNum = prompt('Enter first number: ');
firstNum = parseFloat(firstNum);
let secondNum = prompt('Enter second number: ');
secondNum = parseFloat(secondNum);
let thirdNum = prompt('Enter third number: ');
thirdNum = parseFloat(thirdNum);

let result = firstNum + secondNum + thirdNum;
console.log(result);
*/

//10- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
/*
let firstNum = prompt('Enter first number: ');
firstNum = Math.round(parseFloat(firstNum));
let secondNum = prompt('Enter second number: ');
secondNum = Math.round(parseFloat(secondNum));
let thirdNum = prompt('Enter third number: ');
thirdNum = Math.round(parseFloat(thirdNum));
let result = firstNum + secondNum + thirdNum;
console.log(result);*/

//11- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
/*
let firstNum = prompt('Enter first number: ');
firstNum = Math.round(parseFloat(firstNum));
let secondNum = prompt('Enter second number: ');
secondNum = Math.round(parseFloat(secondNum));
let result = Math.pow(firstNum, secondNum);
console.log(result);*/

//12-- При помощи оператора определения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
/*
let a = 100;
let b = '100';
let c = true;
let d = undefined
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
*/

//13- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//В одинаковых выражениях в задании не использовать два одинаковых оператора.
//    Каждое выражение вложить в свою переменную
/*
let a = 5 < 6 //-> true
let b = 5 > 6 //-> false
let c = 5 >= 6 //-> false
let d = 5 === 6 //-> false
let e = 10 === 10 //-> true
let q = 10 >= 10 //-> true
let w = 10 > 10 //-> false
let r = 10 < 10 //-> false
let t = 10 !== 10 //-> false
let z = 123 === '123' //-> false
let x = 123 !== '123' //-> true
*/
/*
Дополнительно:
- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль

console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 ); //true
console.log(99 > 100 && 45 > 12 ); //false
console.log(132 > 100 || 45 < 12 ); //true
console.log(111 > 11 || 45 < 111 ); //true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
console.log(!!'-1'); // true
console.log(!!-1); // true
console.log(!!'0'); // true
console.log(!!'null'); // true
console.log(!!'undefined'); // true
console.log(!!(3/'owu')); // false
console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // true*/

//CLASS
//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
/*
let str = 'Привет';
let num = 123;
let flag = true;
let txt ='true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
*/

//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
/*
let a1 = 5 + 3; console.log(a1);
let a2 = 5 - 3; console.log(a2);
let a3 = 5 * 3; console.log(a3);
let a4 = 5 / 3; console.log(a4);
let a5 = 5 % 3; console.log(a5);
*/

//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
/*
let a6 = 5 % 3; console.log(a6);
let a7 = 3 % 5; console.log(a7);
let a8 = 5 + '3'; console.log(a8);
let a9 =  '5' - 3; console.log(a9);
let a10 = 75 + 'кг'; console.log(a10);
*/

//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
/*
let height = 23;
let width = 10;
let s = width*height;
console.log(s);
*/

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
/*
let heightC = 10;
let dC = 4;
let v = heightC*dC;
console.log(v);
*/

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
/*
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, n) + Math.pow(m, m));
console.log(k);
*/

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
/*
let str = "Hello world";
document.write(str);
alert(str);
console.log(str);
*/

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
/*
alert('Tyrkus Yurii Petrovych \n24 years old \nGames, music' )
*/

//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
/*
let str1 = 'Кто';
let str2 = 'ты';
let str3 = 'такой?';
let concatenation = str1+' '+str2+' '+str3;
document.write(concatenation);
*/

//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); -> 205
//      document.write(str - a + "<br/>"); -> 15
//      document.write(str * "2" + "<br/>"); -> 40
//      document.write(str / 2 + "<br/>"); -> 10

//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
/*
parseInt("3.14") -> 3
parseInt("-7.875") -> -7
parseInt("435") -> 435
parseInt("Вася") -> NaN
*/

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
/*let str = prompt("Enter something", "ho-ho");
console.log(str);
*/

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
/*let num_1 = +prompt('Enter first number', '0');
let num_2 = +prompt('Enter second number', '0');
alert(num_1+num_2);*/

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
/*
let name = prompt('Enter your name: ', 'Иван');
let surName = prompt('Enter your surname: ', 'Иванов');
let old = prompt('Enter how old are you: ', '18');
alert(`Доброго вечера ${name} ${surName}, мои поздравления что вам ${old}`);
*/

//ДОП

//1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
/*
let a = +prompt();
let b = +prompt();
let c = +prompt();
if (a >= b && b >= c && a >= c) {
    alert(`${c} -> ${b} -> ${a}`)
} else if (a <= b && b >= c && a >= c) {
    alert(`${c} -> ${a} -> ${b}`)
} else if (a <= b && a <= c && b <= c) {
    alert(`${a} -> ${b} -> ${c}`)
} else if (a <= b && a <= c && b >= c) {
    alert(`${a} -> ${c} -> ${b}`)
} else if (a >= b && a >= c && b <= c) {
    alert(`${b} -> ${c} -> ${a}`)
} else {
    alert(`${b} -> ${a} -> ${c}`)
}
*/

//2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

/*
let ask = prompt('Enter colour:', 'red, green, yellow');
if (ask === 'red') {
    alert('stop')
} else if (ask === 'green') {
    alert('go')
} else if (ask === 'yellow') {
    alert('wait')
} else {
    alert('Do, what do you want')
}
*/

//3.Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

/*
let ask = prompt('Enter colour:', 'red, green, yellow');
let isRoadClear = confirm('Road is clear?');
if (ask === 'red' && isRoadClear === true) {
    alert('stop anyway')
} else if (ask === 'red' && isRoadClear === false) {
    alert('stop and wait')
} else if (ask === 'yellow' && isRoadClear === true) {
    alert('wait anyway')
} else if (ask === 'yellow' && isRoadClear === false) {
    alert('wait')
} else if (ask === 'green' && isRoadClear === true) {
    alert('go')
} else if (ask === 'green' && isRoadClear === false) {
    alert('wait until the violators pass')
} else {
    alert('Do, what do you want')
}
*/

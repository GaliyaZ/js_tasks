/* 1
Треугольник. Напишите цикл,  выводит такой треугольник
#
##
###

let sharp = '#';
let sharpString = sharp;
let triangleHeight// = prompt('Task 1. Enter triangle height:', 0);

for (let i = 0; i < triangleHeight; i++){
  console.log(sharpString);
  //console.log('\n');
  sharpString += sharp; 
}*/

/* 2
FizzBuzz. 
1. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
2. Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5. 


function num1 () {
  for(i = 1; i < 101; i++) {
    if (i%3 == 0) {
      console.log('Fizz');
      continue;
    } else if (i%5 == 0 && i%3 != 0) {
      console.log('Buzz');
      continue;
    } else console.log(i);
  }
}
//num1();

function num2 () {
  for(i = 1; i < 101; i++) {
    if (i%5 == 0 && i%3 == 0) {
      console.log('FizzBuzz');
      continue;
    } else console.log(i);
  }
}
//num2();*/

/* 3
Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

let myString = '# # # # ';
let chess = () => {
  return myString+'\n'+myString.split('').reverse().join('');
}
for(i = 0; i < 4; i++) {
  console.log(chess());
}*/

/* 4
Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

let a = prompt('Enter a:', 0);
let b = prompt('Enter b:', 0);
let min = (a, b) => {
  return Math.min(a, b);
}
console.log(min(a, b));
*/
/* 5
Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?

let N = prompt("Enter number:", 0);
function isEven (n) {
  if (n == 1 || n==-1) return false;
    else if (n == 0) return true;
    else return (n < 0) ? isEven(-n-2) : isEven(n-2);
}
console.log(isEven(N));*/
 /* 6
 Считаем бобы. Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.*/

/*let str = prompt('Enter string:', '');
let countBs = (str) => {
  return str.length;
}
console.log(typeof(str));
console.log(countBs(str));*/

const cub = document.querySelector('div');
console.log(cub);

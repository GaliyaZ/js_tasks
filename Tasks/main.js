/*
Треугольник. Напишите цикл,  выводит такой треугольник
#
##
###
*/
let sharp = '#';
let sharpString = sharp;
let triangleHeight// = prompt('Task 1. Enter triangle height:', 0);

for (let i = 0; i < triangleHeight; i++){
  console.log(sharpString);
  //console.log('\n');
  sharpString += sharp; 
}

/*
FizzBuzz. 
1. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
2. Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5. 
*/

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
//num2();

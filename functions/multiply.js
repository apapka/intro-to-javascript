function multiply(){ 
  let rlSync = require('readline-sync');
  let number1 = rlSync.question('Enter the first number: ');
  let number2 = rlSync.question('Enter the second number: ');
  console.log(`${number1} * ${number2} = ` + number1*number2);
}

// let multiply = function(){
//   let rlSync = require('readline-sync');
//   let number1 = rlSync.question('Enter the first number: ');
//   let number2 = rlSync.question('Enter the second number: ');
//console.log(`${number1} * ${number2} = ` + number1*number2)
// }
// let multiply = ()=>{
//   let rlSync = require('readline-sync');
//   let number1 = rlSync.question('Enter the first number: ');
//   let number2 = rlSync.question('Enter the second number: ');
//   console.log(`${number1} * ${number2} = ` + number1*number2)
multiply();

function multiply(number1, number2){
  return number1*number2;
}
function getNumber(prompt){
  let rlSync = require('readline-sync');
  let number = parseFloat(rlSync.question(prompt));
  return number
  ;
}l
let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
//let rlSync = require('readline-sync');
// let firstName = rlSync.question('What is your first name? ');
// let lastName = rlSync.question('What is your last name? ');
// console.log(`Hello, ${firstName} ${lastName}!`);

function getNames(prompt){
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
}
let firstName= getNames('What is your first name?');
let lastName = getNames('What is your last name?');
console.log(`Hello, ${firstName} ${lastName}!`);

//Sum

function sum(num1,num2){
  return num1+num2;
}
let sum2 = function(num1,num2){
  return num1+num2;
}
let sum3= (num1,num2) => num1+num2;

//Log Quote
function brendanEichQuote(){
  console.log('Always bet on JavaScript');
}

//Cite the Author
function cite(author,quote){
  console.log(`${author} said: "${quote}."`)
}

//Squared Number
const squaredNumber = (number) => number*number;

//Three-way comparison
function compareByLength(text1,text2){
  if(text1.length>text2.length){
    return 1;
  }else if (text2.length>text1.length){
    return -1;
  }else{
    return 0;
  }
}









//Calculate BMI
function calculateBMI(height,weight){
  let heightInMeters = height / 100;
  let bmi = weight / heightInMeters**2;
  return bmi.toFixed(2);
}

//Calculate Cat Age
function catAge(age){
  if (age === 0){
    return 0;
  }else if(age === 1){
    return 15;
  }else if (age === 2){
    return 9 + catAge(age - 1);
  }
  return catAge(age - 1) + 4;
}
// console.log(catAge(0));
// console.log(catAge(1));
// console.log(catAge(2));
// console.log(catAge(3));
// console.log(catAge(4));

//Remove Last Char
function removeLastChar(text){
  return substring(text,0,text.length-1);
}

//Arrow functions part 1
let sentence = (verb,noun) =>{
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}
//console.log(sentence('like','birds'));

//Arrow functions part 2
let initGame =  () =>{
  return {
    level: 1,
    score: 0
  };
}
let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
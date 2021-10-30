// let myArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];

// let newArray=[];
// for (let i=0; i<myArray.length; i++){
//   myArray[i] %2 === 0 ? newArray.push(myArray[i]) : console.log('is odd');
// }
// console.log(newArray)

// myArray.forEach(function(value){
//   if(value % 2 === 0){
//     console.log(value);
//   }
// // })
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
// for(let a=0; a<myArray.length; a++){
//   for (let b=0; b<myArray[a].length; b++){
//     myArray[a][b] % 2 === 0 ? console.log(myArray[a][b]) : console.log('is odd');
//   }
// }

// myArray.forEach(function(nestedArray){
//   nestedArray.forEach(function(number2){
//     number2 % 2 === 0 ? console.log(number2): console.log();
//   })
// })

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// let newArray=[];
// for(let i=0; i<myArray.length; i++){
//   if (myArray[i] % 2 === 0){
//     newArray.push('Even');
//   }else{
//     newArray.push('Odd');
//   }
// }
// let newArray = myArray.map(number => {
//   if (number % 2 ===0){
//     return 'even';
//   }else{
//     return 'odd';
//   }
// });
// console.log(newArray);

// function findIntegers(array)  {
//   return array.filter(number =>Number.isInteger(number));
// };

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// // console.log(integers); // => [1, 3, -4]
 
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(array){
//   let lengths = array.map((text) => text.length);
//   return lengths.filter((number) => number % 2 !== 0);
// }
// console.log(oddLengths(arr)); // => [1, 5, 3]

//use reduce to compute the sum of the squares of all numbers in an array.
function sumOfSquares(){

}
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
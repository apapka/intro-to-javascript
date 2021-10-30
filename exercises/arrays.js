function first(array){
  return array[0];
}
function last(array){
  return array[array.length-1];
}
//vocabulary 
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
vocabulary.forEach(function(array){
  array.forEach(function(number){
    console.log(number);
  });
});

vocabulary.forEach(array => {
  return array.forEach(word => {
    console.log(word);
  })
});

// Expected output:
// happy
// cheerful
// merry
// etc...

//travel
function contains(city, list){
  for (let eachCity in list){
    if (eachCity === city){
      return true;
    }
  }
  return false;
}

// //passcode
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// let value="";
// for(let i = 0; i<passcode.length; i++){
//   value+=passcode[i]+ '-'
// }
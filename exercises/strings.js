function repeat(number, text){
  for (let i=0; i<number;i++){
    console.log(text);
  }
}
repeat(3,'ha');

function isBlank(text){
  if (text.length ===0){
    return true;
  }
  return false;
}
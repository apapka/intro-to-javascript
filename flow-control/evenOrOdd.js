function evenOrOdd(number){
  if(Number.isInteger(number)){
    if(number%2===0){
      console.log("is even");
    }else{
      console.log("is odd");
    }
  }else{
    console.log("Please enter a valid integer");
    return;
  }
 
}
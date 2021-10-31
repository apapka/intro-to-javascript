let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age=4;
fido.favoriteFood='pasta';

//console.log(fido.favoriteFood);

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name){
    console.log(`Hej, ${name}`);
  }
  // add code here
};

// jane.greet('Bobby'); // Hej, Bobby!

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
let keys = Object.keys(vehicle);
// for (let prop in vehicle){
//   keys.push(vehicle[prop]);
// }
// console.log(keys);

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let newObject = {};
for (let i =0; i<nestedArray.length; i++){
  let key = nestedArray[i][0];
  let value = nestedArray[i][1];
  newObject[key]=value;
}
console.log(newObject);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
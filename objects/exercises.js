// let myArray = {0:'zero',1:'one', length:3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let keys = Object.keys(obj);
// let upperKeys = keys.map((key)=>key.toUpperCase());
// console.log(upperKeys);
// console.log(obj)


// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };


// let myObj = Object.create(myProtoObj);
// myObj.qux = 3;

// function copyObj(object,keys){
//   let newObj = {};
//   if (!keys){
//     newObj = Object.assign(newObj,object);
//   }else{
//     keys.forEach(function(key){
//       console.log(key);
//       newObj[key] = object[key];
//     });
//   }
//   return newObj;
// }
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;
console.log(obj);
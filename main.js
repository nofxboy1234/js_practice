// let globalAge = 23; // This is a global variable
// // This is a function - and hey, a curly brace indicating a block
// function printAge(age) {
//   var varAge = 34; // This is a function scoped variable
//   // This is yet another curly brace, and thus a block
//   if (age > 0) {
//     // This is a block-scoped variable that exists
//     // within its nearest enclosing block, the if's block
//     const constAge = age * 2;
//     console.log(constAge);
//   }
//   // ERROR! We tried to access a block scoped variable
//   // not within its scope
//   // console.log(constAge);
// }
// printAge(globalAge);
// // ERROR! We tried to access a function scoped variable
// // outside the function it's defined in
// console.log(varAge);

// function makeAdding(firstNumber) {
//   // "first" is scoped within the makeAdding function
//   const first = firstNumber;
//   return function resulting(secondNumber) {
//     // "second" is scoped within the resulting function
//     const second = secondNumber;
//     return first + second;
//   };
// }
// // but we've not seen an example of a "function"
// // being returned, thus far - how do we use it?
// const add5 = makeAdding(5);
// console.log(add5(2)); // logs 7

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);

// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined

// function makeFunc() {
//   const name = 'Mozilla';
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// function makeSizer(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }
// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);

// const User = function (name) {
//   this.name = name;
//   this.discordName = '@' + name;
// };
// // hey, this is a constructor -
// // then this can be refactored into a factory!
// function createUser(name) {
//   const discordName = '@' + name;
//   console.log({ name, discordName });
//   return { name, discordName };
// }
// // and that's very similar, except since it's just a function,
// // we don't need a new keyword
// user1 = new User('Dylan');
// user2 = createUser('Dylan');

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a);
// console.log(b);
// const array = [1, 2, 3, 4, 5];
// const [zerothEle, firstEle] = array;
// console.log(zerothEle);
// console.log(firstEle);

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);
// [a, b,  ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

// array = [10, 20, 30, 40, 50];
// const [a, b] = array;
// const [a, ,b] = array;
// let aDefault = 12;
// const [a = aDefault, b] = array;
// const [a, b, ...[c, d]] = array;
// const [a, b, ...{ pop, push }] = array;

// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;

// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// let {
//   b: { c: d },
// } = obj; // d is re-assignable

function sum(sumObj) {
  console.log(sumObj);
  const { a, b } = sumObj;
  return a + b;
}
result = sum({ a: 1, b: 2 });
console.log(result);

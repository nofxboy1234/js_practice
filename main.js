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

// function sum(sumObj) {
//   console.log(sumObj);
//   const { a, b } = sumObj;
//   return a + b;
// }
// result = sum({ a: 1, b: 2 });
// console.log(result);

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// console.log(numbers);

// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined }; // b is 2
// const { c = 2 } = { c: null }; // c is null

// const { b = console.log("hey") } = { b: 2 };
// // Does not log anything, because `b` is defined and there's no need
// // to evaluate the default value.

// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(others);

// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];

// function f() {
//   return [1, 2, 3];
// }
// const [a, , b] = f();
// console.log(a);
// console.log(b);
// const [c] = f();

// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;
// // Two variables are bound: `a` and `d`

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`

// const [a, b, ...{ length }] = [1, 2, 3];
// const [x, y, ...{ length }] = [1, 2, 3, 4];

// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];

// const { a, ...b } = {a : 1, b: 2};
// const {
//   a,
//   b: { c: d },
// } = { a: 1, b: { c: 2 } };

// function parseProtocol(url) {
//   const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
//   if (!parsedURL) {
//     return false;
//   }
//   console.log(parsedURL);
//   const [, protocol, fullhost, fullpath] = parsedURL;
//   return protocol;
// }
// parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript');

// const [a, b] = new Map([
//   [1, 2],
//   [3, 4],
// ]);

// const obj = {
//   *[Symbol.iterator]() {
//     for (const v of [0, 1, 2, 3]) {
//       console.log(v);
//       yield v;
//     }
//   },
// };
// const [a, b] = obj;

// const obj = {
//   *[Symbol.iterator]() {
//     for (const v of [0, 1, 2, 3]) {
//       console.log(v);
//       yield v;
//     }
//   },
// };
// const [a, b, ...rest] = obj; // Logs 0 1 2 3
// console.log(rest); // [2, 3] (an array)

// const o = { p: 42, q: true };
// const { p: foo, q: bar } = o;

// const { a: aa = 10, b: bb = 5 } = { a: 3 };

// const user = {
//   id: 42,
//   displayName: 'jdoe',
//   fullName: {
//     firstName: 'Jane',
//     lastName: 'Doe',
//   },
// };
// function userId({ id }) {
//   return id;
// }
// const result = userId(user);
// function userDisplayName({ displayName: dname }) {
//   return dname;
// }
// const result2 = userDisplayName(user);
// function whois({ displayName, fullName: { firstName: name } }) {
//   return `${displayName} is ${name}`;
// }
// const result3 = whois(user);

// function drawChart({
//   size = 'big',
//   coords = { x: 0, y: 0 },
//   radius = 25,
// } = {}) {
//   console.log(size, coords, radius);
//   // do some chart drawing
// }
// drawChart({
//   coords: { x: 18, y: 30 },
//   radius: 30,
// });
// drawChart();

// const metadata = {
//   title: 'Scratchpad',
//   translations: [
//     {
//       locale: 'de',
//       localizationTags: [],
//       lastEdit: '2014-04-14T08:43:37',
//       url: '/de/docs/Tools/Scratchpad',
//       title: 'JavaScript-Umgebung',
//     },
//   ],
//   url: '/en-US/docs/Tools/Scratchpad',
// };
// const {
//   title: englishTitle, // rename
//   translations: [
//     {
//       title: localeTitle, // rename
//     },
//   ],
// } = metadata;

// const people = [
//   {
//     name: 'Mike Smith',
//     family: {
//       mother: 'Jane Smith',
//       father: 'Harry Smith',
//       sister: 'Samantha Smith',
//     },
//     age: 35,
//   },
//   {
//     name: 'Tom Jones',
//     family: {
//       mother: 'Norah Jones',
//       father: 'Richard Jones',
//       brother: 'Howard Jones',
//     },
//     age: 25,
//   },
// ];
// for (const {
//   name: n,
//   family: { father: f },
// } of people) {
//   console.log(`Name: ${n}, Father: ${f}`);
// }
// // "Name: Mike Smith, Father: Harry Smith"
// // "Name: Tom Jones, Father: Richard Jones"

// const key = "z";
// const { [key]: foo } = { z: "bar" };
// console.log(foo); // "bar"

// const foo = { "fizz-buzz": true };
// const { "fizz-buzz": fizzBuzz } = foo;

// const { a, toFixed } = 1;
// console.log(a, toFixed);

// const props = [
//   { id: 1, name: 'Fizz' },
//   { id: 2, name: 'Buzz' },
//   { id: 3, name: 'FizzBuzz' },
// ];
// const [, , { name }] = props;
// console.log(name);

// const obj = {
//   self: '123',
//   __proto__: {
//     prot: '456',
//   },
// };
// const { self, prot } = obj;
// console.log(self); // "123"
// console.log(prot); // "456"

// function createUser(name) {
//   const discordName = '@' + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }
// function createPlayer(name, level) {
//   const { discordName, getReputation } = createUser(name);

//   const increaseLevel = () => level++;
//   return { name, discordName, getReputation, increaseLevel };
// }
// function createPlayer2(name, level) {
//   const user = createUser(name);

//   const increaseLevel = () => level++;
//   return Object.assign({}, user, { increaseLevel });
// }
// const josh = createUser('josh');
// josh.giveReputation();
// josh.giveReputation();
// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation(),
// });
// const player = createPlayer('dylan', 19);
// // const player2 = createPlayer2('zoey', 999);

// const calculator = (function () {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
// })();
// const result1 = calculator.add(3, 5);
// const result2 = calculator.sub(6, 2);
// const result3 = calculator.mul(14, 5534);

// function isCool(name) {
//   let cool;
//   if (name === 'wes') {
//     const cool = true;
//   }
//   console.log(cool);
//   return cool;
// }
// isCool('Dylan');

// const dog = 'snickers';
// function logDog() {
//   console.log(dog);
// }
// function go() {
//   const dog = 'sunny';
//   logDog();
// }
// go();

// var proto = { protoprop: 'protoprop' };
// function C() {}
// C.prototype = proto;
// var obj = new C();
// let result = proto.isPrototypeOf(obj);

// var proto = { protoprop: 'protoprop' };
// var obj = Object.create(proto);
// let result = proto.isPrototypeOf(obj);

// function C() {
//   this.instance_member = 'whoops!';
// }
// var c = C();
// const result = instance_member;

// function C() {
//   if (!(this instanceof C)) {
//     return new C();
//   }
//   this.instance_member = 'This is ok.';
// }
// var c = C();
// // const result = instance_member;
// const result1 = c instanceof C;
// const result2 = c.constructor === C;

// // Constructor
// function C() {}
// // Create object.
// var c = new C();
// let isInstanceOfC = c instanceof C;
// let hasConstructorC = c.constructor === C;
// // Change prototype
// C.prototype = { prototype_prop: 'proto' };
// hasConstructorC = c.constructor === C;
// isInstanceOfC = c instanceof C; // instanceof no longer works!

// // Create two constructors with the
// // same prototype.
// var proto = { protoprop: 'protoprop' };
// function C() {
//   this.cprop = 'cprop';
// }
// C.prototype = proto;
// function F() {
//   this.fprop = 'fprop';
// }
// F.prototype = proto;
// var f = new F();
// let result1 = f.protoprop; // Has prototype properties
// let result2 = f.fprop; // Has F properties
// let result3 = f.cprop; // Doesn't have C properties
// let result4 = f instanceof C; // Is an instance of C!?!

// function C() {}
// C.prototype = { prototype_prop: 'proto' };
// // Changing the prototype breaks the constructor
// // property for all objects created after the change.
// c = new C();
// const isInstanceOfC = c instanceof C;
// const hasConstructorC = c.constructor === C;

function MyObject(data) {
  this.data = data;
}
MyObject.prototype = {
  getData: function () {
    return this.data;
  },
};
var constructorObject = new MyObject('data');

anotherObject = {
  getData: function () {
    return this.data;
  },
};
function myObject(data) {
  // const getData = () => {
  //   return data
  // }
  // return { data, getData }

  var obj = Object.create(anotherObject);
  obj.data = data;
  return obj;
}
var factoryObject = myObject('data');


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

// function MyObject(data) {
//   this.data = data;
// }
// MyObject.prototype = {
//   getData: function () {
//     return this.data;
//   },
// };
// var constructorObject = new MyObject('data');

// anotherObject = {
//   getData: function () {
//     return this.data;
//   },
// };
// function myObject(data) {
//   // const getData = () => {
//   //   return data
//   // }
//   // return { data, getData }

//   var obj = Object.create(anotherObject);
//   obj.data = data;
//   return obj;
// }
// var factoryObject = myObject('data');

// const Formatter = (function () {
//   console.log('Start');
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
// })();
// Formatter.log('Hello');

// const Formatter = (function () {
//   let timesRun = 0;

//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   const setTimesRun = () => {
//     log('Setting times run');
//     ++timesRun;
//   };

//   const makeUppercase = (text) => {
//     log('Making uppercase');
//     setTimesRun();
//     return text.toUpperCase();
//   };

//   return {
//     makeUppercase,
//     timesRun,
//   };
// })();

// const Formatter = (function () {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   const timesRun = [];

//   const makeUppercase = (text) => {
//     log('Making uppercase');
//     timesRun.push(null);
//     return text.toUpperCase();
//   };

//   return {
//     makeUppercase,
//     timesRun,
//   };
// })();

// const Formatter = (function () {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

//   const makeUppercase = (text) => {
//     log('Making uppercase');
//     return text.toUpperCase();
//   };

//   const writeToDOM = (selector, message) => {
//     document.querySelector(selector).innerHTML = message;
//   };

//   return {
//     makeUppercase,
//     writeToDOM,
//   };
// })();

// const Formatter = (function (doc) {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

//   const makeUppercase = (text) => {
//     log('Making uppercase');
//     return text.toUpperCase();
//   };

//   const writeToDOM = (selector, message) => {
//     if (!!doc && 'querySelector' in doc) {
//       doc.querySelector(selector).innerHTML = message;
//     }
//   };

//   return {
//     makeUppercase,
//     writeToDOM,
//   };
// })(document);

// const documentMock = (() => ({
//   querySelector: (selector) => ({
//     innerHTML: null,
//   }),
// }))();

// const Formatter = (function(doc) {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

//   const makeUppercase = (text) => {
//     log("Making uppercase");
//     return text.toUpperCase();
//   };

//   const writeToDOM = (selector, message) => {
//     doc.querySelector(selector).innerHTML = message;
//   }

//   return {
//     makeUppercase,
//     writeToDOM,
//   }
// })(document || documentMock);

// function funkyFunction(music, isWhiteBoy) {
//   if (isWhiteBoy) {
//     console.log('Play: ' + music);
//   }
// }
// funkyFunction('that funky music', true);

// // This example is still an anonymous function even though we used the `function` keyword, as it doesn't have a name.
// const funkyFunction1 = function (music, isWhiteBoy) {
//   if (isWhiteBoy) {
//     console.log('Play: ' + music);
//   }
// };

// // This is called an arrow function, we'll get into these soon.
// const funkyFunction2 = (music, isWhiteBoy) => {
//   if (isWhiteBoy) {
//     console.log('Play: ' + music);
//   }
// };

// ************************************
// function MyObject(data) {
//   this.data = data;
// }
// MyObject.prototype = {
//   getData: function () {
//     return this.data;
//   },
// };
// var constructorObject = new MyObject('data');

// class MyClass {
//   constructor(data) {
//     this.data = data;
//   }
//   getData() {
//     return this.data;
//   }
// }
// var constructorObject = new MyClass('data');

// anotherObject = {
//   getData: function () {
//     return this.data;
//   },
// };
// function myObject(data) {
//   // const getData = () => {
//   //   return data
//   // }
//   // return { data, getData }

//   var obj = Object.create(anotherObject);
//   obj.data = data;
//   return obj;
// }
// var factoryObject = myObject('data');
// ************************************

// let obj = {
//   get propName() {},
//   set propName(value) {},
// };

// 'use strict';
// let user = {
//   name: 'John',
//   surname: 'Smith',
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
// };

// let user = {
//   name: 'John',
//   surname: 'Smith',
// };
// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },
//   set(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
// });

// let user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short, need at least 4 characters");
//       return;
//     }
//     this._name = value;
//   }
// };
// user.name = "Pete";
// user.name = ""; // Name is too short...

// class MyClass {
//   // class methods
//   constructor() {}
//   method1() {}
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }
// let user = new User('John');

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// // class is a function
// console.log(typeof User); // function
// // ...or, more precisely, the constructor method
// console.log(User === User.prototype.constructor); // true
// // The methods are in User.prototype, e.g:
// console.log(User.prototype.sayHi); // the code of the sayHi method
// // there are exactly two methods in the prototype
// console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// rewriting class User in pure functions

// // 1. Create constructor function
// function User(name) {
//   this.name = name;
// }
// // a function prototype has "constructor" property by default,
// // so we don't need to create it
// // 2. Add the method to prototype
// User.prototype.sayHi = function () {
//   console.log(this.name);
// };
// // Usage:
// let user = new User('John');
// user.sayHi();

// class User {
//   constructor() {}
// }
// console.log(typeof User); // function
// User(); // Error: Class constructor User cannot be invoked without 'new'

// let User = class {
//   sayHi() {
//     console.log('Hello');
//   }
// };

// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass);
//   }
// };
// new User().sayHi();
// console.log(MyClass)

// function makeClass(phrase) {
//   // declare a class and return it
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }
// // Create a new class
// let User = makeClass("Hello");
// new User().sayHi(); // Hello

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log('Name is too short.');
//       return;
//     }
//     this._name = value;
//   }
// }
// let user = new User('John');
// console.log(user.name);
// user = new User('');

// class User {
//   ['say' + 'Hi']() {
//     console.log('Hello');
//   }
// }
// new User().sayHi();

// class User {
//   name = "John";

//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }
// new User().sayHi(); // Hello, John!

// class User {
//   name = "John";
// }
// let user = new User();
// console.log(user.name); // John
// console.log(User.prototype.name); // undefined

// class User {
//   name = prompt('Name, please?', 'John');
// }
// let user = new User();
// alert(user.name); // John

// class Button {
//   constructor(value) {
//     this.value = value;
//   }

//   click() {
//     console.log(this.value);
//   }
// }
// let button = new Button('hello');
// setTimeout(button.click, 1000); // undefined

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     console.log(this.value);
//   };
// }
// let button = new Button('hello');
// setTimeout(button.click, 1000); // hello

// class DateFormatter extends Date {
//   getFormattedDate() {
//     const months = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];
//     return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
//   }
// }
// console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// // Expected output: "19-Aug-1975"

// const calculatorMixin = (Base) =>
//   class extends Base {
//     calc() {}
//   };
// const randomizerMixin = (Base) =>
//   class extends Base {
//     randomize() {}
//   };
// class Foo {}
// class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
// const bar = new Bar();

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
//   stop() {
//     super.stop();
//     this.hide();
//   }
// }
// // let animal = new Animal('My animal');
// let rabbit = new Rabbit('White Rabbit', 10);
// console.log(rabbit.name);
// console.log(rabbit.earLength);
// rabbit.hide();

// class Animal {
//   name = 'animal';

//   constructor() {
//     // this.name = 'animal';
//     console.log(this.name); // (*)
//   }
// }
// class Rabbit extends Animal {
//   name = 'rabbit';
// }
// let animal = new Animal(); // animal
// let rabbit = new Rabbit(); // animal

// class Animal {
//   showName() {
//     // instead of this.name = 'animal'
//     console.log('animal');
//   }

//   constructor() {
//     this.showName(); // instead of console.log(this.name);
//   }
// }
// class Rabbit extends Animal {
//   showName() {
//     console.log('rabbit');
//   }
// }
// new Animal(); // animal
// new Rabbit(); // rabbit

// const hello = 'Hello';
// function printHello() {
//   console.log(hello);
// }
// printHello();
// console.log(dylan);

// const hello = 'Hello';
// const printHello = function () {
//   console.log(hello);
// }
// printHello();
// console.log(dylan);

// const hello = 'Hello';
// const printHello = () => {
//   let dylan = 'Dylan';
//   console.log(hello);
// };
// printHello();
// console.log(dylan);

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }

//   stop() {
//     // super.stop(); // call parent stop
//     // this.hide(); // and then hide

//     // setTimeout(() => super.stop(), 1000);
//     setTimeout(function () {
//       super.stop();
//     }, 1000);
//   }
// }
// let rabbit = new Rabbit('White Rabbit');
// rabbit.stop();

// let animal = {
//   name: 'Animal',
//   eat() {
//     console.log(`${this.name} eats.`);
//   },
// };
// let rabbit = {
//   __proto__: animal,
//   name: 'Rabbit',
//   eat() {
//     // that's how super.eat() could presumably work
//     this.__proto__.eat.call(this); // (*)
//   },
// };
// rabbit.eat(); // Rabbit eats.

// let animal = {
//   name: 'Animal',
//   eat() {
//     console.log(`${this.name} eats.`);
//   },
// };
// let rabbit = {
//   __proto__: animal,
//   name: 'rabbit',
//   eat() {
//     // ...bounce around rabbit-style and call parent (animal) method
//     this.__proto__.eat.call(this); // (*)
//   },
// };
// let longEar = {
//   __proto__: rabbit,
//   name: 'longEar',
//   eat() {
//     // ...do something with long ears and call parent (rabbit) method
//     this.__proto__.eat.call(this); // (**)
//   },
// };
// longEar.eat(); // Error: Maximum call stack size exceeded

// let animal = {
//   name: 'Animal',
//   eat() {
//     // animal.eat.[[HomeObject]] == animal
//     console.log(`${this.name} eats.`);
//   },
// };
// let rabbit = {
//   __proto__: animal,
//   name: 'Rabbit',
//   eat() {
//     // rabbit.eat.[[HomeObject]] == rabbit
//     super.eat();
//   },
// };
// let longEar = {
//   __proto__: rabbit,
//   name: 'Long Ear',
//   eat() {
//     // longEar.eat.[[HomeObject]] == longEar
//     super.eat();
//   },
// };
// // works correctly
// longEar.eat(); // Long Ear eats.

// let animal = {
//   sayHi() {
//     console.log(`I'm an animal`);
//   },
// };
// // rabbit inherits from animal
// let rabbit = {
//   __proto__: animal,
//   sayHi() {
//     super.sayHi();
//   },
// };
// let plant = {
//   sayHi() {
//     console.log("I'm a plant");
//   },
// };
// // tree inherits from plant
// let tree = {
//   __proto__: plant,
//   sayHi: rabbit.sayHi, // (*)
// };
// tree.sayHi(); // I'm an animal (?!?)

// let animal = {
//   eat: function () {
//     // intentionally writing like this instead of eat() {...
//     // ...
//   },
// };
// let rabbit = {
//   __proto__: animal,
//   eat: function () {
//     super.eat();
//   },
// };
// rabbit.eat(); // Error calling super (because there's no [[HomeObject]])

// let animal = {
//   eat() {
//     // intentionally writing like this instead of eat() {...
//     // ...
//     console.log("I'm an animal that is eating.");
//   },
// };
// let rabbit = {
//   __proto__: animal,
//   eat() {
//     super.eat();
//   },
// };
// rabbit.eat(); // Error calling super (because there's no [[HomeObject]])

// // mixin
// let sayHiMixin = {
//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   },
//   sayBye() {
//     console.log(`Bye ${this.name}`);
//   },
// };
// // usage:
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // copy the methods
// Object.assign(User.prototype, sayHiMixin);
// // now User can say hi
// const user = new User('Dude');
// user.sayHi();

// let sayMixin = {
//   say(phrase) {
//     console.log(phrase);
//   },
// };
// let sayHiMixin = {
//   __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)

//   sayHi() {
//     // call parent method
//     super.say(`Hello ${this.name}`); // (*)
//   },
//   sayBye() {
//     super.say(`Bye ${this.name}`); // (*)
//   },
// };
// let eatMixin = {
//   eat() {
//     console.log("I'm eating!");
//   },
// };
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // copy the methods
// Object.assign(User.prototype, sayHiMixin, eatMixin);
// // now User can say hi
// const user = new User('Dude'); // Hello Dude!
// user.sayHi();

// let eventMixin = {
//   /**
//    * Subscribe to event, usage:
//    *  menu.on('select', function(item) { ... }
//    */
//   on(eventName, handler) {
//     if (!this._eventHandlers) this._eventHandlers = {};
//     if (!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }
//     this._eventHandlers[eventName].push(handler);
//   },
//   /**
//    * Cancel the subscription, usage:
//    *  menu.off('select', handler)
//    */
//   off(eventName, handler) {
//     let handlers = this._eventHandlers?.[eventName];
//     if (!handlers) return;
//     for (let i = 0; i < handlers.length; i++) {
//       if (handlers[i] === handler) {
//         handlers.splice(i--, 1);
//       }
//     }
//   },
//   /**
//    * Generate an event with the given name and data
//    *  this.trigger('select', data1, data2);
//    */
//   trigger(eventName, ...args) {
//     if (!this._eventHandlers?.[eventName]) {
//       return; // no handlers for that event name
//     }

//     // call the handlers
//     this._eventHandlers[eventName].forEach((handler) =>
//       // handler.apply(this, args)
//       handler.apply(this, args)
//     );
//   },
// };
// // Make a class
// class Menu {
//   choose(value) {
//     this.trigger('select', value);
//   }
// }
// // Add the mixin with event-related methods
// Object.assign(Menu.prototype, eventMixin);
// let menu = new Menu();
// // add a handler, to be called on selection:
// // menu.on('select', (value) => console.log(`Value selected: ${value}`));
// menu.on('select', function (value) {
//   console.log(`Value selected: ${value}`);
//   console.log(this);
// });
// // triggers the event => the handler above runs and shows:
// // Value selected: 123
// menu.choose('123');

// class CoffeeMachine {
//   waterAmount = 0; // the amount of water inside

//   constructor(power) {
//     this.power = power;
//     console.log(`Created a coffee-machine, power: ${power}`);
//   }
// }
// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);
// // add water
// coffeeMachine.waterAmount = 200;
// console.log('end');

// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._waterAmount = value;
//   }

//   get waterAmount() {
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this._power = power;
//   }
// }
// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);
// // add water
// coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
// console.log('end');
// coffeeMachine._waterAmount;

// class CoffeeMachine {
//   #waterLimit = 200;

//   #fixWaterAmount(value) {
//     if (value < 0) return 0;
//     if (value > this.#waterLimit) return this.#waterLimit;
//   }

//   setWaterAmount(value) {
//     this.#waterLimit = this.#fixWaterAmount(value);
//   }
// }
// let coffeeMachine = new CoffeeMachine();
// // can't access privates from outside of the class
// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMachine.#waterLimit = 1000; // Error

// class User {
//   static staticMethod() {
//     console.log(this === User);
//   }
// }
// User.staticMethod();

// class User {}
// User.staticMethod = function () {
//   console.log(this === User);
// };
// User.staticMethod(); // true

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   bye() {
//     console.log('bye');
//   }

//   hello() {
//     this.bye();
//     return Article.createTodays();
//   }

//   static createTodays() {
//     // remember, this = Article
//     return new this("Today's digest", new Date());
//   }
// }
// const article2 = new Article('a title', 'date');
// let article = Article.createTodays();
// console.log(article.title); // Today's digest
// article.hello();

// class Article {
//   static publisher = 'Dylan Palmboom';
// }
// console.log(Article.publisher);

// class Animal {
//   static planet = 'Earth';

//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }

//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }
// // Inherit from Animal
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }
// let rabbits = [new Rabbit('White Rabbit', 10), new Rabbit('Black Rabbit', 5)];
// rabbits.sort(Rabbit.compare);
// rabbits[0].run(); // Black Rabbit runs with speed 5.
// console.log(Rabbit.planet); // Earth

// const calculatorMixin = (Base) =>
//   class extends Base {
//     calc() {
//       console.log('calculate stuff');
//     }
//   };
// const randomizerMixin = (Base) =>
//   class extends Base {
//     randomize() {
//       console.log('randomize stuff');
//     }
//   };
// class Foo {}
// class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
// console.log('end');

// class ClassWithPrivate {
//   #privateField = 84;
//   #privateFieldWithInitializer = 42;

//   #privateMethod() {
//     console.log('This is a private method');
//   }

//   static #privateStaticField;
//   static #privateStaticFieldWithInitializer = 42;

//   static #privateStaticMethod(obj) {
//     console.log('This is a private static method');
//     console.log(obj.#privateField);
//   }

//   hello() {
//     console.log(this.#privateFieldWithInitializer);
//     ClassWithPrivate.#privateStaticField;
//     ClassWithPrivate.#privateStaticMethod(this);
//   }
// }
// const instanceOfClassWithPrivate = new ClassWithPrivate();
// instanceOfClassWithPrivate.hello()

// class ClassWithPrivateField {
//   #privateField;

//   constructor() {
//     this.#privateField = 42;
//   }
// }
// class Subclass extends ClassWithPrivateField {
//   #subPrivateField;

//   constructor() {
//     super();
//     this.#subPrivateField = 23;
//   }

//   tryAccessBaseClassPrivate() {
//     // this.#privateField;
//     this.#subPrivateField;
//   }
// }
// const sub = new Subclass(); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}

// class Stamper extends class {
//   // A base class whose constructor returns the object it's given
//   constructor(obj) {
//     return obj;
//   }
// } {
//   // This declaration will "stamp" the private field onto the object
//   // returned by the base class constructor
//   #stamp = 42;
//   static getStamp(obj) {
//     return obj.#stamp;
//   }
// }
// const obj = {};
// new Stamper(obj);
// // `Stamper` calls `Base`, which returns `obj`, so `obj` is
// // now the `this` value. `Stamper` then defines `#stamp` on `obj`
// console.log(obj); // In some dev tools, it shows {#stamp: 42}
// console.log(Stamper.getStamp(obj)); // 42
// console.log(obj instanceof Stamper); // false
// // You cannot stamp private properties twice
// // new Stamper(obj); // Error: Initializing an object twice is an error with private fields

// function createUser(name) {
//   const discordName = '@' + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }
// // function createPlayer(name, level) {
// //   const { discordName, getReputation } = createUser(name);

// //   const increaseLevel = () => level++;
// //   return { name, discordName, getReputation, increaseLevel };
// // }
// function createPlayer (name, level) {
//   const user = createUser(name);

//   const increaseLevel = () => level++;
//   return Object.assign({}, user, { increaseLevel });
// }
// const user = createUser('dylan');
// const player = createPlayer('dylan', 19);

const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name),
});
// const driver = (state) => {
//   return {
//     drive: () => (state.position = state.position + state.speed),
//   };
// };
const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});
const killer = (state) => ({
  kill: () => console.log('killing!'),
});
// const dog = barker({ name: 'karo' });
// dog.bark();
// const robot = driver({ position: 1, speed: 2 });
// console.log(robot.drive());

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};
murderRobotDog('sniffles').bark()

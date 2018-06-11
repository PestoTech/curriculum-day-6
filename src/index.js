/* eslint-disable no-unused-vars */

// Check out the test suite for all the questions for implementation

// Use arrow functions in questions 1 - 4

// 1 (*)
const tripleAndFilter = (arr) => {
  const triple = arr.map(item => item * 3).filter((item => item % 5 === 0));
  return triple;
};

// 2 (*)
const doubleOddNumbers = arr => arr.filter(item => item % 2 !== 0).map(item => item * 2);


// 3 (*)
const mapFilterAndReduce = (arr) => {};

// 4 (*)
// var instructor = {
//   firstName: 'John',
//   sayHi: function() {
//     setTimeout(function() {
//       console.log("Hello " + this.firstName);
//     }, 1000);
//   }
// };

const instructor = {
  firstName: 'John',
  sayHi: () => {
    setTimeout(() => {
      this.firstName = 'Ram';
    }, 1000);
  },
};


/* Use default arguments in questions 5 and 6
  DO NOT USE || operator to set defaults like
  const a = b || '';
*/

// 5 (*)
function printFullName({ first = 'Tony', last = 'Stark' }) {
  return `My name is ${first} ${last}`;
}

// 6 (*)
function createStudent({ likesJavaScript = true, likesES2015 = false }) {
  if (likesJavaScript === true && likesES2015 === true) { return 'The student likes JavaScript and ES2015'; }
  if (likesJavaScript === true && likesES2015 === false) { return 'The student likes JavaScript!'; }
  if (likesJavaScript === false && likesES2015 === true) { return 'The student likes ES2015'; }
  return 'The student does not like much...';
}

// 7 placeInMiddle([1,2,6,7],[3,4,5]) (*)
function placeInMiddle(arr, vals) {}

// 8 (*)
function joinArrays(...args) {}

// 9 (*)
function sumEvenArgs(...args) { /* args.reduce((total, item, index) => {
    if(index + 1 % 2 === 0)
      const sum = total + item; }, 0);
return sum; */ }

// 10 (*)
function bind(fn, thisArg, ...outerArgs) {}

/** 11 (*)
  This is a typical mistake to make in JavaScript. We create a number of
  functions in a loop, and refer to an outside variable from these functions.
  All of them will end up referring to the same variable, which ends up being
  incremented to 10. Thus, callbacks[2] does not log 2. It logs 10, as do all
  functions in the array.

  Convert the functionality below to es6, making use of block scoping
 */

/* eslint-disable no-var, vars-on-top, no-loop-func */
function blockScoping(n) {
  var callbacks = [];
  for (let i = 0; i <= 10; i += 1) {
    callbacks.push(() => i);
  }
  return callbacks[n]();
}
/* eslint-enable no-var, vars-on-top, no-loop-func */

/** 12 (*)
  Does the fact that account is constant mean that we can't update password?
  Why, or why not? And if we can, how could we make it so that we can't?
  Hint: Object property descriptors
 */

function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  account.password = 'initialPassword';
  return account.password;
}

/* 13 (*)
Given the data in the starting code, use a TEMPLATE LITERALS to produce the
following string. Make sure the numbers, names, and team name actually come
from the data.

    There are 4 people on the football team.
    Their names are Rooney, Ronaldo, Messi, Pogba.
*/

function templateLiterals() {
  const teamName = 'football';
  const people = [{
    name: 'Rooney',
    role: 'CF',
  },
  {
    name: 'Ronaldo',
    role: 'LW',
  },
  {
    name: 'Messi',
    role: 'RW',
  },
  {
    name: 'Pogba',
    role: 'CM',
  }];

  return `There are 4 people on the football team. Their names are ${people[0].name}, ${people[1].name}, ${people[2].name}, ${people[3].name}.`;
}

/* 14 (*)
  Write a function html() that can be used as a template string tag, and produces
  a string in which all the interpolated pieces are escaped as HTML. Use the
  supplied escapeHTML function to do the escaping.

  Remember that a tag function gets an array of in-between strings as its first
  argument, and then the interpolated values as further arguments.
*/

function escapeHTML(string) {
  return String(string)
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;');
}

function html(strings, ...variables) {
}

function callTemplateTagFunction() {
  const trueExpression = '5 > 4';
  const falseExpression = '3 < 1';
  return (html`The expression ${trueExpression} is "true" & ${falseExpression} is false`);
}

module.exports = {
  tripleAndFilter,
  doubleOddNumbers,
  mapFilterAndReduce,
  instructor,
  printFullName,
  createStudent,
  placeInMiddle,
  joinArrays,
  sumEvenArgs,
  bind,
  blockScoping,
  constImmutable,
  templateLiterals,
  callTemplateTagFunction,
};

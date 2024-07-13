'use strict';

// // console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2035 - birthYear);
//   console.log(this);
// };
// calcAge(1990);

// const calcAgeArrow = (birthYear) => {
//   console.log(2035 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const john = {
//   firstName: 'John',
//   year: 1990,
//   calcAge: function () {
//     console.log(2035 - this.year);
//     console.log(this); // this: john

//     const self = this;
//     const isMillenial = function () {
//       console.log(this); // this: undefined
//       console.log(self); // self: john
//     };
//     isMillenial();

//     const isMillenial2 = () => {
//       console.log(this); // this: john
//     };
//     isMillenial2();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// john.calcAge(1970);

// var firstName = 'bill';
// john.greet(); // Hey bill

// function expr(b, c) {
//   console.log(arguments); // [0, 1, 2, 3]
//   console.log(arguments[3]); // 3
// }
// expr(0, 1, 2, 3);

// const arrow = (b, c) => {
//   console.log(arguments); // arguments not defined
// };
// arrow(0, 1, 2, 3);

const john = {
  firstName: 'john',
  lastName: 'smith',
};

const johnMarried = john;
johnMarried.lastName = 'adams';
console.log(john.lastName); // adams
console.log(johnMarried.lastName); // adams

const john2 = {
  firstName: 'john',
  lastName: 'smith',
  family: ['Alice', 'Bob'],
};

const johnCopy = Object.assign({}, john2);
johnCopy.lastName = 'adams';
johnCopy.family.push('Charlie');
console.log(john2.lastName); // smith
console.log(johnCopy.lastName); // adams
console.log(john2.family); // [Alice, Bob, Charlie]
console.log(johnCopy.family); // [Alice, Bob, Charlie]

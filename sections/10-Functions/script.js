'use strict';

// // ----- default parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 2,
//   price = 200 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(booking);
// };

// createBooking('LH123', 2, 100);

// // skip parameter we want to set as default
// createBooking('LH123', undefined, 100);

// // ----- Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Tranformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('hello world!', upperFirstWord);
// transformer('hello world!', oneWord);

// // callback-functions are used all the time
// const high5 = () => console.log('👋');
// document.body.addEventListener('click', high5);
// ['Alice', 'Bob', 'Charlie'].forEach(high5);

// // ----- Functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('John');

// greet('Hello')('Alice');

// // challenge
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // ----- The call and apply methods

// const easyjet = {
//   airline: 'easyJet',
//   iatacode: 'U2',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iatacode}${flightNum}`,
//       name,
//     });
//   },
// };
// easyjet.book(12345, 'John');

// const book = easyjet.book;

// const britair = {
//   airline: 'British Airways',
//   iatacode: 'BA',
//   bookings: [],
// };

// // call method
// book.call(britair, 98765, 'Mary');

// // apply method
// const flightData = [76543, 'Bill'];
// book.apply(britair, flightData);
// book.call(britair, ...flightData); // rather always use call

// // ----- The bind method
// const bookBA = book.bind(britair);
// bookBA(11111, 'Bambam');

// // partial application
// const bookBA23 = book.bind(britair, 23);
// bookBA23('Boris');

// // bind example
// britair.planes = 300;
// britair.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', britair.buyPlane.bind(britair));

// //partial application
// const addTax = (rate, value) => value + value * rate;
// const addVAT = addTax.bind(null, 0.23); // same as addVAT2 👇

// const addTaxRate = (rate) => (value) => value + value * rate;
// const addVAT2 = addTaxRate(0.23); // same as addVAT 👆

// // ----- coding callenge 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log('answer:', answer);

//     if (
//       typeof answer === 'number' &&
//       answer >= 0 &&
//       answer < this.options.length
//     ) {
//       this.answers[answer]++;
//     }
//     this.displayResults();
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // bonus
// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// ----- Immediately invoked function expressions (iife)

// // IIFE
// (function () {
//   console.log('This will never run again!');
// })();

// (() => console.log('This will ALSO never run again!'))();

// // ----- Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();

// // example

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Boarding passengers in ${wait} seconds`);
// };
// boardPassengers(180, 3);

// // ----- coding challenge 2

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

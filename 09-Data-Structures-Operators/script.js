'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta made with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); // pickles
    console.log(otherIngredients); // [cheese, onions]
  },
};

// ----- Rest patterns and parameters

// // 1) Destructoring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]]; // 1 2 3 4

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1 2 [3, 4, 5]

// // arrays
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); // doesn't include skipped elements (pasta)

// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // { thu: {...}, fri: {...} }

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3); // 5
// add(5, 3, 7, 2); // 17

// const x = [23, 4, 6];
// add(...x); // 33

// restaurant.orderPizza = function (mainIngredient, ...otherIngredients) {
//   console.log(mainIngredient); // pickles
//   console.log(otherIngredients); // [cheese, onions]
// };
// restaurant.orderPizza('pickles', 'cheese', 'onions');

// ----- Destructoring objects

// // calling function with different argument order using object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: '21 Jump St',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '21 Jump St',
//   mainIndex: 2,
// });

// // destructuring object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); // Classico Italiano, Object, Array

// // custom variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags); // Classico Italiano, Object, Array

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); // [], Array (menu = undefined if default not set)

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 56 };
// ({ a, b } = obj);
// console.log(a, b); // 23, 56

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c); // 11 23

// ----- Destructoring Arrays

// // without destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c); // 2 3 4

// // with destructoring
// const [x, y, z] = arr;
// console.log(x, y, z); // 2 3 4

// const categories = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'];

// let [main, , secondary] = categories;
// console.log(main, secondary); // Italian Vegetarian

// // swapping elements
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetatian Italian

// // swapping elements with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Italian Vegetarian

// // receive 2 values from function
// const func = () => [1, 2];
// const [first, second] = func();
// console.log(first, second); // 1 2

// // nested destructuring
// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 1 3 4

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1 (1 = undefined if default not set)

// ----- Spread Operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // bad way

// const newArr = [1, 2, ...arr]; // good way
// console.log(newArr); // [1, 2, 7, 8, 9]
// console.log(...newArr); // 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // [Pizza, Pasta, Risotto, Gnocci]

// // shallow copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// const str = 'John';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // [J, o, h, n, S.]

// // calling function
// const ingredients = ['cheese', 'ham', 'basil'];
// restaurant.orderPasta(...ingredients);

// // objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Bill' };
// console.log(newRestaurant);

// // shallow copy object
// const restaurantCopy = { ...newRestaurant };

// ----- The Nullish Coalescing Operator (??)

// restaurant.numGuests = 0;
// console.log(restaurant.numGuests ?? 10); // 10

// restaurant.numGuests = 0;
// console.log(restaurant.numGuests ?? 10); // 0

// ----- Logical Assignment Operators
// const rest1 = {
//   name: 'pizza place',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'pizza town',
//   owner: 'john',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10; // assign value (10) to variable if it's falsey
// rest2.numGuests ||= 10;

// // nullish assignment operator (null, undefined)
// rest1.numGuests ??= 10; // assign value (10) to variable if it's nullish
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && 'anonymous'; // set to undefined
// rest2.owner &&= '<ANONYMOUS>'; // assign value to variable if it's truthey

// ----- Coding challenge 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
//   console.log(...players);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('team 1 likely to win');
// team1 < team2 || console.log('team 2 likely to win');

// ----- for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // menu.entries() returns array of arrays containing [index, element]
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // destructured
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // Enhanced Object literals

// // assinging an outside object into an object
const openingHours = {
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const shop = {
//   // pre-ES6
//   openingHours: openingHours,
//   // ES6
//   openingHours,
// };

// const greeter = {
//   // pre-ES6
//   greet: function (name) {
//     console.log(`Hello ${name}`);
//   },
//   // ES6
//   greet(name) {
//     console.log(`Hello ${name}`);
//   },
// }

// const weekdays = ['mon', 'tue', 'wed'];

// const openingHours2 = {
//   [weekdays[0]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0,
//     close: 24,
//   },
// };

//// ----- Optional chaining

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // WITH Optional Chaining
// console.log(restaurant.openingHours.mon?.open);

// // example
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(1, 2) ?? 'Method does not exist');

// // arrays
// const users = [{ name: 'John', email: 'john@email.com' }];
// console.log(users[0]?.name ?? 'users array is empty');

// // ----- Looping Objects: Object keys, Values and Entries

// // property NAMES
// const properties = Object.keys(openingHours2);
// console.log(`We are open on ${properties.length} days`);
// for (const day of properties) console.log(day);

// // property VALUES
// const values = Object.values(openingHours2);
// console.log(values);

// // entire object
// const entries = Object.entries(openingHours2);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

// // ----- coding challenge 2
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average = average / odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // 4.
// const scorers = {};

// for (const scorer of game.scored) {
//   scorers[scorer] ??= 0;
//   scorers[scorer]++;
// }
// console.log(scorers);

// // ----- Sets
// const ordersSet = new Set(['Pizza', 'Pasta', 'Pizza', 'Sausage']);

// console.log(ordersSet); // Pizza, Pasta, Sausage

// console.log(new Set('Sally')); // S, a, l, y

// // size
// console.log(ordersSet.size); // 3

// // has
// console.log(ordersSet.has('Pasta')); // true

// // add
// ordersSet.add('Bread');

// // delete
// ordersSet.delete('Pasta');

// // clear
// // ordersSet.clear();

// // iterating over Set
// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)]; // Waiter, Chef, Manager
// console.log(new Set(staff).size); // 3
// console.log(new Set('oiegheoruhgosnisgoh').size); // 9

// // ----- Maps: Fundamentals
// const rest = new Map();

// // set
// rest.set('name', 'cluckin bell');
// rest.set(1, '1 Fake St');
// rest.set(2, '2 Fake St');

// rest
//   .set('categories', ['burgers', 'chicken', 'salad'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, `We're open :)`)
//   .set(false, `We're closed :()`);

// // get
// console.log(rest.get('name')); // 'cluckin bell'
// console.log(rest.get(true)); // 'We're open :)'
// console.log(rest.get(1)); // '1 Fake St'

// // get example
// const time = 21;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close'))); // 'We're open :)'

// // has
// console.log(rest.has('categories')); // true

// // delete
// rest.delete(2);

// // size
// rest.size; // 7

// // clear
// rest.clear();

// // Objects as Map keys
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest.get(arr)); // 'Test'
// console.log(rest.get(document.querySelector('h1'))); // 'heading'

// // ----- Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['answer', 3],
//   [true, 'Correct!'],
//   [false, 'Try again.'],
// ]);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(question.get(answer === question.get('answer')));

// // convert object to map
// const hoursMap = new Map(Object.entries(openingHours));

// // convert map to array
// console.log([...question]);
// console.log(...question.keys());
// console.log(...question.values());

// // ----- coding challenge 3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];

// // 2.
// gameEvents.delete(64);

// // 3.
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [hour, event] of gameEvents) {
//   const half = hour <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${hour}: ${event}`);
// }

// // ----- Working with strings - part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0], plane[1]); // A, 3
// console.log('B737'[0]); // B

// console.log(plane.length); // 4

// console.log(airline.indexOf('r')); // 6
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.indexOf('Portugal')); // 8

// console.log(airline.slice(4)); // Air Portugal
// console.log(airline.slice(4, 7)); // Air

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('Middle Seat 😬');
//   } else {
//     console.log('Not middle seat! 🥳');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // ----- Working with strings - part 2
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const fixName = function (name) {
//   return name[0].toUpperCase() + name.slice(1).toLowerCase();
// };
// console.log(fixName('jOhN')); // John

// // Comparing emails
// const compareEmails = function (email, loginEmail) {
//   return email === loginEmail.toLowerCase().trim();
// };
// const email = 'hello@john.io';
// const loginEmail = '  helLo@joHN.io  \n';
// console.log(compareEmails(email, loginEmail)); // True

// // replacing
// const priceEU = '123,45€';
// const priceUS = priceEU.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// // booleans
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320')); // true
// console.log(plane2.startsWith('Air')); // false

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('Part of the NEW airbus family');
// }

// // Practice excercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('pocket knife') || baggage.includes('gun')) {
//     console.log('You shall not pass');
//   } else {
//     console.log('Welcome');
//   }
// };
// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('I only have socks');
// checkBaggage('I got a gun');

// // ----- Working with Strings - part 3
// console.log('A+very+nice+string'.split('+')); // [A, very, nice, string]

// const [firstName, lastName] = 'John Smith'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // Mr John SMITH

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('john stannis smith');

// // padding
// const message = 'Go to gate 23';
// console.log(message.padStart(20, '+')); // +++++++Go to gate 23
// console.log('John'.padEnd(20, '+')); // John++++++++++++++++

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(98765432)); // ****5432

// // repeat
// console.log('alert '.repeat(3)); // 'alert alert alert '

// // ----- coding challenge 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const str = document.querySelector('textarea').value;
//   const lines = str.split(/\r\n|\r|\n/g);

//   for (const [i, line] of lines.entries()) {
//     let [first, second] = line.toLowerCase().trim().split('_');
//     second = second.replace(second[0], second[0].toUpperCase());
//     const word = [first, second].join('');
//     console.log(word.padEnd(20, ' ') + '✅'.repeat(i + 1));
//   }
// });

// ----- string methods practice
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const line of flights.split('+')) {
//   let [status, from, to, time] = line.split(';');

//   status = status.replaceAll('_', ' ').trim();
//   from = from.slice(0, 3).toUpperCase();
//   to = to.slice(0, 3).toUpperCase();
//   time = time.replace(':', 'h');

//   const output = `${
//     status.startsWith('Delayed') ? '🔴 ' : ''
//   }${status} from ${from} to ${to} (${time})`.padStart(45);
//   console.log(output);
// }

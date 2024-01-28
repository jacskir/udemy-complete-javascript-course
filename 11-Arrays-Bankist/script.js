'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const date = new Date().toJSON().slice(0, 10);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${type} 
      </div>
      <div class="movements__date">${date}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => (acc += cur));
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * (acc.interestRate / 100))
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .split(' ')
      .map(name => name[0])
      .join('')
      .toLowerCase();
  });
};
createUsernames(accounts);

let currentAccount;

const updateUI = function (acc, sort = false) {
  displayMovements(acc.movements, sort);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const hideUI = function () {
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  inputLoanAmount.value = '';
  inputClosePin.value = '';
  inputCloseUsername.value = '';
  labelBalance.textContent = '0€';
  labelSumIn.textContent = '0€';
  labelSumOut.textContent = '0€';
  labelSumInterest.textContent = '0€';
  labelWelcome.textContent = 'Log in to get started';
  containerMovements.innerHTML = '';

  document.activeElement.blur();
  containerApp.style.opacity = 0;
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const account = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );

  if (account) {
    currentAccount = account;

    // display UI and message
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;

    // clear user inputs
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    document.activeElement.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferAmount = Number(inputTransferAmount.value);
  const recipient = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // validate data
  if (
    !recipient ||
    recipient?.username === currentAccount.username ||
    transferAmount > currentAccount.balance ||
    transferAmount <= 0
  ) {
    return;
  }

  // transfer
  currentAccount.movements.push(-transferAmount);
  recipient.movements.push(transferAmount);

  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  updateUI(currentAccount);
});

// bank will only grant loan if there is at least 1 deposit
// which is at least 10% of the requested loan amount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loan = Number(inputLoanAmount.value);

  if (loan > 0 && currentAccount.movements.some(mov => mov >= loan * 0.1)) {
    currentAccount.movements.push(loan);
    inputLoanAmount.value = '';
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (username === currentAccount.username && pin === currentAccount.pin) {
    const index = accounts.findIndex(
      acc => acc.username === username && acc.pin === pin
    );

    accounts.splice(index, 1);

    hideUI();
  }
});

let sorted = false;

btnSort.addEventListener('click', function () {
  sorted = !sorted;
  updateUI(currentAccount, sorted);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // ----- simple array methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice
// // doesn't mutate original copy
// console.log(arr.slice(2)); // c d e
// console.log(arr.slice(2, 4)); // c d
// console.log(arr.slice(-2)); // d e
// console.log(arr.slice(-1)); // e
// console.log(arr.slice(1, -2)); // b c
// console.log(arr.slice()); // shallow copy
// console.log([...arr]); // ^same

// // splice
// // mutates original array
// // console.log(arr.splice(2)); // c d e
// arr.splice(-1);
// console.log(arr); // a b c d
// arr.splice(1, 2);
// console.log(arr); // a d

// // reverse
// // mutates original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2); // f g h i j

// // concat
// // doesn't mutate original copy
// const letters = arr.concat(arr2);
// console.log(letters); // a b c d e f g h i j
// console.log([...arr, ...arr2]); // ^same

// // join
// console.log(letters.join('-')); // a-b-c-d-e-f-g-h-i-j

// // ----- the new at method

// const arr = [23, 11, 64];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23

// // getting last element of array
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // 64
// console.log(arr.at(-1)); // 64

// console.log('john'.at(-1)); // n

// // ----- looping arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // ----- forEach with Maps and Sets

// // map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

// // ----- coding challenge 1
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog < 3) {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     } else {
//       console.log(`Dog number ${i + 1} an adult, and is ${dog} years old`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// // ----- The map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

// // ----- The filter Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(deposits, withdrawals);

// // ----- The reduce Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);
// const balance = movements.reduce((acc, cur) => cur + acc);
// console.log(balance);

// // max value
// const max = movements.reduce(function (acc, mov) {
//   if (mov > acc) {
//     return mov;
//   } else {
//     return acc;
//   }
// }, movements[0]);
// console.log(max);

// // ----- coding challenge 2
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   const average = adults.reduce((acc, cur) => acc + cur) / adults.length;
//   return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // 44
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // 47.3

// // ----- coding challenge 3
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // 44
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // 47.3

// // ----- The find Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0); // -400
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let acc1;
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     acc1 = acc;
//   }
// }
// console.log(acc1);

// // ----- some and every
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // equality
// console.log(movements.includes(-130));

// // some
// console.log(movements.some(mov => mov > 0));

// // any
// console.log(movements.any(mov => mov > 0));

// // ----- flat and flatMap
// // flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // 1 2 3 4 5 6 7 8

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr.flat(2)); // 1 2 3 4 5 6 7 8

// // flatMap
// const bankBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => (acc += mov), 0);
// console.log(bankBalance);

// // ----- array sorting
// const owners = ['charlie', 'sarah', 'alice', 'bob'];
// console.log(owners.sort());

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)
// movements.sort((a, b) => a - b);
// console.log(movements);

// ----- More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7); // [ , , , , , , ]
// x.fill(1); // [1, 1, 1, 1, 1, 1, 1]
// x.fill(1, 3); // [ , , , 1, 1, 1, 1]
x.fill(1, 3, 5); // [ , , , 1, 1, , ]

arr.fill(23, 2, 6); // [1, 2, 23, 23, 23, 23, 7]
console.log(arr);

// from method
const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1]
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7]
console.log(z);

const OneHundredDiceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(OneHundredDiceRolls);

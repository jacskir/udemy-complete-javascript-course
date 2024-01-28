/*
// Values and Variables
const country = 'england';
const continent = 'europe';
let population = 33;

console.log(country);
console.log(continent);
console.log(population);



// ----- Data Types
const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



// ----- let, const and var
language = 'english';

// ----- Basic Operators
console.log(population / 2);
// population++;
console.log(population);

const populationFinland = 6;
console.log('finland has higher population than yours: ', populationFinland > population);

const populationAvg = 33;
console.log('Your country has a higher population than the average: ', population > populationAvg);

const descriptionCountry = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionCountry);



// ----- coding challenge 1
// let massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

let massMark = 95;
let massJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);
let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);



// ----- Strings and template literals
const firstName = 'John';
const job = 'lollypop lady';
const birthYear = 1966;
const year = 2035;

const descriptionPerson = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(descriptionPerson);



// ----- Taking decisions : if / else statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}



// ----- coding challenge 2
let massMark = 95;
let massJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiMark}) is higher than Mark's (${bmiMark})!`);
}



// ----- Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 6 + '17' = '617'
console.log('19' - '13' + 17); // 6 + 17 = 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1149 - 4 - 2 = 1143




// ----- Equality Operators: == vs. ===
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}




// ----- Logcal Operators
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}



// ----- coding challenge 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`it's a draw!`);
} else {
    console.log('nobody wins.');
}




// ----- The switch statement

const day = 'monday';

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === wednesday || day === thursday) {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

const language = 'chinese';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}



// ----- The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);



// ----- coding challenge 4
const bill = 100;
const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/



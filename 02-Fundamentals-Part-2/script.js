'use strict';
/*
// ----- Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('england', 50, 'london'));
console.log(describeCountry('france', 31, 'paris'));
console.log(describeCountry('taiwan', 100, 'tapai'));


// ------ Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(10));
console.log(percentageOfWorld1(100));
console.log(percentageOfWorld1(1000));

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld2(10));
console.log(percentageOfWorld2(100));
console.log(percentageOfWorld2(1000));



// ----- Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(percentageOfWorld3(10));
console.log(percentageOfWorld3(100));
console.log(percentageOfWorld3(1000));



// ----- Functions calling other functions
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

console.log(describePopulation('england', 50));
console.log(describePopulation('france', 31));
console.log(describePopulation('taiwan', 100));



// ----- coding challenge 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins / 2 >= avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas / 2 >= avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('no winner');
    }
}

checkWinner(avgDolphins, avgKoalas);



// ----- Introduction to Arrays

const populations = [55, 44, 33, 22];

console.log(populations.length === 4);

const percentages = [];
percentages[0] = percentageOfWorld1(populations[0]);
percentages[1] = percentageOfWorld1(populations[1]);
percentages[2] = percentageOfWorld1(populations[2]);
percentages[3] = percentageOfWorld1(populations[3]);

console.log(percentages);



// ----- Basic array operations (Methods)
const neighbours = ['Finland', 'Russia', 'Sweden'];

neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);



//----- coding challenge 2

function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
}


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, total);


// my way
const bills2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
const tips2 = [];
const total2 = [];
for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]));
    total2.push(bills2[i] + tips2[i]);
}
console.log(total2);






//----- Introduction to Objects
const myCountry = {
    country: 'Sweden',
    capital: 'Stockholm',
    language: 'swedish',
    population: 10,
    neighbours: ['Finland', 'Russia', 'Sweden'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false;
    }
}


//----- Dot vs. Bracket Notation
myCountry.population += 2;
myCountry['population'] -= 2;

const person = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1995,
    job: 'Bus driver',
    friends: ['Alice', 'Bob', 'Charlie'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
}

console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`);


//----- Object Methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

console.log(person.getSummary());
console.log(person);




//----- coding challenge 3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI (${mark.calcBMI()} is higher than John's (${john.bmi})!)`);
} else if (john.bmi > mark.bmi) {
    console.log(`John's BMI (${john.calcBMI()} is higher than Mark's (${mark.bmi})!)`);
} else if (mark.bmi === john.bmi) {
    console.log(`John and Mark's BMI's are the same (${mark.bmi})`);
}



//----- Iteration: The for loop
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//----- Looping Arrays, Breaking and Continuing
const populations = [55, 44, 33, 22];
const percentages2 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log(percentages2);


//----- Looping Backwards and Loops in Loops
const listOfneighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfneighbours.length; i++) {
    for (let j = 0; j < listOfneighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfneighbours[i][j]}`);
    }
}


//----- While loop
const percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3[i] = percentageOfWorld1(populations[i]);
    i++;
}
console.log(percentages3);
*/


//----- coding challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);
console.log(calcAverage(totals));
"use strict";
/*let serna = true;
let olga = false;
if (olga) serena = false;
if (serna) console.log("yes");


const calcAverage = (a, b, c) => (a + b + c) / 3;
let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolhins, avgKoalas);
const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    return `Dolhins wins ${avgDolhins} vs ${avgKoalas}`;
  } else return `koalas wins  ${avgKoalas} vs ${avgDolhins}`;
};
console.log(checkWinner(avgDolhins, avgKoalas));

let tip;
let bill = 100;

const CalcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
    return tip;
  } else {
    tip = 0.2 * bill;
    return tip;
  }
};

console.log(CalcTip(bill));
const bills = [125, 555, 44];
let tips = [CalcTip(bills[0]), CalcTip(bills[1]), CalcTip(bills[2])];
let totalValues = [
  CalcTip(bills[0]) + bills[0],
  CalcTip(bills[1]) + bills[1],
  CalcTip(bills[2]) + bills[2],
];
console.log(tips, totalValues);

const jonas = {
  firstName: "jonas",
  friend: ["chris", "sese", "susu"],
  job: "teacher",
  location: "lublin",
};
console.log(
  `${jonas.firstName} has ${jonas.friend.length} friends,and his best friend is called ${jonas.friend[0]}`
);

const mark = {
  firstName: "Miller",
  lastName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  firstName: "Smith",
  lastName: " John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark.calcBMI(), john.calcBMI());
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `mark's BMI ${mark.calcBMI()} is higher than john's ${john.calcBMI()}`
  );
} else {
  console.log(
    `john's BMI ${john.calcBMI()}is higher than mark's ${mark.calcBMI()}`
  );
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const CalcTip = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
};
for (let i = 0; i < bills.length; i++) {
  const tip = CalcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, totals, bills);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(bills));
console.log(calcAverage(tips));
*/

let printForecast = function (arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += `....${arr[i]}°C in ${i + 1}day${i + 1 > 1 ? "s" : ""},`;
  }
  return output;
};
let sentence = printForecast([17, 21, 23]);
let sentences = printForecast([12, 5, -5, 0, 4]);

console.log(sentence, sentences);

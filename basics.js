"use strict"; // it will show error in console if any error in code

let hasDriversLicense = false;
const passText = true;

if (passText) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");

//const private = 534; // error -> reserve word

//functions

function logger(x, y) {
  // --> not return type is required in js
  console.log(`Hi in the functions x: ${arguments[0]}`);
  return "Return method";
}

const returnCall = logger(2, 5); // logger() --> this will also work

console.log(returnCall);

//function expression
const calculateAge2 = function (year) {
  // anonymous function
  return 2037 - year;
};

const age2 = calculateAge2(1990);

console.log(age2);

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

console.log(calcAge3(2003));

const yearsRetirement = (birthYeah) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsRetirement(1990));

//objects
const jonayArray = [
  "jonas",
  "scmedtman",
  2047 - 1991,
  "teacher",
  ["deep", "singh"],
];

console.log(jonayArray[1]);

// now objects
const jonas = {
  firstName: "Jonas",
  lastName: "Bharti",
  age: 43,
  job: "teacher",
  fridends: ["deep", "singh"],
  calcAge: function (year) {
    return 2037 - year;
  },
};

console.log(jonas.calcAge(jonas.age));

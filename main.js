let js = "amazing";
// if (js == "amazing") {
//   alert("hello sowrld");
// }
console.log(80 + 2);
const year = 1990;
console.log(year);

firstName = "Deep";
console.log(firstName);

const ageHones = 2036 - 1991;
const ageDarah = 2037 - 2018;

const powerNumber = 2 ** 3; //-> 2 power 3

console.log(ageHones, ageDarah, powerNumber);

let isGreater = 70 > 45;
console.log(typeof isGreater);

const jonasNew = `I'am ${firstName}`;
console.log(jonasNew);

const inputYear = "1991";
console.log(inputYear);
console.log(Number(inputYear), inputYear);

console.log(typeof NaN);

//  - , / and * operator convert string into number and
//  + convert number into string
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

console.log(2 + 3 + 4 + "5"); //--> 95

//Five false vaues : 0 ,'',undefined,null,Nan

//Equality Operators

const age = 18;
if (age === 18) {
  // strictly equal
  console.log("adult"); //--> output
} else {
  console.log("Not adult");
}

if (age == "18") {
  console.log("adult"); // --> output "18" will be convert into number
} else {
  console.log("Not adult");
}

if (age === "18") {
  console.log("adult");
} else {
  console.log("Not adult"); //--> output
}

//const favorite = prompt("what is favorite number");
const favorite = Number(prompt("what is favorite number"));
console.log(favorite);
console.log(typeof favorite);

//const X = (parametro) => {};

console.log("---------------------------------------1: \t");

const doubleANumber = (number) => {
  number * 2;
};

////////////////////////////////////////////////2///////////////////////////////////////////////////////////////////
console.log("---------------------------------------2: \t");

const createFullName = (firstName, lastName) => {
  firstName + " " + lastName;
};
////////////////////////////////////////////////3///////////////////////////////////////////////////////////////////
console.log("---------------------------------------3: \t");

const calculateTheLenghtOfAStrings = (str) =>
  `o tamanho de "${str}" é:` + str.length;

let longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

console.log(calculateTheLenghtOfAStrings(longestCityNameInTheWorld));

////////////////////////////////////////////////4///////////////////////////////////////////////////////////////////
console.log("---------------------------------------4: \t");

const calculateTheLenghtOfAString = (str) => {
  let length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
};

calculateTheLenghtOfAString("willynilly");
////////////////////////////////////////////////5///////////////////////////////////////////////////////////////////
console.log("---------------------------------------5: \t");
let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

const showRandomAlert = (name) => {
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};

showRandomAlert("Maria");

////////////////////////////////////////////////6///////////////////////////////////////////////////////////////////
console.log("---------------------------------------6: \t");
const getEvenNumbers = (array) => {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) evenNumbers.push(i);
  }
  return evenNumbers;
};

console.log(getEvenNumbers);

////////////////////////////////////////////////7///////////////////////////////////////////////////////////////////
console.log("---------------------------------------7: \t");
const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

const displayUser = (user) =>
  user.name + " " + user.surname + " (" + user.age + ")";

console.log(displayUser(userObject));

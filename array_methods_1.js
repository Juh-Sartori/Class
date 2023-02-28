//////////////////////////////////////////////ATV1/////////////////////////////////////////////////
//Crie uma função que, ao receber uma array, gere um clone desta array. (iterar eh ir casinha por casinha)

const array = [1, 2, 4, 0, [7, 9]];
const functionName = (array) => array.map((elemento) => elemento);
console.log("1:");
console.log(functionName(array));

//exercicio 1 com slice
const array1 = [1, 2, 4, 0, [7, 10]];
const clone = array1.slice();
console.log("1:");
console.log(clone);

//////////////////////////////////////////////ATV2/////////////////////////////////////////////////
//Crie uma função que, ao receber como parâmetros uma array e um número (opcional),
//cria uma outra array com os valores iniciais da array original de acordo com o número passado. Método: slice().
const arraySlice = [7, 9, 0, -2];
const newArray = (arraySlice) => arraySlice.slice(0, 3); //ou seja, o 0 vai indicar onde ue da o start e o 3 ate onde que pega os numeros
console.log("2:");
console.log(newArray(arraySlice));

//////////////////////////////////////////////ATV3/////////////////////////////////////////////////
const arrayOfString = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayNumAndString = (arrayOfString) =>
  arrayOfString.reduce((acc, el, i) => {
    if (i % 3 == 0 && i != 0) {
      //pois o i eh o index ai vai dividindo por 3 se resultar em 0, coloca o ponto, o != 0, eh pq senao colocar ele, eh colocado um . no inicio .123.456
      return acc + "." + el;
    }
    return acc + el; //se for 3 entra no if, senao ele so concatena do lado
  }, "");
console.log("3:");
console.log(arrayNumAndString(arrayOfString));

//////////////////////////////////////////////ATV4/////////////////////////////////////////////////
//- Crie uma função que receba uma array de strings e retorne outra
//array apenas com os elementos de até 5 caracteres da array original.
const arrayOfCharacter = [
  "cachorro",
  "pato",
  "familia",
  "comer",
  "camping",
  "oi",
  "aquarela",
];
const arrayOfUpTo3Characters = (arrayOfCharacter) =>
  arrayOfCharacter.filter((element) => element.length <= 5);
console.log("4:");
console.log(arrayOfUpTo3Characters(arrayOfCharacter));

//////////////////////////////////////////////ATV5/////////////////////////////////////////////////
// Crie uma função, que utilize map(), que receba uma array de objetos.
// Uma das propriedades de cada objeto é a propriedade age. A função
// deve retornar outra array com 3 dados:
// a. a menor idade;
// b. a maior idade, e
// c. a diferença entre elas.

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const arrayLargerAndSmallerAndDifferent = (input) => {
  //item == casa do vet atual
  const arrayAge = input.map((item) => item.age);
  const min = Math.min(...arrayAge);
  const max = Math.max(...arrayAge);
  const different = max - min;
  return [min, max, different];
};

console.log("5:");
console.log(arrayLargerAndSmallerAndDifferent(input));

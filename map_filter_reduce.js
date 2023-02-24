/////////////////////////////ATV1/////////////////////////////////////
//some os numeros do array

let arr = [1, 2, 3];

const total = arr.reduce((acc, currentValue) => {
  return acc + currentValue;
});
console.log(total); // 6

/////////////////////////////ATV2/////////////////////////////////////
//Transforme uma array de dados em uma string com a concatenação
//de todos estes números.

const stringConcat = arr.reduce((acc, currntValue) => {
  return acc + currntValue;
}, ""); //para concatenar faz assim para poder informar ao acc que vai inicializar com string e nao co numero
console.log(stringConcat); // "123"

/////////////////////////////ATV3/////////////////////////////////////
//- Dada uma array com dados sobre eleitores, crie uma função que
//devolva a quantidade de pessoas abaixo de 30 anos que votaram.

let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

//voters.age da erro pq o voters ja esta sendo passado por parametro, entao ele eh o arr
const totalVeryYoungVotes = voters.reduce((acc, el) => {
  if (el.age < 30 && el.voted === true) {
    return acc + 1;
  } else return acc;
}, 0); //acc =0, eh o cont

console.log(totalVeryYoungVotes); // 1

/////////////////////////////ATV4/////////////////////////////////////
/* Crie uma função que retorne, a partir da array wishlist, o quanto
custaria se você comprasse todos listados na array. */

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

//se colocar a {} tem q usar o return
const shoppingSpree = wishlist.reduce((acc, el) => acc + el.price, 0);

console.log(shoppingSpree); // 227005

/////////////////////////////ATV5/////////////////////////////////////
// - A partir da array fornecida (voters), crie uma função que retorne o
// número total de eleitores jovens (numYoungPeople) e o número de
// eleitores jovens que votaram (numYoungVotes). O mesmo para eleitores
// de meia idade (maduros) e mais velhos (sêniores).

const votersResult = voters.reduce(
  (acc, currentValue) => {
    if (currentValue.age < 30) {
      acc.numYoungPeople += 1; //primeiro foi atualizado tudo para depois retornar, por isso o +=
      //a=a+1, msm coisa q a+=1
    }
    if (currentValue.age >= 30 && currentValue.age < 41) {
      acc.numMidsPeople++;
    }
    if (currentValue.age >= 41) {
      acc.numOldsPeople = acc.numOldsPeople + 1;
    }
    if (currentValue.age < 30 && currentValue.voted) {
      acc.numYoungVotes = acc.numYoungVotes + 1;
    }
    if (
      currentValue.age >= 30 &&
      currentValue.age < 41 &&
      currentValue.voted == true
    ) {
      acc.numMidVotesPeople += 1;
    }
    if (currentValue.age >= 41 && currentValue.voted) {
      acc.numOldVotesPeople++;
    }
    return acc; //retorna o acumulador todo, com os dados atualizados
  },
  //criei um objeto com os valores iniciais 0
  //sao propriedades do acc, esses obj embaixo
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(votersResult); // Returned value shown below:
/*
{ numYoungVotes: 1, // número de eleitores jovens que votaram
numYoungPeople: 4, // número de eleitores jovens
numMidVotesPeople: 3, // número de eleitores maduros que votaram
numMidsPeople: 4, // número de eleitores maduros
numOldVotesPeople: 3, // número de eleitores sêniores que votaram
numOldsPeople: 4 // número de eleitores sêniores
}
*/

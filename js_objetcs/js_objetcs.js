let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true, //desafiador
  isRewarding: true, //eh recompensador
  difficulty: 8,
  //piadas
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
//--------------------------------- ATV1 --------------------------------------------
//Crie uma função para adicionar uma nova linguagem à chave "languages".
const addNewLanguage = (Language) => programming.languages.push(Language);

addNewLanguage("Java");
console.log(programming);

//--------------------------------- ATV2 --------------------------------------------
//Crie uma função para alterar o valor do nível de dificuldade ("difficulty").
const changeTheDifficulty = (value) => (programming.difficulty = 7);

changeTheDifficulty(7);
console.log(programming);

//--------------------------------- ATV3 --------------------------------------------
//Crie uma função para excluir uma chave do objeto.
const remove = (attribute) => delete programming[attribute];
remove("jokes"); // precisou de ser colocado dessa forma, com o ponto nao deu certo
console.log(programming);

//--------------------------------- ATV4 --------------------------------------------
//Crie uma função para adicionar uma nova chave. Faça um teste criando uma chave com nome isFun e valor true.

const addNewKey = (isFun) => (programming.isFun = true);
addNewKey(true);
console.log(programming);
//--------------------------------- ATV5 --------------------------------------------
//Crie uma função para exibir no console todas as linguagens de programação armazenadas na chave "languages".
const view = () => console.log(programming.languages);

view(programming);

//--------------------------------- ATV6 --------------------------------------------
//Crie uma função para exibir no console o nome de todas as chaves do objeto.
const showAllTheAttribute = () => console.log(Object.keys(programming)); // o metodo Object.keys é utilizado para extrair as chavez de um objeto
showAllTheAttribute(programming);

//--------------------------------- ATV7 --------------------------------------------
//Crie uma função para exibir no console todos os valores do objeto.
const showAllTheValue = () => console.log(Object.values(programming)); // Object. value, eh um metodo pronto do js
//ou seja, esta pegando do objeto programing os valores dos atributos

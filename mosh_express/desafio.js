import Joi from "joi";
import express from "express";

const app = express();

app.use(express.json());

//"Banco de Dados", pois no momento nao estamos mexendo com BD
const genres = [
  { id: 1, name: "horror" },
  { id: 2, name: "comedy" },
  { id: 3, name: "Science fiction" },
  { id: 4, name: "action" },
  { id: 5, name: "romance" },
];

//request: solicitar
//response: resposta

//GET: Obter informacoes
app.get("/vidly/genres", (request, response) => response.send(genres)); //pega todo os generos do BD

app.get("/vidly/genres/:id", (req, res) => {
  //pega o genero especifico
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) {
    res.status(404).send("The genres with the given ID wasn't found!");
  }
  res.send(genre);
});

//POST: add-Colocar(publica) informacao
app.post("/vidly/genres", (req, res) => {
  // validate
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const { error } = Joi.validate(req.body, schema);

  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };

  genres.push(genre);
  res.send(genre);
});

// PUT: atualizar
app.put("/vidly/genres/:id", (req, res) => {
  //o genero existe?
  const genre = genres.find((c) => c.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!genre) {
    return res.status(404).send(" The Genre not found");
  }
  //validate
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  //atualizar
  genre.name = req.body.name;
  res.send(genre);
});

//DELET
app.delete("/vidly/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!genre) {
    return res.status(404).send(" The Genre not found");
  }

  //deleta
  const index = genres.indexOf(genre);
  genres.splice(index, 1); //ou seja, esta removendo o elemento pelo index, a quantidade de 1, ex.:
  //se o index fosse ==0 e fosse 2 no lugar do 1, a resposta seria: (remove 0 e o 1) ficando com os indexes de 2 pra cima

  //so para confirmar q deletou o certo: retorna oq quer q seja deletado
  res.send(genre);
});

const port = process.env.PORT || 3000;
//process: objto global
//env: variavel ambiente
//PORT: o nome da variavel ambiente, nesse caso porta
// app.listen(3000, () => console.log("Listening on port 3000..."));
app.listen(port, () => console.log(`Listening on port ${port}...`));
//para conseguir rodar a variavel ambiente tem que colocar esse comando:-> $env:PORT="5000"

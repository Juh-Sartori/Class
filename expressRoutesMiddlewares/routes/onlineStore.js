import Joi from "joi";
import express from "express";

const router = express.Router();

const onlineStores = [
  { id: 1, name: "Eletrônicos" },
  { id: 2, name: "Roupas" },
  { id: 3, name: "Produtos de beleza" },
  { id: 4, name: "Produtos para casa" },
  { id: 5, name: "Alimentos" },
];

//GET: Obter informacoes
router.get("/", (request, response) => response.send(onlineStores)); //pega todo os generos do BD

router.get("/:id", (req, res) => {
  //pega o genero especifico
  const onlineStore = onlineStores.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!onlineStore) {
    res.status(404).send("The genres with the given ID wasn't found!");
  }
  res.send(onlineStore);
});

//POST: add-Colocar(publica) informacao
router.post("/", (req, res) => {
  // validate
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const { error } = Joi.validate(req.body, schema);

  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const onlineStore = {
    id: onlineStores.length + 1,
    name: req.body.name,
  };

  onlineStores.push(onlineStore);
  res.send(onlineStore);
});

// PUT: atualizar
router.put("/:id", (req, res) => {
  //o genero existe?
  const onlineStore = onlineStores.find(
    (c) => c.id === parseInt(req.params.id)
  ); //o resultado é retornado em uma string
  if (!onlineStore) {
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
  onlineStore.name = req.body.name;
  res.send(onlineStore);
});

//DELET
router.delete("/:id", (req, res) => {
  const onlineStore = onlineStores.find(
    (c) => c.id === parseInt(req.params.id)
  ); //o resultado é retornado em uma string
  if (!onlineStore) {
    return res.status(404).send(" The Genre not found");
  }

  //deleta
  const index = onlineStores.indexOf(onlineStore);
  onlineStores.splice(index, 1); //ou seja, esta removendo o elemento pelo index, a quantidade de 1, ex.:
  //se o index fosse ==0 e fosse 2 no lugar do 1, a resposta seria: (remove 0 e o 1) ficando com os indexes de 2 pra cima

  //so para confirmar q deletou o certo: retorna oq quer q seja deletado
  res.send(onlineStore);
});

export default router;

import Joi from "joi";
import express from "express";
import genres from "./routes/genres";

const app = express();

app.use(express.json());
app.use("/vidly/genres", genres);

const port = process.env.PORT || 3000;
//process: objto global
//env: variavel ambiente
//PORT: o nome da variavel ambiente, nesse caso porta
// app.listen(3000, () => console.log("Listening on port 3000..."));
app.listen(port, () => console.log(`Listening on port ${port}...`));
//para conseguir rodar a variavel ambiente tem que colocar esse comando:-> $env:PORT="5000"

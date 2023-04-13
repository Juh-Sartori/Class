import express from "express";
import router from "./routes/onlineStore.js";
import { router as main } from "./routes/main.js";

const app = express();

app.use(express.json());
app.use("/", main);
app.use("/api/onlinestore/products", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    title: "My online Store",
    message: "Hello, the Home Store",
  });
});

export { router };

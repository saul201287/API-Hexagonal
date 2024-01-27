import express from "express";

import { createProductController, getAllProductController } from "./DependenciesProduct";

export const productRouter = express.Router();

productRouter.get(
  "/",(req, res) => {getAllProductController.run(req,res).then(() => {
    return null;
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error en el servidor');
  })
});
productRouter.post(
  "/",(req, res) => {createProductController.run(req,res).then(() => {
    return null;
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error en el servidor');
  })
});

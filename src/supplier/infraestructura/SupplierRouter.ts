import express from "express";

import { createSupplierController, getAllSupplierController } from "./DepenciesSupplier";

export const supplierRouter = express.Router();

supplierRouter.get(
  "/",(req, res) => {getAllSupplierController.run(req,res).then(() => {
    return null;
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error en el servidor');
  })
});

supplierRouter.post(
  "/",(req, res) => {createSupplierController.run(req,res).then(() => {
    return null;
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error en el servidor');
  })
});

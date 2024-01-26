import express from "express";

import { createSupplierController, getAllSupplierController } from "./DepenciesSupplier";

export const supplierRouter = express.Router();

supplierRouter.get(
  "/",
  getAllSupplierController.run.bind(getAllSupplierController)
);

supplierRouter.post(
  "/",
  createSupplierController.run.bind(createSupplierController)
);

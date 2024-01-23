import express from "express";

import { createProductController } from "../DependenciesProduct";
import { getAllProductController } from "../DependenciesProduct";

export const productRouter = express.Router();

productRouter.get(
  "/",
  getAllProductController.run.bind(getAllProductController)
);

productRouter.post(
  "/",
  createProductController.run.bind(createProductController)
);

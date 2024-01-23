import { CreateProductUseCase } from "../app/MethodsProducts/CreateProductUseCase";
import { GetAllProductUseCase } from "../app/MethodsProducts/GetAllProductsUseCase";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetAllProductController } from "./controllers/GetAllProductContoller";
import { MysqlProductRepository } from "./repository/MysqlProductRepository";

export const mysqlProductRepository = new MysqlProductRepository();

export const createProductUseCase = new CreateProductUseCase(
  mysqlProductRepository
);

export const getAllUseCase = new GetAllProductUseCase(mysqlProductRepository);

export const createProductController = new CreateProductController(
  createProductUseCase
);

export const getAllProductController = new GetAllProductController(
  getAllUseCase
);

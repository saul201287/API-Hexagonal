import { CreateSupplierUseCase } from "../app/MethodsSupplier/CreateSupplierUseCase";
import { GetAllSupplierUseCase } from "../app/MethodsSupplier/GetAllSupplierUseCase";
import { CreateSupplierController } from "./controllers/CreateSupplierController";
import { GetAllSupplierController } from "./controllers/GetAllSupplierController";
import { MysqlSupplierRepository } from "./repository/MysqlSupplierRepository";

export const mysqlSupplierRepository = new MysqlSupplierRepository();

export const createSupplierUseCase = new CreateSupplierUseCase(
  mysqlSupplierRepository
);

export const getAllUseCase = new GetAllSupplierUseCase(mysqlSupplierRepository);

export const createSupplierController = new CreateSupplierController(
  createSupplierUseCase
);

export const getAllSupplierController = new GetAllSupplierController(
  getAllUseCase
);

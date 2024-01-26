import { Request, Response } from "express";

import { GetAllSupplierUseCase } from "../../app/GetAllSupplierUseCase";

export class GetAllSupplierController {
  constructor(readonly getAllSupplierUseCase: GetAllSupplierUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const supplier = await this.getAllSupplierUseCase.run();
      console.log(supplier);
      if (supplier)
        res.status(200).send({
          status: "success",
          data: supplier.map((supplie: any) => {
            return {
              id: supplie.id,
              nombre: supplie.nombre,
              marca: supplie.marca
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}

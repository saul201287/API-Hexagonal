import { Request, Response } from "express";
import { CreateSupplierUseCase } from "../../app/MethodsSupplier/CreateSupplierUseCase";

export class CreateSupplierController {
  constructor(readonly createSupplierUseCase: CreateSupplierUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const supplier = await this.createSupplierUseCase.run(
        data.nombre,
        data.marca
      );

      if (supplier)
        res.status(201).send({
          status: "success",
          data: {
            id: supplier?.id,
            name: supplier?.nombre,
            marca: supplier?.marca
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        mesagges: error,
      });
    }
  }
}

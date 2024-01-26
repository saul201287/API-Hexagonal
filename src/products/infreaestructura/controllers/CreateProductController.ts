import { Request, Response } from "express";
import { CreateProductUseCase } from "../../app/CreateProductUseCase";

export class CreateProductController {
  constructor(readonly createProductUseCase: CreateProductUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const product = await this.createProductUseCase.run(
        data.nombre,
        data.precio,
        data.cantidad,
        data.proveedor
      );

      if (product)
        res.status(201).send({
          status: "success",
          data: {
            id: product?.id,
            nombre: product?.nombre,
            precio: product?.precio,
            cantidad: product?.cantidad,
            proveedor: product?.proveedor
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

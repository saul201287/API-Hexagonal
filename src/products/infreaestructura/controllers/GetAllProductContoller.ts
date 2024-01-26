import { Request, Response } from "express";

import { GetAllProductUseCase } from "../../app/GetAllProductsUseCase";

export class GetAllProductController {
  constructor(readonly getAllProductUseCase: GetAllProductUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const products = await this.getAllProductUseCase.run();
      console.log(products);
      if (products)
        res.status(200).send({
          status: "success",
          data: products.map((product: any) => {
            return {
              id: product.id,
              nombre: product.nombre,
              precio: product.precio,
              cantidad: product.cantidad,
              proveedor: product.proveedor
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

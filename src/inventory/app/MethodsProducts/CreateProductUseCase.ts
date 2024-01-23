import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/ProductRepository";

export class CreateProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(
    nombre: string,
    precio: number,
    cantidad: number,
    proveedor: number
  ): Promise<Product | null> {
    try {
      const product = await this.productRepository.createProduct(
        nombre,
        precio,
        cantidad,
        proveedor
      );
      return product;
    } catch (error) {
      return null;
    }
  }
}

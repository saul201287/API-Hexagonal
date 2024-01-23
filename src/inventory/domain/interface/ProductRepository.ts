import { Product } from "../entities/Product";

export interface ProductRepository {
  getAll(): Promise<Product[] | null>;
  createProduct(
    nombre: string,
    precio: number,
    cantidad: number,
    proveedor: number
  ): Promise<Product | null>;
}

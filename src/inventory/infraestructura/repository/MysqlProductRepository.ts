import { query } from "../../../database/mysql";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/interface/ProductRepository";

export class MysqlProductRepository implements ProductRepository {
  async getAll(): Promise<Product[] | null> {
    const sql = "SELECT * FROM productos";
    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (product: any) =>
          new Product(
            product.id,
            product.nombre,
            product.precio,
            product.cantidad,
            product.proveedor
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createProduct(
    nombre:string,
    precio: number,
    cantidad: number,
    proveedor: number
  ): Promise<Product | null> {
    const sql =
      "INSERT INTO productos (nombre,precio,cantidad,proveedor) VALUES (?, ?, ?, ?)";
    const params: any[] = [nombre, precio, cantidad, proveedor];
    try {
      const [result]: any = await query(sql, params);
      return new Product(result.insertId, nombre, precio, cantidad, proveedor);
    } catch (error) {
      return null;
    }
  }
}

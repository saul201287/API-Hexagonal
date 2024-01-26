import { query } from "../../database/mysql";
import { Supplier } from "../domain/Supplier";
import { SupplierRepository } from "../domain/SupplierRepository";

export class MysqlSupplierRepository implements SupplierRepository {
  async getAll(): Promise<Supplier[] | null> {
    const sql = "SELECT * FROM proveedor";
    try {
      const [data]: any = await query(sql, []);
      const dataSupplier = Object.values(JSON.parse(JSON.stringify(data)));

      return dataSupplier.map(
        (supplier: any) =>
          new Supplier(supplier.id, supplier.nombre, supplier.marca)
      );
    } catch (error) {
      return null;
    }
  }

  async createSupplier(
    nombre: string,
    marca: string
  ): Promise<Supplier | null> {
    const sql = "INSERT INTO proveedor (nombre,marca) VALUES (?, ?)";
    const params: any[] = [nombre, marca];
    try {
      const [result]: any = await query(sql, params);
      return new Supplier(result.insertId, nombre, marca);
    } catch (error) {
      return null;
    }
  }
}

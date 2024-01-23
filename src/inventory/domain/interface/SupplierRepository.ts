import { Supplier } from "../entities/Supplier";

export interface SupplierRepository {
  getAll(): Promise<Supplier[] | null>;
  createSupplier(
    nombre: string,
    marca: string
  ): Promise<Supplier | null>;
}
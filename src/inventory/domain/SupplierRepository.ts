import { Supplier } from "./Supplier";

export interface SupplierRepository {
  getAll(): Promise<Supplier[] | null>;
  createSupplier(
    nombre: string,
    marca: string
  ): Promise<Supplier | null>;
}
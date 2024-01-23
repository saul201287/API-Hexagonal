import { Supplier } from "../../domain/entities/Supplier";
import { SupplierRepository } from "../../domain/repository/SupplierRepository";

export class CreateSupplierUseCase {
  constructor(readonly supplierRepository: SupplierRepository) {}

  async run(
    nombre: string,
    marca: string
  ): Promise<Supplier | null> {
    try {
      const supplier = await this.supplierRepository.createSupplier(
        nombre,
        marca,
      );
      return supplier;
    } catch (error) {
      return null;
    }
  }
}

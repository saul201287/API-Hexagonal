import { Supplier } from "../../domain/entities/Supplier";
import { SupplierRepository } from "../../domain/interface/SupplierRepository";

export class GetAllSupplierUseCase {
  constructor(readonly supplierRepository: SupplierRepository) {}

  async run(): Promise<Supplier[] | null> {
    try {
      const result = await this.supplierRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}

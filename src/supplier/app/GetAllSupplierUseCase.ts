import { Supplier } from "../domain/Supplier";
import { SupplierRepository } from "../domain/SupplierRepository";

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

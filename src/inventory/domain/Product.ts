export class Product {
    constructor(
      readonly id: number,
      readonly nombre: string,
      readonly precio: number,
      readonly cantidad: number,
      readonly proveedor: number
    ) {}
  }
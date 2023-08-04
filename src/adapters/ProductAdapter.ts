import { Product } from "../core/entities/Product";

export class ProductAdapter {
    static create(name: string, value: number, category: string, userId?: string, id?: string) {
        return new Product(name, value, category, userId, id);
    }
}
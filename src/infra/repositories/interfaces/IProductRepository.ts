import { Product } from "../../../core/entities/Product";

export interface IProductRepository {
    create(product: Product);
    listAll(userId: string);
    productInfo(id: string);
    delete(id: string);
    update(product: Product);
}
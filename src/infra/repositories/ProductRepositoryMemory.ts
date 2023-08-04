import { ProductAdapter } from "../../adapters/ProductAdapter";
import { Product } from "../../core/entities/Product";
import { IProductRepository } from "./interfaces/IProductRepository";

export class ProductRepositoryMemory implements IProductRepository {

    products: any = [];

    async create(product: Product) {
        const data = {
            id: product.Id,
            name: product.name,
            value: product.value,
            category: product.category,
            userId: product.userId
        }

        const confirm = await this.products.push(data);
        console.log(data);
        return !!confirm;
    }
    async listAll(userId: string) {
        return await this.products.filter(p => p.userId === userId);
    }
    async productInfo(id: string){
        const data = await this.products.find(p => p.id === id);
        if(data) {
            const product = ProductAdapter.create(data.name, data.value, data.category, data.userId, data.id);
            return product;
        }

        return false;
    }
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    update(id: string) {
        throw new Error("Method not implemented.");
    }

}
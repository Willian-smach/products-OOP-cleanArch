import { ProductAdapter } from "../adapters/ProductAdapter";
import { AllProducts } from "../core/usecases/AllProducts";
import { NewProduct } from "../core/usecases/NewProduct";
import { ProductInfo } from "../core/usecases/ProductInfo";
import { ProductRepositoryMemory } from "../infra/repositories/ProductRepositoryMemory";

export class ProductController {
    static async newProduct(params, body) {
        const repository = new ProductRepositoryMemory();
        const newProductMethod = new NewProduct(repository);
        const product = ProductAdapter.create(body.name, body.value, body.category, body.userId);
        return await newProductMethod.exec(product);
    }

    static async listProducts(params, body) {
        const repository = new ProductRepositoryMemory();
        const allProductsMethod = new AllProducts(repository);
        return await allProductsMethod.exec(params.id);
    }

    static async productInfo(params, body) {
        const repository = new ProductRepositoryMemory();
        const productInfoMethod = new ProductInfo(repository);
        return await productInfoMethod.exec(params.userId);
    }
}
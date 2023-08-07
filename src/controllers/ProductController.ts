import { ProductAdapter } from "../adapters/ProductAdapter";
import { AllProducts } from "../core/usecases/product/AllProducts";
import { DeleteProduct } from "../core/usecases/product/DeleteProduct";
import { NewProduct } from "../core/usecases/product/NewProduct";
import { ProductInfo } from "../core/usecases/product/ProductInfo";
import { ProductRepositoryMemory } from "../infra/repositories/ProductRepositoryMemory";
import { ProductRepositorySQL } from "../infra/repositories/ProductRepositorySQL";

export class ProductController {
    static async newProduct(params, body) {
        //const repository = new ProductRepositoryMemory();
        const repositorySQL = new ProductRepositorySQL();
        const newProductMethod = new NewProduct(repositorySQL);
        const product = ProductAdapter.create(body.name, body.value, body.category, body.userId);
        return await newProductMethod.exec(product);
    }

    static async listProducts(params, body) {
        //const repository = new ProductRepositoryMemory();
        const repositorySQL = new ProductRepositorySQL();
        const allProductsMethod = new AllProducts(repositorySQL);
        return await allProductsMethod.exec(params.id);
    }

    static async productInfo(params, body) {
        //const repository = new ProductRepositoryMemory();
        const repositorySQL = new ProductRepositorySQL();
        const productInfoMethod = new ProductInfo(repositorySQL);
        return await productInfoMethod.exec(params.id);
    }

    static async deleteProduct(params, body) {
        const repositorySQL = new ProductRepositorySQL();
        const deleteProductMethod = new DeleteProduct(repositorySQL);
        return await deleteProductMethod.exec(params.id);
    }
}
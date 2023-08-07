import { Product } from "../../core/entities/Product";
import { IProductRepository } from "./interfaces/IProductRepository";
import { db } from "../db/db";

export class ProductRepositorySQL implements IProductRepository {
    async create(product: Product) {
        try {
            await db.query(`INSERT INTO public.produtos (id, name, category, value, "userID", qrcode) 
                            VALUES ($1, $2, $3, $4, $5, $6)`, 
                            [product.Id, product.name, product.category, 
                            product.value, product.userId, product.qrCode]);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async listAll(userId: string) {
        const products = await db.query(`SELECT * FROM public.produtos where "userID" = $1`, [userId]);
        console.log(products);
        if(products) {
            return products;
        }

        return false;
    }
    async productInfo(id: string) {
        const product = await db.oneOrNone(`SELECT * FROM public.produtos where "id" = $1`, [id]);
        console.log(product)
        if(product) {
            return product;
        }
    }
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    update(id: string) {
        throw new Error("Method not implemented.");
    }

}
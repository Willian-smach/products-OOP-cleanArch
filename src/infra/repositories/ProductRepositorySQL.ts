import { Product } from "../../core/entities/Product";
import { IProductRepository } from "./interfaces/IProductRepository";
import { db } from "../db/db";
import { ProductAdapter } from "../../adapters/ProductAdapter";

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
            return ProductAdapter.create(product.name, product.value, product.category, product.userID, product.id);
        }
    }
    async delete(id: string) {
        try {
            await db.query(`DELETE FROM public.produtos where "id" = $1`, [id]);
            return true;
        } catch (error) {
            //console.log(error);
            return false;
        }
    }
    async update(product: Product) {
        try {
            await db.query(`UPDATE public.produtos SET name = $2, category = $3, value = $4 where "id" = $1`, [product.Id, product.name, product.category, product.value]);
            return true;
        } catch (error) {
            //console.log(error);
            return false;
        }
    }

}
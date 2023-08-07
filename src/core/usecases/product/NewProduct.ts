import { IProductRepository } from "../../../infra/repositories/interfaces/IProductRepository";
import { Product } from "../../entities/Product";

export class NewProduct {
    private _repository: IProductRepository;

    constructor(repository: IProductRepository) {
        this._repository = repository;
    }

    async exec(product: Product) {

        if(!product.name || !product.value || !product.category || !product.userId) {
            return {
                message: "Todos os campos são obrigatórios"
            }
        }

        const newP = await this._repository.create(product);
        
        if(newP){
            return {
                message: "Produto adicionado com sucesso"
            } 
        }

        return {
            message: "Não foi possível adicionar o produto"
        } 
    }
}
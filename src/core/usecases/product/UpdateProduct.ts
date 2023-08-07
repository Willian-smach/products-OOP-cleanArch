import { IProductRepository } from "../../../infra/repositories/interfaces/IProductRepository";
import { Product } from "../../entities/Product";

export class UpdateProduct {
    private _repository: IProductRepository;

    constructor(repository: IProductRepository) {
        this._repository = repository;
    }

    async exec(product: Product) {
        const verifyProductExists = await this._repository.productInfo(product.Id);
        if(verifyProductExists) {
            console.log(product)
            const confirmUpdt = await this._repository.update(product);

            if (confirmUpdt) {
                return {
                    message: `Produto ${verifyProductExists.name} atualizado com sucesso`
                } 
            }
        }
        
        return {
            message: "Erro ao atualizar produto"
        } 
    }
}
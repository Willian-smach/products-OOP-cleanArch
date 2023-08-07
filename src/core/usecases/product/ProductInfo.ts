import { IProductRepository } from "../../../infra/repositories/interfaces/IProductRepository";

export class ProductInfo {
    private _repository: IProductRepository;

    constructor(repository: IProductRepository) {
        this._repository = repository;
    }

    async exec(id: string) {

        if(!id) {
            return {
                message: "Nada encontrado"
            }
        }

        const product = await this._repository.productInfo(id);
        
        if(product){
            return product; 
        }

        return {
            message: "Produto não encontrado"
        } 
    }
}
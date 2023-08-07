import { IProductRepository } from "../../../infra/repositories/interfaces/IProductRepository";

export class AllProducts {
    private _repository: IProductRepository;

    constructor(repository: IProductRepository) {
        this._repository = repository;
    }

    async exec(userId: string) {

        const product = await this._repository.listAll(userId);
        
        if(product){
            return product; 
        }

        return {
            message: "Não ha produtos cadastrados"
        } 
    }
}
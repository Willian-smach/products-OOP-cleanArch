import { IProductRepository } from "../../../infra/repositories/interfaces/IProductRepository";

export class DeleteProduct {
    private _repository: IProductRepository;

    constructor(repository: IProductRepository) {
        this._repository = repository;
    }

    async exec(id: string) {
        const product = await this._repository.productInfo(id);
        if(product) {
            console.log(product)
            const confirmDell = await this._repository.delete(id);

            if (confirmDell) {
                return {
                    message: `Produto ${product.name} removido com sucesso`
                } 
            }
        }
        
        return {
            message: "Erro ao remover produto"
        } 
    }
}
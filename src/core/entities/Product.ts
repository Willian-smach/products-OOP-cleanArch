import { uuid } from "uuidv4";

export class Product {
    private readonly id: string;
    public name: string;
    public value: number;
    public category: string;
    public userId: string;
    public qrCode: string;

    constructor(name: string, value: number, category: string, userId?: string, id?: string) {
        this.name = name;
        this.value = value;
        this.category = category;

        if(userId) {
            this.userId = userId;
        }

        if(id) {
            this.id = id;
        }else{
            this.id = uuid();
        }
    }

    public get Id(){
        return this.id;
    }
}
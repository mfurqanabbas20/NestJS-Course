import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id: 1, name: "Mobile", price: 2000},
        {id: 2, name: "Laptop", price: 12000},
        {id: 3, name: "Computer", price: 23000}
    ]

    getAllProducts(){
        return this.products
    }

    getProductById(id: number){
        return this.products.find(item => item.id === id)
    }
}

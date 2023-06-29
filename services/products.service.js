const { faker } = require('@faker-js/faker');

class ProductsService {

    constructor(){
        this.products = [];
        this. generate();
    }

    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.string.uuid(),
                product: faker.commerce.product(),
                price: parseInt(faker.commerce.price()),
                image: faker.image.url(),
            })
        }
    }

    find(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);
            }, 2000);
        })
    }

    findOne(id){
        return this.products.find(item => item.id === id);
    }

    async create(data){
        const newProduct = {
            id: faker.string.uuid(),
            ...data // es lo mismo que ir colocando valor = valor, ya que te lo toma directamente
        }
        this.products.push(newProduct);
        return newProduct;

    }

    async delete(id){
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('ID not found to eliminate');
        }

        this.products.splice(id, 1);
        return {id};
    }

    async update(id, changes){
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('ID not found to update');
        }

        const product = this.products[index];
        this.products[index] = { //lo que hacemos es persistir los datos que tenia el objeto product con el ...product pero le agregamos
                                // los nuevos datos que vienen en el objeto changes mediante ...changes
            ...product,
            ...changes
        };
        return this.products[index];
    }
}

module.exports = ProductsService;
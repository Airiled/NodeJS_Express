// traemos a express
const express = require("express");

//faker data
const { faker } = require('@faker-js/faker');

// creamos una aplicación
const app = express();

const port = 3000;

app.get('/', (req, res)=> {
    res.send('Hola, el servidor esta corriendo!');
})

app.get('/products', (req, res)=>{
    const products = [];
    const { limit } = req.query;

    if(limit){
        for (let index = 0; index < limit; index++) {
            products.push({
                product: faker.commerce.product(),
                price: parseInt(faker.commerce.price()),
                image: faker.image.image(),
            })
        }
        res.json(
            products
        )
    }else{
        res.send('no hay parametros')
    }
})

app.get('/products/offerts', (req, res)=> { // se colocan todos los endpoints antes del endpoint dinamico porque sino ocasiona un error
                                            // tomando al endpoint estatico como uno dinamico
    res.send('Productos en oferta');
})

app.get('/products/:id', (req, res)=>{
    const { id } = req.params;
    res.json({
        id,
        message: 'informacion del producto especifico'
    })
})

//Probamos varios endpoints

app.get('/categories/:categoryId/marcas/:marcaId', (req, res)=>{
    const { categoryId, marcaId } = req.params;
    res.json({
        categoryId,
        marcaId,
        message: 'Informacion de la marca de una categoria especifica'
    })
})

app.listen(port, ()=>{
    console.log('Esta escuchando en el puerto 3000');
})
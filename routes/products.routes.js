const express = require("express");
const { faker } = require('@faker-js/faker');
const router = express.Router()

router.get('/', (req, res)=>{
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

router.get('/offerts', (req, res)=> { // se colocan todos los endpoints antes del endpoint dinamico porque sino ocasiona un error
                                            // tomando al endpoint estatico como uno dinamico
    res.send('Productos en oferta');
})

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    res.json({
        id,
        message: 'informacion del producto especifico'
    })
})

module.exports = router;
const express = require("express");
const ProductsService = require('./../services/products.service');

const router = express.Router()
const service = new ProductsService();

router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
})

router.get('/offerts', (req, res)=> { // se colocan todos los endpoints antes del endpoint dinamico porque sino ocasiona un error
                                    // tomando al endpoint estatico como uno dinamico
    res.send('Productos en oferta');
})

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product)
})

router.post('/', async (req, res)=>{
    const body = req.body;
    const createProduct = service.create(body);
    res.json(createProduct);
})

router.patch('/:id', async (req, res)=>{
    const { id } = req.params;
    const body = req.body;

    const updateProduct = service.update(id, body)
    res.json(updateProduct);
})

router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    const deleteUser = service.delete(id)
    res.json(deleteUser);
})

module.exports = router;
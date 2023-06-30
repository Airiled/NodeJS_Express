const express = require("express");
const ProductsService = require('./../services/products.service');

const router = express.Router()
const service = new ProductsService();

const validatorHandler = require('./../middlewares/validator.handlers');
const { createProductSchema, getProductSchema, updateProductSchema} = require('./../schemas/product.schema');

router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
})

router.get('/offerts', (req, res)=> { // se colocan todos los endpoints antes del endpoint dinamico porque sino ocasiona un error
                                    // tomando al endpoint estatico como uno dinamico
    res.send('Productos en oferta');
})

router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next)=>{
    try {
        const { id } = req.params;
        const product = service.findOne(id);
        res.json(product)
    } catch (error) {
        next(error);
    }
}
)

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res)=>{
        const body = req.body;
        const createProduct = await service.create(body);
        res.status(201).json(createProduct);
    }
)

router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res)=>{
        const { id } = req.params;
        const body = req.body;

        const updateProduct = service.update(id, body)
        res.json(updateProduct);
    }
)

router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    const deleteUser = service.delete(id)
    res.json(deleteUser);
})

module.exports = router;
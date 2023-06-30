const Joi = require('joi');

const id = Joi.string().uuid();
const product = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
    product: product.required(),
    price: price.required(),
    image: image.required()
})

const getProductSchema = Joi.object({
    id: id.required()
})

const updateProductSchema = Joi.object({
    product: product,
    price: price,
    image: image
})

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
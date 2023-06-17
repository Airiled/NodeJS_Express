const express = require('express');
const route = express.Router();
const { faker } = require('@faker-js/faker');


route.get('/', (req, res)=> {
    const { limit } = req.query;
    const companies = [];

    if(limit){
        for (let index = 0; index < limit; index++) {
            companies.push({
                name: faker.company.name(),
                details: 'Detalles de la compania'
            })
        }
        res.json(
            companies
        )
    }
    else{
        res.send('No hay companias registradas');
    }
})

route.get('/gold', (req, res)=>{
    res.json({
        name: faker.company.name(),
        message: 'Informacion de la compania gold premium'
    })
})

module.exports = route;
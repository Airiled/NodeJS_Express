const express = require('express');
const route = express.Router();
const { faker } = require('@faker-js/faker');

route.get('/', (req, res)=>{
    const users = [];
    const { limit } = req.query;
    if(limit){
        for (let index = 0; index < limit; index++) {
            users.push({
                person: faker.person.firstName(),
                gender: faker.person.sex(),
                sign: faker.person.zodiacSign(),
                image: faker.image.url()
            })
        }
        res.json(
            users
        )
    }else{
        res.send('No hay usuarios registrados')
    }
})

route.get('/:id', (req, res)=> {
    const { id } = req.params;
    res.json({
        id,
        message: 'Informacion del usuario especifico'
    })
})

module.exports = route;
// traemos a express
const express = require("express");

// creamos una aplicación
const app = express();
const port = 3000;

app.use(express.json());

const routerApi = require('./routes');

app.get('/', (req, res)=> {
    res.send('Hola, el servidor esta corriendo!');
})

routerApi(app);

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

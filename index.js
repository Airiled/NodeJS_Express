// traemos a express
const express = require("express");

// creamos una aplicación
const app = express();
const port = 3000;

//Libreria BOOM para errores

//Traemos el middleware para los errores
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handlers');


app.use(express.json());

const routerApi = require('./routes');

app.get('/', (req, res)=> {
    res.send('Hola, el servidor esta corriendo!');
})

routerApi(app);

app.use(logErrors); //Siempre se colocan despues que el routerApi
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log('Esta escuchando en el puerto 3000');
})

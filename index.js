import express from "express";
const app = express();
const port = 3000;
import Hora from './src/time.js';


app.get ('/', (req,res) => {

    res.send("Bienvenida/o");
})

app.get ('/hora', (req,res) => {

    const msj=Hora();
    res.send(`Hora actual: ${msj}`);
})

app.get ('/hora', (req,res) => {

    const msj=Hora();
    res.send(`Hora actual: ${msj}`);
})


app.listen (port, () => {

    console.log(`listening on http//localhost:${port}`);

})
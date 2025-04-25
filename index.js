import express from "express";
import Time from './src/time.js';

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Bienvenida/o");
})

app.get ('/hora', (req,res) => {

    const msj=Time.Hora();
    res.send(`Hora actual: ${msj}`);
})

app.get('/fecha-completa', (req,res) => {
    const msj=Time.Fecha();
    res.send(`Fecha completa: ${msj}`);
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})
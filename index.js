import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("Bem vindo ao site!");
});

app.listen(8080, () => {
    console.log('Servidor está rodando!')
});

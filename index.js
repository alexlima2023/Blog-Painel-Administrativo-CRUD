import express from "express";
import bodyParser from "body-parser";
const app = express();

app.get('/', (req, res) => {
    res.render('index');
});

//Static -> Carregar arquivos de imgs, css...
app.use(express.static('public'));

//View Engine -> Configurar para que o express aceite o ejs
app.set('view engine', 'ejs');

//Body parser -> Configurar para que o express entenda o bodyParser e possa trabalhar com formulários.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log('Servidor está rodando!')
});

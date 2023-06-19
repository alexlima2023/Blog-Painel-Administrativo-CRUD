import express from "express";
import bodyParser from "body-parser";
import connection from "./database/database.js";
import categories from "./controllers/categories/categories.controller.js";
import articles from "./controllers/articles/articles.controller.js"
import Article from "./models/Article.js";
import Category from "./models/Category.js";

const app = express();
const categoriesControler = categories; 
const articlesControler = articles; 


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

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!');
    }).catch((err) => {
        console.log(err);
    })

//Using controllers
app.use('/', categoriesControler);
app.use('/', articlesControler);

app.listen(8080, () => {
    console.log('Servidor está rodando!');
});

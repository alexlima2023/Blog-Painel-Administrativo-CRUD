import Sequelize from "sequelize";
import connection from "../database/database.js"
import Category from "./Category.js";

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false //Não permite dados nulos.
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false 
    }
});

Category.hasMany(Article); //Tem muitos.
Article.belongsTo(Category); //Um artigo pertece a uma categoria.

export default Article;
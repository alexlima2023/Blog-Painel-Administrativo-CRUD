import Sequelize from "sequelize";
import connection from "../database/database.js"

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

export default Article;
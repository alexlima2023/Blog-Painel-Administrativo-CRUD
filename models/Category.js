import Sequelize from "sequelize";
import connection from "../database/database.js"

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false //Não permite dados nulos.
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Category;
import Sequelize from "sequelize";

const connection = new Sequelize('blog_crud', 'root', '1q2w!Q@W', {
    host: 'localhost',
    dialect: 'mysql'
});

export default connection;
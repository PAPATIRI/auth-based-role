import { Sequelize } from 'sequelize';

const db = new Sequelize('auth-role-db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;

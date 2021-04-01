import pkg from 'sequelize';
import sequelize from '../db.js';

const { DataTypes } = pkg;
const Sistema = sequelize.define('sistema', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: DataTypes.STRING
});

export default Sistema;
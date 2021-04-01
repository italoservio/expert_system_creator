import pkg from 'sequelize';
import Sistema from './Sistema.js';
import sequelize from '../db.js';

const { DataTypes } = pkg;
const Elemento = sequelize.define('elemento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_sistema_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Elemento.belongsTo(Sistema);

export default Elemento;
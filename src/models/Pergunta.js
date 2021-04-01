import pkg from 'sequelize';
import Sistema from './Sistema.js';
import sequelize from '../db.js';

const { DataTypes } = pkg;
const Pergunta = sequelize.define('pergunta', {
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
    },
    criado_em: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

Pergunta.belongsTo(Sistema);

export default Pergunta;
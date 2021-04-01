import pkg from 'sequelize';
import Elemento from './Elemento.js';
import Pergunta from './Pergunta.js';
import sequelize from '../db.js';

const { DataTypes } = pkg;
const PerguntaElemento = sequelize.define('pergunta_elemento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_elemento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fk_pergunta_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

PerguntaElemento.belongsTo(Elemento);
PerguntaElemento.belongsTo(Pergunta);

export default PerguntaElemento;
import pkg from 'sequelize';
import System from './System.js';
import sequelize from '../db.js';

const { DataTypes } = pkg;
const Question = sequelize.define('question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Question.belongsTo(System);

export default Question;
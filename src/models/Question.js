import pkg from 'sequelize';
import { sequelize } from '../db.js';

const { DataTypes } = pkg;
const Question = sequelize.define('question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Question;
import pkg from 'sequelize';
import { sequelize } from '../db.js';

const { DataTypes } = pkg;
const QuestionElement = sequelize.define('question_element', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

export default QuestionElement;
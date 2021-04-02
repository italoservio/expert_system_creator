import pkg from 'sequelize';
import Element from './Element.js';
import Question from './Question.js';
import sequelize from '../db.js';

const { DataTypes } = pkg;
const QuestionElement = sequelize.define('question_element', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

QuestionElement.belongsTo(Element);
QuestionElement.belongsTo(Question);

export default QuestionElement;
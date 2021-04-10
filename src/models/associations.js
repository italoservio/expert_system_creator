import Question from './Question.js';
import Element from './Element.js';
import QuestionElement from './QuestionElement.js';
import System from './System.js';

System.hasMany(Element, {
    onDelete: 'cascade',
    hooks: true,
});
System.hasMany(Question, {
    onDelete: 'cascade',
    hooks: true,
});

Element.belongsTo(System);
Question.belongsTo(System);

Element.hasMany(QuestionElement, {
    onDelete: 'cascade',
    hooks: true,
});
Question.hasMany(QuestionElement, {
    onDelete: 'cascade',
    hooks: true,
});

QuestionElement.belongsTo(Element);
QuestionElement.belongsTo(Question);

export { System, Element, Question, QuestionElement };
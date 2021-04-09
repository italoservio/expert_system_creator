import Question from './Question.js';
import Element from './Element.js';
import QuestionElement from './QuestionElement.js';
import System from './System.js';

System.hasMany(Element);
System.hasMany(Question);

Element.belongsTo(System);
Question.belongsTo(System);

Element.hasMany(QuestionElement);
Question.hasMany(QuestionElement);

QuestionElement.belongsTo(Element);
QuestionElement.belongsTo(Question);

export { System, Element, Question, QuestionElement };
import express from 'express';

// Controllers
import { ElementController } from './controllers/elementController.js';
import { QuestionElementController } from './controllers/questionElementController.js';
import { QuestionController } from './controllers/questionController.js';
import { SystemController } from './controllers/systemController.js';

const router = express.Router();
const elementController = new ElementController();
const questionElementController = new QuestionElementController();
const questionController = new QuestionController();
const systemController = new SystemController();

// systemController
router.get('/', systemController.index);
router.get('/manage/:id?', systemController.manage);
router.post('/system/create', systemController.create);
router.get('/system/getTitle/:id', systemController.getTitle);
router.delete('/system/delete/:id', systemController.delete);
router.get('/system/get/:id?', systemController.get);
router.get('/system/:id?', systemController.run);
router.get('/system/:id/result', systemController.result);


// elementController
router.delete('/element/delete/:id?', elementController.delete);
router.get('/elements/:systemId?', elementController.getSystemElements);
router.get('/element/:id?', elementController.index);

// questionController
router.get('/questions/:systemId?', questionController.getSystemQuestions);

// questionElementController
router.get('/questionElement/answer', questionElementController.answer);

export { router };
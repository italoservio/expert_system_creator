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
router.get('/manage', systemController.manage);

// questionController
router.get('/all', questionController.getAll)

export { router };
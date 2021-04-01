import express from 'express';

// Controllers
import ElementoController from './controllers/elementoController.js';
import PerguntaElementoController from './controllers/elementoPerguntaController.js';
import PerguntaController from './controllers/perguntaController.js';
import SistemaController from './controllers/sistemaController.js';

const { Router } = express;
const router = Router();

const elementoController = new ElementoController();
const perguntaElementoController = new PerguntaElementoController();
const perguntaController = new PerguntaController();
const sistemaController = new SistemaController();

// Sistema
router.get('/', sistemaController.index);
router.post('/create', sistemaController.create);

// router.get('/answers/:grade', surveyUserController.setValue); usar "req.params" para obter grade (são os route params)

export { router };
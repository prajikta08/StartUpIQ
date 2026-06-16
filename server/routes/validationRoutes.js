import express from 'express';
import { validateIdea, getHistory } from '../controllers/validationController.js';

const router = express.Router();

router.post('/', validateIdea);
router.get('/history', getHistory);

export default router;
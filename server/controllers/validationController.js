import Validation from '../models/Validation.js';
import { analyzeStartupIdea } from '../services/aiService.js';

// POST /api/validate
export const validateIdea = async (req, res, next) => {
  try {
    const { idea } = req.body;
    if (!idea) return res.status(400).json({ message: 'Idea is required' });

    // Call Gemini
    const analysis = await analyzeStartupIdea(idea);

    // Save to MongoDB
    const saved = await Validation.create({ idea, ...analysis });

    res.status(201).json(saved);
  } catch (err) {
    next(err); // passes to errorHandler
  }
};

// GET /api/validate/history
export const getHistory = async (req, res, next) => {
  try {
    const history = await Validation.find().sort({ createdAt: -1 }).limit(10);
    res.json(history);
  } catch (err) {
    next(err);
  }
};

//take an idea, get AI analysis, save it, and return the result.
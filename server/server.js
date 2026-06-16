import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import validationRoutes from './routes/validationRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
connectDB(); // connect to MongoDB

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',          // Vite dev server
    'https://your-app.vercel.app'     // Production frontend
  ],
  credentials: true
}))
app.use(express.json());

// Routes
app.use('/api/validate', validationRoutes);

// Error handler (always last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
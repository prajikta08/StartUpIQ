import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import validationRoutes from './routes/validationRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
connectDB(); // connect to MongoDB (no longer crashes the server if this fails)

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://startupiq.vercel.app',
  /\.vercel\.app$/
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (curl, server-to-server, Postman)
    if (!origin) return callback(null, true);
    const ok = allowedOrigins.some((o) =>
      o instanceof RegExp ? o.test(origin) : o === origin
    );
    if (ok) {
      callback(null, true);
    } else {
      console.warn('🚫 CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Simple health check so you can verify the server is actually alive
// without hitting the DB or Groq at all — hit this URL directly in
// your browser: https://startupiq-rsjf.onrender.com/health
app.get('/health', (req, res) => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  res.json({
    status: 'ok',
    mongoState: states[mongoose.connection.readyState] || 'unknown',
  });
});

// Routes
app.use('/api/validate', validationRoutes);

// Error handler (always last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
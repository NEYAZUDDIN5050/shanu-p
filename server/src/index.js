import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';
import productRoutes from './routes/productRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import therapyRoutes from './routes/therapyRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'PhysioCare API is running' });
});

app.use('/api/therapies', therapyRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

start();

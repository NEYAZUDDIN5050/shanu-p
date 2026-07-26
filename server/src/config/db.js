import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/physiocare';

  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected');
  } catch (err) {
    if (process.env.NODE_ENV === 'production') {
      throw err;
    }
    console.warn(`MongoDB connection failed (dev mode): ${err.message}`);
    console.warn('API will start without database. Start MongoDB before Stage 2.');
  }
};

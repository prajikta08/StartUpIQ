import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    // Log the error but DO NOT crash the whole server.
    // If we exit here, Express never finishes booting, so it can't
    // attach CORS headers to ANY response — which is exactly what
    // makes a backend crash look like a "CORS error" in the browser.
    console.error('❌ MongoDB connection failed:', err.message);
  }
};

export default connectDB;